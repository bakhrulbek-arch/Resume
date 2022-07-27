let edition_set = document.querySelectorAll('.edition_set')
let inp_edit = document.querySelector('.inp_edit')
let inp_edition = document.querySelector('.inp_edition')
let edit = document.querySelector('.edit')

let save_change = document.querySelector('.save_change')


let set_edit = () => {

    // edit.onclick = () => {

    edition_set.forEach(item => {
        item.onclick = () => {
            edit.classList.add('edit_hide')
            inp_edition.classList.add('inp_edition_active')
            inp_edit.onkeyup = () => {
                if (inp_edit.value.length === 0) {
                    save_change.innerHTML = "Закрыть"
                } else {
                    save_change.innerHTML = "Сохранить Данные"
                    item.innerHTML = inp_edit.value
                }
            }
            save_change.onclick = () => {
                inp_edition.classList.remove('inp_edition_active')

                console.log(inp_edit.value);
                if (inp_edit.value.length === 0) {
                    save_change.innerHTML = "Закрыть"

                } else {
                    save_change.innerHTML = "Сохранить Данные"
                    item.innerHTML = inp_edit.value
                    inp_edit.value = ""
                }


            }
        }
    });
    // }
}
let add_lang = document.querySelector('.add_lang')
let language = document.querySelectorAll('.language')

let lang_select = document.querySelector('.lang_select')
let lang_set = document.querySelector('.lang_set')

let add_language = () => {
    language.forEach(lang_item => {
        add_lang.onclick = () => {
            if (lang_set.innerHTML === lang_item.value) {
                lang_select.innerHTML = `Пожалуйста <b>выберите</b> нужный вам <b>Язык</b>`
                setTimeout(() => {
                    lang_select.innerHTML = ''
                }, 5000);
            } else {
                let lang_set = document.createElement('p')
                lang_set.classList.add('lang_set')
                // lang_select.innerHTML = `  ${lang_item.value} Язык  Добавлень`
                lang_select.append(lang_set.innerHTML = ` ${lang_item.value}, `)
            }
        }

    });
    let clear_lang_select = document.querySelector('.clear_lang_select')
    clear_lang_select.onclick = () => {
        lang_select.innerHTML = ''
    }
}
let year = document.querySelector('.year')
year.innerHTML = new Date().getFullYear()

let blc_window = document.querySelector('.blc_window')
let cls_img_block = document.querySelector('.cls_img_block')

// let img_load = document.querySelector('.img_load').value
let profil_photo_border = document.querySelector('.profil_photo-border')

profil_photo_border.onclick = () => {
    blc_window.classList.add('blc_window_act')
}
cls_img_block.onclick = () => {
    blc_window.classList.remove('blc_window_act')
}

export { add_language, set_edit }