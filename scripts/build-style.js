import fs from 'fs/promises'

// add !important to all styles
const css = await fs.readFile('build/style.css', 'utf8')
const cssImportant = css.replace(/;/g, ' !important;')
await fs.mkdir('build', { recursive: true })
await fs.writeFile('build/style.css', cssImportant)
