class CalcController
{

    constructor()
    {
        this._operation = [];
        
        this._locale = 'pt-BR';

        this._displayCalcEl = document.querySelector("#display");

        /** Grafia "El" é uma CONVENÇÃO e
         * se refere ao Elemento HTML
         */
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




    addEventListenerAll( element, events, fn )
    {
        events.split(' ').forEach(event =>
            {
                element.addEventListener(event, fn, false);

            });//end forEach


    }//END addEventListenerAll



    clearAll()
    {
        this._operation = [];

    }//END clearAll





    clearEntry()
    {
        /** Pop retira o ultimo elemento de um array
         */
        this._operation.pop();

    }//END clearEntry



    getLastOperation()
    {
        
        return this._operation[this._operation.length - 1];

    }//END getLastOperation




    setLastOperation( value )
    {
        this._operation[this._operation.length - 1] = value;

    }//END setLastOperation




    pushOperation( value )
    {
        this._operation.push(value);

        if ( this._operation.length > 3 )
        {

            this.calc();

        }//end if

    }//END pushOperation



    calc()
    {
        let last = this._operation.pop();

        let result = eval(this._operation.join(""));

        this._operation = [result, last];

    }//END calc



    isOperator( value )
    {
        /** indexOf é um método de arrays
         * que busca o valor passado como 
         * parâmetro dentro do array em questão e,
         * se achar, retorna o index do elemento 
         * (o index do elemento é 0 ou positivo, tem
         * valor booleano true ao retornar), 
         * caso contrário, se não encontrar, retorna
         * o valor de -1 (o valor de -1 tem valor
         * booleano de false) */
        return ( ['+','-','*','/','%'].indexOf(value) > -1 );

    }//END isOperator



    setLastNumberToDisplay()
    {
        
    }//END setLastNumberToDisplay


    
    addOperation( value )
    {
        if ( isNaN( this.getLastOperation() ) ) 
        {
            /** É String (isNaN é true) */
            if ( this.isOperator(value) )
            {
                /** Se é um operador, troca-se
                 * para outro operador */
                this.setLastOperation(value);

            }//end if
            else if( isNaN( value ) )
            {
                /** Se não é operador, ou seja, 
                 * é ponto ou igual (não pode ser 
                 * numero pois está dentro do if 
                 * do isNaN, então realiza outra ação */
                console.log('OUTRA coisa', value);

            }//end else if
            else
            {
                /** Push adicona um novo elemento na ultima
                 * posião de um array
                 */
                this.pushOperation(value);
            }//end else

        }//end if
        else
        {
            if ( this.isOperator(value) )
            {
                this.pushOperation(value);
            }//end if
            else
            {
                /** É Number (isNaN é false) */
                let newValue = this.getLastOperation().toString() + value.toString();

                /** Push adicona um novo elemento na ultima
                 * posião de um array
                 */
                this.setLastOperation( parseInt(newValue) );

                /** ATUALIZAR DISPLAY */
                this.setLastNumberToDisplay();

            }//end else

        }//end else

    }//END addOperator




    setError()
    {
        this.displayCalc = "Error";

    }//END setError



    
    execBtn( value )
    {
        switch ( value ) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;
        
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation( parseInt(value) );
                break;

            default:
                this.setError();
                break;

        }//end switch

    }//END execBtn




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
                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            });//end addEventListenerAll



            this.addEventListenerAll( btn, "mouseover mouseup mousedown", e =>
            {
                btn.style.cursor = "pointer";
            });//end addEventListenerAll


        });//end forEach


    }//END initButtonsEvents





    setDisplayDateTime()
    {
        this.displayDate = this.currentDate.toLocaleDateString( this._locale, {

            day: "2-digit",
            month: "long",
            year: "numeric"

        });
                
        this.displayTime = this.currentDate.toLocaleTimeString( this._locale );

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
    set displayTime( value )
    {
        this._timeEl.innerHTML = value;
    }//setter displayTime




    /** Setter */
    set displayDate( value )
    {
        this._dateEl.innerHTML = value;
    }//setter displayDate




    /** Getter */
    get displayCalc()
    {
        return this._displayCalcEl.innerHTML;
    }//getter displayCalc





    /** Setter */
    set displayCalc( value )
    {
        this._displayCalcEl.innerHTML = value;
    }//setter displayCalc





    /** Getter */
    get currentDate()
    {
        return new Date();
    }//getter currentDate





    /** Setter */
    set currentDate( value )
    {
        this._currentDate = value;
    }//setter currentDate






    
}//END class CalcController