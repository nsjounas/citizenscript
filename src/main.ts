import {
  browser,
  selectProcedure,
  goToDataForm,
  fillForm,
  requestTicket,
  ticketsAvailable,
  goNext,
  fillContactForm,
  selectOffice,
  selectDate
} from "./lib"

browser(async({ page }) => {
  await selectProcedure({ page })
    await goToDataForm({ page })
      await fillForm({ page })
        await requestTicket({ page })
          if (await ticketsAvailable({ page })) {
            await selectOffice({ page })
              await goNext({ page })
                await fillContactForm({ page })
                  await goNext({ page })
                    await selectDate({ page })
                      await goNext({ page })
                    return true
          } else { return false }
})