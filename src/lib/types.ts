import { Page } from "playwright-chromium"

export interface TPage {
  page: Page
}

export type BrowserStep<T> = ({ page }: TPage, ...args: any) => Promise<T>