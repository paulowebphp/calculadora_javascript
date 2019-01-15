class CalcController
{

    constructor()
    {
        this._displayCalc = "0";

        this._currentDate;

        this.initialize();

    }//END constructor



    initialize()
    {
        /** Grafia "El" é uma CONVENÇÃO e
         * se refere ao elemento HTML
         */
        let displayCalcEl = document.querySelector("#display");

        let timeEl = document.querySelector("#hora");

        let dateEl = document.querySelector("#data");

        /** Inner HTML faz parte das 
         * propriedades do DOM */
        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "15/01/2019";
        timeEl.innerHTML = "19:46";


    }//END initialize





    /** Getter */
    get displayCalc()
    {
        return this._displayCalc;
    }//getter displayCalc



    /** Setter */
    set displayCalc(valor)
    {
        this._displayCalc = valor;
    }//setter displayCalc



    /** Getter */
    get currentDate()
    {
        return this._currentDate;
    }//getter currentDate



    /** Setter */
    set currentDate(valor)
    {
        this._currentDate = valor;
    }//setter currentDate






    
}//END class CalcController