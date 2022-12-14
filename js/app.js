"use strict";



(function(){
    const enlaces__encima = document.querySelectorAll(".cuerpo__principal");
    const contenedor__img = document.querySelectorAll(".cuerpo__enlaces img");
    const contenedor__enlaces = document.querySelectorAll(".cuerpo__enlaces");
    const h4__trabajos = document.querySelector('.cuerpo__work h2');

    const fondo = document.querySelector(".cuerpo");
    const presentacion = document.querySelector(".datos");

    const flechaIzq = document.querySelector(".flechas__flecha.izq");
    const flechaDer = document.querySelector(".flechas__flecha.der");
    const slider = document.querySelector(".desplazable");
    const info = document.querySelectorAll(".datos__info");

    const contenedor__contacto = document.querySelector(".contacto");
    const formulario = document.querySelector(".contacto__formulario");

    let posicion = 0;

    fondo.addEventListener("mouseover", function () {
    presentacion.classList.add("mover");
    fondo.classList.add("aparece");
    contenedor__contacto.classList.remove('ocultar');
    h4__trabajos.classList.add('deshacer');
    });
    fondo.addEventListener("mouseout", function () {
    presentacion.classList.remove("mover");
    fondo.classList.remove("aparece");
    contenedor__contacto.classList.add('ocultar');
    h4__trabajos.classList.remove('deshacer');
    });

    enlaces__encima.forEach((cadaEnlace, i) => {
    cadaEnlace.addEventListener("mousemove", function (e) {
        var RatonX = e.offsetX;
        var RatonY = e.offsetY;
        var Ancho = enlaces__encima[i].offsetWidth / 2;
        var Alto = enlaces__encima[i].offsetHeight / 2;
        var Speed = 6;

        var OperacionY = (RatonY - Alto) / Speed;
        var OperacionX = (RatonX - Ancho) / Speed;

        contenedor__img[
        i
        ].style.boxShadow = `${OperacionX}px ${OperacionY}px 30px #555555,  ${-OperacionX}px ${-OperacionY}px 30px #292929`;
    });
    cadaEnlace.addEventListener("click", function () {
        enlaces__encima.forEach((cadaEnlace, j) => {
        contenedor__enlaces[j].classList.remove("ocultar");
        });
        contenedor__enlaces[i].classList.add("ocultar");
    });
    });

    flechaDer.addEventListener("click", function () {
    posicion++;

    let operacion__slider = posicion * -25;

    if (posicion > 3) {
        posicion = 3;
    }
    flechas();
    slider.style.transform = `translateX(${operacion__slider}%)`;

    verInfo();
    });

    flechaIzq.addEventListener("click", function () {
    posicion--;

    let operacion__slider = posicion * -25;

    if (posicion < 0) {
        posicion = 0;
    }
    flechas();

    slider.style.transform = `translateX(${operacion__slider}%)`;

    verInfo();
    });
    

    window.addEventListener('scroll',()=>{
        let pixel = window.scrollY
        let alturaVentana = window.innerHeight
        let distanciaVert = contenedor__contacto.offsetTop
        if (pixel >= distanciaVert - alturaVentana / 1.5) {
          contenedor__contacto.classList.add('aparece');
          setTimeout(() => {
              formulario.classList.add('aparece');
          }, 2000);
      }
      else {
        contenedor__contacto.classList.remove('aparece');
        formulario.classList.remove('aparece')
      }   
    })

    function flechas() {
    if (posicion <= 0) {
        flechaDer.classList.remove("ocultar");
        flechaIzq.classList.add("ocultar");
    } else if (posicion >= 3) {
        flechaDer.classList.add("ocultar");
        flechaIzq.classList.remove("ocultar");
    } else {
        flechaDer.classList.remove("ocultar");
        flechaIzq.classList.remove("ocultar");
    }
    }

    function verInfo() {
    info.forEach((cadaInfo, i) => {
        cadaInfo.classList.remove("ver");
    });
    info[posicion].classList.add("ver");
    }

})()


    

JotForm.init(function () {
    if (window.JotForm && JotForm.accessible)
      $("input_10").setAttribute("tabindex", 0);
    JotForm.setCustomHint("input_10", "Type here...");
    JotForm.newDefaultTheme = true;
    JotForm.extendsNewTheme = false;
    JotForm.newPaymentUIForNewCreatedForms = true;
    JotForm.newPaymentUI = true;
    JotForm.alterTexts({
      ageVerificationError:
        "Debe ser mayor de {minAge} a??os para enviar este formulario.",
      alphabetic: "Este campo solo puede contener letras.",
      alphanumeric: "Este campo solo puede contener letras y n??meros.",
      appointmentSelected: "Ha seleccionado {time} del {date}",
      ccDonationMinLimitError: "La Cantidad M??nima es {minAmount} {currency}",
      ccInvalidCVC: "El n??mero CVC no es v??lido.",
      ccInvalidExpireDate: "La fecha de expiraci??n no es v??lida",
      ccInvalidNumber: "El n??mero de su tarjeta de cr??dito no es v??lido.",
      ccMissingDetails: "Please fill up the credit card details.",
      ccMissingDonation: "Favor ponga valores n??mericos en la cantidad a donar.",
      ccMissingProduct: "Por favor seleccione al menos un producto.",
      characterLimitError: "Demasiados caracteres. El l??mite es",
      characterMinLimitError: "Muy pocos caracteres. El m??nimum es",
      confirmClearForm: "??Est?? seguro que desea limpiar el formulario?",
      confirmEmail: "El correo electr??nico no coincide",
      currency: "Este campo s??lo puede contener valores de moneda.",
      cyrillic: "Este campo solo puede contener caracteres cir??licos.",
      dateInvalid: "Esta fecha no es valida. El formato de fecha es {format}",
      dateInvalidSeparate: "Esta fecha no es v??lida. Ponga una {element} v??lida",
      dateLimited: "Esta fecha no est?? disponible.",
      disallowDecimals: "Por favor, introduzca un n??mero entero.",
      dragAndDropFilesHere_infoMessage: "Arrastre y suelte archivos aqu??",
      email: "Introduzca una direcci??n e-mail v??lida",
      fillMask: "El valor de este campo debe llenar la mascara",
      freeEmailError: "No se permiten cuentas de correo gratuitas",
      generalError:
        "Existen errores en el formulario, por favor corr??jalos antes de continuar.",
      generalPageError:
        "Hay errores en esta p??gina. Por favor, corr??jalos antes de continuar.",
      gradingScoreError:
        "El puntaje total deber??a ser s??lo &amp;quot;menos que&amp;quot; o &amp;quot;igual que&amp;quot;",
      incompleteFields:
        "Existen campos requeridos incompletos. Por favor compl??telos.",
      inputCarretErrorA: "La entrada no debe ser inferior al valor m??nimo:",
      inputCarretErrorB: "La entrada debe ser menor al valor:",
      lessThan: "Su puntuaci??n deber??a ser menor o igual que",
      maxDigitsError: "El m??ximo de d??gitos permitido es",
      maxFileSize_infoMessage: "Tama??o de Archivo M??x.",
      maxSelectionsError: "The maximum number of selections allowed is ",
      minSelectionsError: "El n??mero m??nimo de opciones obligatorias es",
      multipleFileUploads_emptyError:
        "El fichero {file} est?? vac??o; por favor, seleccione de nuevo los ficheros sin ??l.",
      multipleFileUploads_fileLimitError:
        "Solo {fileLimit} carga de archivos permitida.",
      multipleFileUploads_minSizeError:
        "{file} is demasiado peque??o, el tama??o m??nimo de fichero es: {minSizeLimit}.",
      multipleFileUploads_onLeave:
        "Se est??n cargando los ficheros, si cierras ahora, se cancelar?? dicha carga.",
      multipleFileUploads_sizeError:
        "{file} es demasiado grande; el tama??o del archivo no debe superar los {sizeLimit}.",
      multipleFileUploads_typeError:
        "El fichero {file} posee una extensi??n no permitida. S??lo est??n permitidas las extensiones {extensions}.",
      multipleFileUploads_uploadFailed:
        "File upload failed, please remove it and upload the file again.",
      noSlotsAvailable: "No hay cupos disponibles",
      noUploadExtensions:
        "File has no extension file type (e.g. .txt, .png, .jpeg)",
      numeric: "Este campo s??lo admite valores num??ricos.",
      pastDatesDisallowed: "La fecha debe ser futura",
      pleaseWait: "Por favor, espere ...",
      required: "Este campo es obligatorio.",
      requireEveryCell: "Se requieren todas las celdas.",
      requireEveryRow: "Todas las filas son obligatorias.",
      requireOne: "Al menos un campo requerido.",
      restrictedDomain: "This domain is not allowed",
      slotUnavailable:
        "{time} del {date} ha sido tomada. Favor seleccionar otro espacio.",
      uploadExtensions: "Solo puede subir los siguientes archivos:",
      uploadFilesize: "Tama??o del archivo no puede ser mayor que:",
      uploadFilesizemin: "Tama??ao de archivo no puede ser menos de:",
      url: "Este campo solo contiene una URL v??lida.",
      validateEmail: "You need to validate this e-mail",
      wordLimitError: "Demasiadas palabras. El l??mite es",
      wordMinLimitError: "Muy pocas palabras. El m??nimo es",
    });
    JotForm.clearFieldOnHide = "disable";
    JotForm.submitError = "jumpToFirstError";
    /*INIT-END*/
  });
  
  JotForm.prepareCalculationsOnTheFly([
    null,
    null,
    { name: "submit2", qid: "2", text: "Enviar", type: "control_button" },
    null,
    null,
    {
      description: "",
      name: "nombre",
      qid: "5",
      text: "Nombre",
      type: "control_fullname",
    },
    {
      description: "",
      name: "email",
      qid: "6",
      subLabel: "ejemplo@ejemplo.com",
      text: "Email",
      type: "control_email",
    },
    null,
    null,
    null,
    {
      description: "",
      name: "mensaje",
      qid: "10",
      subLabel: "",
      text: "Mensaje",
      type: "control_textarea",
    },
  ]);
  setTimeout(function () {
    JotForm.paymentExtrasOnTheFly([
      null,
      null,
      { name: "submit2", qid: "2", text: "Enviar", type: "control_button" },
      null,
      null,
      {
        description: "",
        name: "nombre",
        qid: "5",
        text: "Nombre",
        type: "control_fullname",
      },
      {
        description: "",
        name: "email",
        qid: "6",
        subLabel: "ejemplo@ejemplo.com",
        text: "Email",
        type: "control_email",
      },
      null,
      null,
      null,
      {
        description: "",
        name: "mensaje",
        qid: "10",
        subLabel: "",
        text: "Mensaje",
        type: "control_textarea",
      },
    ]);
  }, 20);
  JotForm.forwardToEu=true;
  JotForm.showJotFormPowered = "new_footer";
  JotForm.poweredByText = "Desarrollado por JotForm";
  var all_spc = document.querySelectorAll(
    "form[id='210694404587057'] .si" + "mple" + "_spc"
  );
  for (var i = 0; i < all_spc.length; i++) {
    all_spc[i].value = "210694404587057-210694404587057";
  }
  
