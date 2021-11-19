export function remover_acentos_espaco(str) {
    var com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ´`^¨~';
    var sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC     ';
    for (let l in str) {
        for (let l2 in com_acento) {
            if (str[l] == com_acento[l2]) {
                str = str.replace(str[l], sem_acento[l2]);
            }
        }
    }
    //console.log(str)

    return str;
}