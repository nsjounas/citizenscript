import type { TPage } from "./types";

import { chromium } from "playwright-chromium"

const url = 'https://sede.administracionespublicas.gob.es/icpplustieb/citar?p=8&locale=es'

export async function browser(ctx: ({ page }: TPage) => Promise<boolean>): Promise<void> {
  const browser = await chromium.launch({ headless: false, chromiumSandbox: true })
  const date = new Date()
  const format = `${date.getDate()}(${date.getUTCDay().toLocaleString()})__${date.getHours()}(${date.getMinutes()})`
  const context = await browser.newContext({ recordVideo: { dir: `videos/${format}` } })
  
  const page = await context.newPage()
  await page.goto(url)
  
  const ticketsAvailable = await ctx({ page })

  if(!ticketsAvailable) {
    await context.close();
      await page.close()
        await browser.close()
  }
}