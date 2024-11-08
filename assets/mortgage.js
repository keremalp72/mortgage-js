const hesaplaBtn = document.querySelector("#hesapla");
hesaplaBtn.addEventListener("click", hesapla);

function hesapla() {
    document.querySelector(".result-show-container").innerHTML = ""

  const miktar = parseFloat(document.querySelector("#miktar").value);
  const sure = parseFloat(document.querySelector("#sure").value);
  const oran = parseFloat(document.querySelector("#oran").value);
  const faiz = miktar * oran * sure;
  document.querySelector(".result-show-container").innerHTML = `<div class="result-container">
  <h1>Your results</h1>
  <p>
    Your results are shown below based on the information you provided.
    To adjust the results, edit the form and click “calculate
    repayments” again.
  </p>
  <div class="repayment-container">
    <h2>Your monthly repayments</h2>
    <h1 id="sonuc">£ 0</h1>
    <p>Total you'll repay over the term</p>
    <h6>£ 0</h6>
  </div>
</div>`
  if (isNaN(miktar) || isNaN(sure) || isNaN(oran)) {
    alert("Lütfen tüm alanlara geçerli bir sayı girin.");
    return;
  }
  
  document.querySelector("#sonuc").innerText = ` £ ${faiz.toFixed(2)}`;
}
