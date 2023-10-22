type ElementSpec =
  | [string]
  | [string, { [key: string]: string }]
  | [string, { [key: string]: string }, string | ElementSpec[]]

/** Continuously poll a function until it returns a value other than null or undefined. */
const waitFor = <T>(f: () => T, pollFrequency = 100): Promise<NonNullable<T>> => {
  return new Promise((resolve, reject) => {
    let interval = 0
    const check = () => {
      const result = f()
      if (result != null) {
        clearInterval(interval)
        resolve(result)
      }
    }
    interval = setInterval(check, pollFrequency)
    check()
  })
}

/** JQuery-style query selector. */
const $ = document.querySelector.bind(document)

/** XPath selector. */
const $x = (xpath: string) =>
  document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue

/** Create an element. */
const $$ = (tagSpec: string, attributes: { [key: string]: string } = {}, content?: string | ElementSpec[]) => {
  const [tag, ...classNames] = tagSpec.split('.')
  const el = document.createElement(tag)

  // class names
  classNames.forEach(className => {
    el.classList.add(className)
  })

  // attributes
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })

  if (typeof content === 'string') {
    el.appendChild(document.createTextNode(content))
  } else if (typeof content === 'object') {
    for (const spec of content) {
      // RECURSION
      el.appendChild($$.apply(null, spec))
    }
  }

  return el
}

/** Create an inline style attribute. */
const $s = (styles: { [key: string]: string | number | null | undefined }) => ({
  style: Object.entries(styles)
    .map(([key, value]) => (value != null ? `${key}: ${value};` : ''))
    .join(' '),
})

const Settings = () =>
  $$('div', {}, [
    ['div.setting_subheader', {}, 'Theme'],
    [
      'div.setting_group',
      {},
      [
        [
          'div.multi_select',
          $s({ float: 'none' }),
          [
            ['span.link', $s({ 'margin-left': 0 }), 'Default'],
            ['span.link.selected', {}, 'Monokai Classic Theme'],
          ],
        ],
      ],
    ],
  ])

;(async () => {
  const settingsLink = await waitFor(() => $x("//*[contains(@class, 'menu')]//a[text()='Settings']"))
  settingsLink?.addEventListener('click', async () => {
    const settingsContent = await waitFor(() => $('.modal_container.open .content.main'))
    settingsContent.appendChild(Settings())
  })
})()
