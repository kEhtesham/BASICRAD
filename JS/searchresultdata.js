function innerPageData() {
    var deviceType = accordionData[0].results[0].deviceType;
    var manufacturer = accordionData[0].results[0].manufacturer;
    var revisionNumber = accordionData[0].results[0].revisionNumber;
    var lotCode = accordionData[0].results[0].lotCode;
    var capacitance = accordionData[0].results[0].capacitance;
    var negativeTolerance = accordionData[0].results[0].negativeTolerance;
    var positiveTolerance = accordionData[0].results[0].positiveTolerance;   

    var deviceTypeContent = document.getElementById('device_type');
    deviceTypeContent.innerText = deviceType;
    var manufacturerContent = document.getElementById('manufacturer');
    manufacturerContent.innerText = manufacturer;
    var revisionNumberTypeContent = document.getElementById('rev');
    revisionNumberTypeContent.innerText = revisionNumber;
    var lotCodeTypeContent = document.getElementById('lot_code').innerText;
    lotCodeTypeContent = lotCode;
    var capacitanceTypeContent = document.getElementById('capacitance').innerText;
    capacitanceTypeContent = capacitance;
    var negativeTypeContent = document.getElementById('negative_tolerance').innerText;
    negativeTypeContent = negativeTolerance;
    var positiveTypeContent = document.getElementById('positive_tolerance').innerText;
    positiveTypeContent = positiveTolerance;
}

setTimeout(() => {
    innerPageData();    
}, 500);