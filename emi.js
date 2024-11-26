$(function(){
 $("#rangeamount").change(()=>{
   $("#txtamount").val($("#rangeamount").val());
 })
 $("#rangerate").change(()=>{
   $("#txtrate").val($("#rangerate").val());       
 })
 $("#rangeyear").change(()=>{
   $("#txtyear").val($("#rangeyear").val());       
 })

 $("#txtcalculate").click(()=>{
  let p=parseInt($("#txtamount").val());
  let r=parseFloat($("#txtrate").val())/12/1000;
  let n=parseInt($("#txtyear").val()) * 12;
  let calc= p * r * (Math.pow(1+r,n))/Math.pow(1+r,n)-1;
  $("#showemi").html(`Home Loan EMI is <b class="text-danger fw-bold">${calc.toLocaleString('en-in',{style:'currency',currency:'INR'})} </b> for the next ${n} Months`);
 })      

})