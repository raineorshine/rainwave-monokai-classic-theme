import fs from 'fs'
import path from 'path'

const inputPath = process.argv[2]
if (!inputPath) {
  console.error('Please specify a path.')
  process.exit(1)
}

const input = fs.readFileSync(inputPath, 'utf-8')
const replaced = input.replace(
  /<!-- TEMPLATE( START)?: (.+?) -->(?:.+?<!-- TEMPLATE END: .+? -->)?/gms,
  (match, init, injectedPath) => {
    const extension = path.extname(injectedPath)
    const content = fs.readFileSync(injectedPath, 'utf-8').trim()
    return `<!-- TEMPLATE START: ${injectedPath} -->

\`\`\`${extension.slice(1)}
${content}
\`\`\`

<!-- TEMPLATE END: ${injectedPath} -->`
  },
)

fs.writeFileSync(inputPath, replaced)
