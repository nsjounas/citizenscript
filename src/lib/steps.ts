import { BrowserStep } from "./types"

export const selectProcedure: BrowserStep<void> = async({ page }) => {
  await page.selectOption('select.mf-input__l', '4010')
    await page.click('#btnAceptar')
      await page.waitForLoadState()
}

export const goToDataForm: BrowserStep<void> = async({ page }) => {
  await page.click('#btnEntrar')
    await page.waitForLoadState()
}

export const fillForm: BrowserStep<void> = async({ page }) => { 
  await page.fill('#txtIdCitado', 'Y7499269H')
    await page.fill('#txtDesCitado', 'René José Flores Camacho')
      await page.selectOption('#txtPaisNac', '248')
          await page.fill('#txtFecha', '08/08/2021')
            await page.click('#btnEnviar')
              await page.waitForLoadState()
}

export const requestTicket: BrowserStep<void> = async({ page }) => {
    await page.click('#btnEnviar')
      await page.waitForLoadState()
}

export const ticketsAvailable: BrowserStep<boolean> = async({ page }) => {
  const msg = await page.isVisible('p.mf-msg__info')
    return !msg
}


export const goNext: BrowserStep<void> = async({ page }) => {
  await page.click('#btnSiguiente') // not sure
    await page.waitForLoadState()
}

export const selectOffice: BrowserStep<void> = async({page}) => {
  const sedes = {
  'CALLE GUADALAJARA, 1': 48,
  'BADALONA, AVDA. DELS VENTS, 9': 18,
  'CASTELLDEFELS, PLAÇA DE L`ESPERANTO, 4': 19,
  'CERDANYOLA DEL VALLES, VERGE DE LES FEIXES, 4': 20,
  'CORNELLA DE LLOBREGAT, AV. SANT ILDEFONS, S/N': 21,
  'EL PRAT DE LLOBREGAT, CENTRE, 4': 23,
  'GRANOLLERS, RICOMA, 65': 28,
  'IGUALADA, PRAT DE LA RIBA, 13': 26,
  'LHOSPITALET DE LLOBREGAT, Rbla. Just Oliveres, 43': 17,
  'MANRESA, SOLER I MARCH, 5': 38,
  'MATARO, AV. GATASSA, 15': 27,
  'MONTCADA I REIXAC, MAJOR, 38': 31,
  'RIPOLLET, TAMARIT, 78': 32,
  'RUBI, TERRASSA, 16': 29,
  'SABADELL, BATLLEVELL, 115': 30,
  'SANT ADRIA DEL BESOS, AV. JOAN XXIII, 2': 33,
  'SANT BOI DE LLOBREGAT, RIERA BASTÉ, 43': 24,
  'SANT CUGAT DEL VALLES, VALLES, 1': 34,
  'SANT FELIU DE LLOBREGAT, CARRERETES, 9': 22,
  'SANTA COLOMA DE GRAMENET, IRLANDA, 67': 35,
  'TERRASSA, BALDRICH, 13': 36,
  'VIC, BISBE MORGADES, 4': 37,
  'VILADECANS, AVDA. BALLESTER, 2': 25,
  'VILAFRANCA DEL PENEDES, Avinguda Ronda del Mar, 109': 46,
  'VILANOVA I LA GELTRU, VAPOR, 19': 39,
  'MALLORCA GRANADOS, MALLORCA, 213': 14,
  'PSJ PLANTA BAJA, PASSEIG SANT JOAN, 189': 43,
  'RAMBLA GUIPUSCOA 74, RAMBLA GUIPUSCOA, 74': 16,
  'UE BCN-C/MURCIA, 42, MURCIA, 42': 5,
  'PASSEIG DE SANT JOAN, PASSEIG DE SANT JOAN, 189': 6,
}

const sede = async(likely: Array<number>) => {
  for(const id of likely) {
    if(!!await page.$(`option[value="${id}"]`))
      await page.selectOption('#idSede', `${id}`)
        return
  }

  await page.selectOption('#idSede', `${Object.keys(sedes)[0]}`)
}

  await sede([
    sedes["BADALONA, AVDA. DELS VENTS, 9"],
    sedes["SANTA COLOMA DE GRAMENET, IRLANDA, 67"],
    sedes["RAMBLA GUIPUSCOA 74, RAMBLA GUIPUSCOA, 74"]
  ])
}

export const fillContactForm: BrowserStep<void> = async({ page }) => {
  await page.fill('#txtTelefonoCitado', '632517023')
  await page.fill('#emailUNO', 'renejfc@gmail.com')
  await page.fill('#emailDOS', 'renejfc@gmail.com')
}

export const selectDate: BrowserStep<void> = async({ page }) => {
  await page.click('#cita1')
}