class MinModalJS {

    modalOpen () {
        this.modal.classList.add('min-modal-js-active');
    }

    modalClose () {
        this.modal.classList.remove('min-modal-js-active');
    }

    modalDestroy() {
        this.modal.remove();
    }

    constructor(inner, obj) {
        if (obj.keyOpen === undefined) {
            obj.keyOpen = 'Escape';
        }

        this.btns = document.querySelectorAll(obj.buttonsActive);
        this.inner = document.querySelector(inner);
        this.closeBtns = document.querySelectorAll(obj.buttonsDisActive);
        this.keyOpen = obj.keyOpen;
        this.modalOutsideClick = obj.modalOutsideClick;
        this.modal = document.createElement('div');
        this.modal.classList.add('modal-wrapper');

        let modalOpen = () => {
            this.modalOpen();
        };
        let modalClose = () => {
            this.modalClose();
        };

        this.modal.append(this.inner);
        document.body.append(this.modal);
        
        this.btns.forEach(element => {
            element.addEventListener('click', () =>{
                modalOpen();
            });
        });

        this.closeBtns.forEach(element => {
            element.addEventListener('click', () =>{
                modalClose();
            });
        });

        if (this.modalOutsideClick != false) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    modalClose();
                }
            });
        }

        if (this.key != false) {
            document.addEventListener('keydown', (e)=> {
                if (e.key === this.keyOpen) { 
                    modalClose();
                }
            });
        }
    }
}