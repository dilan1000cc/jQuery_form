$(document).ready(function(){

    // ---------------------- variables ------------------------------ //

    let firstname = $("#firstname");
    let lastname = $("#lastname");
    let username = $("#username");
    let usernameChanged = false;

    let city = $("#city");
    let pcode = $("#pcode");

    let tel = $("#tel");
    let email = $("#email");
    let address = $("#address");

    let nic = $("#nic");
    let school = $("#school");

    let fcareer = $("#fcareer");
    let dbike = $("#dbike");
    let dcar = $("#dcar");

    // ---------------------- first step ------------------------------ //

    firstname.focusout(function(){
        console.log(firstname.val());
        if (firstname.val() == ""){
            firstname.addClass("is-invalid");
            $("#firstname+div").text("First name is required").addClass("invalid-feedback");
        }else if(firstname.val().length < 5){
            firstname.addClass("is-invalid");
            $("#firstname+div").text("First name have at leas 5 characters").addClass("invalid-feedback");
        }else{
            firstname.removeClass("is-invalid").addClass("is-valid");
            $("#firastname+div").text("").removeClass("invalid-feedback");
            generateUsername();
        }
    })

    lastname.on('focusout' , () => {
        if (lastname.val() == ""){
            lastname.addClass("is-invalid");
            $("#lastname+div").text("Last name is required").addClass("invalid-feedback");
        }else if(lastname.val().length < 5){
            lastname.addClass("is-invalid");
            $("#lastname+div").text("Last name have at leas 5 characters").addClass("invalid-feedback");
        }else{
            lastname.removeClass("is-invalid").addClass("is-valid");
            $("#lastname+div").text("").removeClass("invalid-feedback");
            generateUsername();
        }  
    })

    username.focusout(function(){

        let regEx = /^[A-z0-9]+_[A-z0-9]+[A-z0-9]+[A-z0-9]$/;

        if (username.val() == ""){
            username.addClass("is-invalid");
            $("#username+div").text("User name is empty").addClass("invalid-feedback");
        }else if(!regEx.test(username.val())){
            username.addClass("is-invalid");
            $("#username+div").text("User name pattern is wrong").addClass("invalid-feedback");
        }else{
            username.removeClass("is-invalid").addClass("is-valid");
            $("#username+div").text("").removeClass("invalid-feedback");

            usernameChanged = true;
        }
    })

    function generateUsername(){
        if(firstname.val().length >= 5 && lastname.val().length >=5){
            let usernameVal = firstname.val() + "_" + lastname.val().charAt(0) + lastname.val().charAt(1) + lastname.val().charAt(2);
            usernameVal = usernameVal.toLowerCase();
            console.log("user name = "+usernameVal);
            if(username.val()=="" || !usernameChanged){
                username.val(usernameVal);
            }
            username.removeClass("is-invalid").addClass("is-valid");
            $("#username+div").text("").removeClass("invalid-feedback");
        }
    }

    // ---------------------- second step ------------------------------ //

    city.on('focusout' , () => {
        if (city.val() == ""){
            city.addClass("is-invalid");
            $("#city+div").text("City is required").addClass("invalid-feedback");
        }else{
            city.removeClass("is-invalid");
            $("#city+div").text("").removeClass("invalid-feedback");
        }  
    })

    pcode.on('focusout' , () => {
        if (pcode.val() == ""){
            pcode.addClass("is-invalid");
            $("#pcode+div").text("Postal Code is required").addClass("invalid-feedback");
        }else if(pcode.val().length>5 || pcode.val().length<5){
            pcode.addClass("is-invalid");
            $("#pcode+div").text("Postal Code only have 5 numbers").addClass("invalid-feedback");
        }else{
            pcode.removeClass("is-invalid").addClass("is-valid");
            $("#pcode+div").text("").removeClass("invalid-feedback");
        }  
    })

    // ---------------------- third step ------------------------------ //

    tel.on('focusout' , () => {
        if (tel.val() == ""){
            tel.addClass("is-invalid");
            $("#tel+div").text("Phone number is required").addClass("invalid-feedback");
        }else if(tel.val().length < 10){
            tel.addClass("is-invalid");
            $("#tel+div").text("Phone number contain at least 10 digits").addClass("invalid-feedback");
        }else{
            tel.removeClass("is-invalid");
            $("#tel+div").text("").removeClass("invalid-feedback");
        }  
    })

    address.on('focusout' , () => {
        if (address.val() == ""){
            address.addClass("is-invalid");
            $("#address+div").text("Address is required").addClass("invalid-feedback");
        }else{
            address.removeClass("is-invalid");
            $("#address+div").text("").removeClass("invalid-feedback");
        }  
    })

    email.on('focusout' , () => {
        let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (email.val() == ""){
            email.addClass("is-invalid");
            $("#email+div").text("E-mail is required").addClass("invalid-feedback");
        }else if(!regEx.test(email.val())){
            email.addClass("is-invalid");
            $("#email+div").text("Invalid email address").addClass("invalid-feedback");
        }else{
            email.removeClass("is-invalid").addClass("is-valid");
            $("#email+div").text("").removeClass("invalid-feedback");
        }  
    })

    // ---------------------- fourth step ------------------------------ //

    nic.on('focusout' , () => {
        if (nic.val() == ""){
            nic.addClass("is-invalid");
            $("#nic+div").text("NIC number is required").addClass("invalid-feedback");
        }else if(nic.val().length < 10){
            nic.addClass("is-invalid");
            $("#nic+div").text("Invalid NIC number").addClass("invalid-feedback");
        }else{
            nic.removeClass("is-invalid").addClass("is-valid");
            $("#nic+div").text("").removeClass("invalid-feedback");
        }  
    })

    school.on('focusout' , () => {
        if (school.val() == ""){
            school.addClass("is-invalid");
            $("#school+div").text("School name required").addClass("invalid-feedback");
        }else{
            school.removeClass("is-invalid");
            $("#school+div").text("").removeClass("invalid-feedback");
        }  
    })

    // ---------------------- fifth step ------------------------------ //

    fcareer.on('focusout' , () => {
        if (fcareer.val() == ""){
            fcareer.addClass("is-invalid");
            $("#fcareer+div").text("Future career name required").addClass("invalid-feedback");
        }else{
            fcareer.removeClass("is-invalid");
            $("#fcareer+div").text("").removeClass("invalid-feedback");
        }  
    })

    dbike.on('focusout' , () => {
        if (dbike.val() == ""){
            dbike.addClass("is-invalid");
            $("#dbike+div").text("Dream bike name required").addClass("invalid-feedback");
        }else{
            dbike.removeClass("is-invalid");
            $("#dbike+div").text("").removeClass("invalid-feedback");
        }  
    })

    dcar.on('focusout' , () => {
        if (dcar.val() == ""){
            dcar.addClass("is-invalid");
            $("#dcar+div").text("Dream car name required").addClass("invalid-feedback");
        }else{
            dcar.removeClass("is-invalid");
            $("#dcar+div").text("").removeClass("invalid-feedback");
        }  
    })

    // ---------------------- button work ------------------------------ //

    $("#nextBtn").click(()=>{
        let step = $("#regform").data("step")
        console.log(step); 
        // $("#step_"+step).hide(1000);
        $("#step_"+step).hide(1000);
        step++
        $("#step_"+step).show(1000);
        $("#regform").data("step",step)
        $("#preBtn").show();
        if(step>=5){
            $("#nextBtn").hide();
            $("#subBtn").show();
        }
    })

    $("#preBtn").click(()=>{
        let step = $("#regform").data("step");
        $("#step_"+step).hide(1000);
        step--
        $("#step_"+step).show(1000);
        $("#regform").data("step",step)

        $("#nextBtn").show();
        $("#subBtn").hide();

        if(step==1){
            $("#preBtn").hide();
        }
    })

    $("#subBtn").click(()=>{
        let step = $("#regform").data("step")
        console.log(step); 
        // $("#step_"+step).hide(1000);
        $("#step_"+step).hide(1000);
        step++
        $("#step_"+step).show(1000);
        $("#regform").data("step",step)
        $("#preBtn").hide();
    
        $("#nextBtn").hide();
        $("#subBtn").hide();

        //------------------last form data .val() and .text()----------------//

        var name1 = $("#firstname").val();
        var name2 = $("#lastname").val();
        var form_username = $("#username").val();
        var town = $("#city").val();
        var form_tel = $("#tel").val();
        var form_email = $("#email").val();
        var form_address = $("#address").val();
        var form_nic = $("#nic").val();
        var form_ambition = $("#fcareer").val();

        $("#blank1").text(name1 +" "+ name2);
        $("#blank2").text(form_username);
        $("#blank3").text(town);
        $("#blank4").text(form_tel);
        $("#blank5").text(form_email);
        $("#blank6").text(form_address);
        $("#blank7").text(form_nic);
        $("#blank8").text(form_ambition);
        
    })


})