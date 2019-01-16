 var $all = $('input[type="checkbox"]'); 
$all.click(function (){
    if ($(this).is(':checked')) {
        $(this).next('label').addClass('mark');           
    } else {   	
        $(this).next('label').removeClass('mark')   
    }      
}); 























