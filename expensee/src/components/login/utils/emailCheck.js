/*

Autor: Jonas Ermert
Version: 1.0

*/

// Ueberprüfung eMail

export function emailCheck(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email muss angegeben werden"
    if (!re.test(email)) return 'Dies ist keine gültige Email Adresse'
    return ''
  }