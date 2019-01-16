class CalcController
{

    constructor()
    {
        /** Grafia "El" é uma CONVENÇÃO e
         * se refere ao Elemento HTML
         */
        this._locale = 'pt-BR';

        this._displayCalcEl = document.querySelector("#display");

        this._timeEl = document.querySelector("#hora");

        this._dateEl = document.querySelector("#data");

        this._currentDate;

        this.initialize();

        this.initButtonsEvents();

    }//END constructor



    initialize()
    {
        this.setDisplayDateTime();

        setInterval(

            () => {

                this.setDisplayDateTime();      

            }, 
            1000
        
        );//end setInterval
        

        
    }//END initialize




    addEventListenerAll(element, events, fn)
    {
        events.split(' ').forEach(event =>
            {
                element.addEventListener(event, fn, false);

            });//end forEach


    }//END addEventListenerAll





    initButtonsEvents()
    {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
       
        /** addEventListener recebe dois parãmetros:
         * - qual o evento que eu quero captar
         * - qual é a ação que deve ocorrer
         */
        buttons.forEach( (btn, index) =>
        {
            this.addEventListenerAll(btn, 'click drag', e => 
            {
                /** Pega apenas o valor após btn-
                 * do nome das classes da tag g
                 */
                console.log(btn.className.baseVal.replace("btn-",""));

            });//end addEventListenerAll



            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>
            {
                btn.style.cursor = "pointer";
            });//end addEventListenerAll


        });//end forEach


    }//END initButtonsEvents





    setDisplayDateTime()
    {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{

            day: "2-digit",
            month: "long",
            year: "numeric"

        });
                
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }//END setDisplayDateTime



    /** Getter */
    get displayTime()
    {
        return this._timeEl.innerHTML;
    }//getter displayTime




    /** Getter */
    get displayDate()
    {
        return this._dateEl.innerHTML;
    }//getter displayDate




    /** Setter */
    set displayTime(value)
    {
        this._timeEl.innerHTML = value;
    }//setter displayTime




    /** Setter */
    set displayDate(value)
    {
        this._dateEl.innerHTML = value;
    }//setter displayDate




    /** Getter */
    get displayCalc()
    {
        return this._displayCalcEl.innerHTML;
    }//getter displayCalc





    /** Setter */
    set displayCalc(value)
    {
        this._displayCalcEl.innerHTML = value;
    }//setter displayCalc





    /** Getter */
    get currentDate()
    {
        return new Date();
    }//getter currentDate





    /** Setter */
    set currentDate(value)
    {
        this._currentDate = value;
    }//setter currentDate






    
}//END class CalcController