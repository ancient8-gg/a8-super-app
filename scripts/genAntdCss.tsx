import fs from 'fs'
import { extractStyle } from '@ant-design/static-style-extract'

import ThemeProvider from '../src/providers/ThemeProvider'

const outputPath = './public/antd.min.css'

// 1. default theme

// const css = extractStyle();

// 2. With custom theme

const css = extractStyle((node) => <ThemeProvider>{node}</ThemeProvider>)

fs.writeFileSync(outputPath, css)
