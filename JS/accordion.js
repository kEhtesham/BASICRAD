
function accordionFunction() {
    const accordionDataElement = document.getElementById('accordion_data_element_id');
    var result = accordionData[0].results.reduce(function (r, a) {
        r[a.partNumber] = r[a.partNumber] || [];
        r[a.partNumber].push(a);
        return r;
    }, Object.create(null));

    for(a=0; a< Object.keys(result).length; a++) {

        const adAccButtonElement = document.createElement('div');
         adAccButtonElement.setAttribute('class', 'accordion_elem');
         adAccButtonElement.setAttribute('id', 'accordion_elem_' + a);
         accordionDataElement.appendChild(adAccButtonElement);

            const accHeading = document.createElement('div');
             accHeading.setAttribute('class', 'acc_heading active');
             adAccButtonElement.appendChild(accHeading);

                              // accordion heading
                 const accHead = document.createElement('div');
                 accHead.setAttribute('class', 'acc_head acc_head_top');
                 accHeading.appendChild(accHead);

                    const downArrow = document.createElement('i');
                     downArrow.setAttribute('class', 'fas fa-chevron-down');
                     accHead.appendChild(downArrow);

                         const acordionContentwrap = document.createElement('div');
                         acordionContentwrap.setAttribute('class', 'acc_content_head_wrap');
                         acordionContentwrap.setAttribute('id', Object.keys(result)[a]);
                         accHead.appendChild(acordionContentwrap);
                         acordionContentwrap.appendChild(document.createTextNode(Object.keys(result)[a]));

                            const acordionContentinnerwrap = document.createElement('span');
                            acordionContentwrap.appendChild(acordionContentinnerwrap);
                            acordionContentinnerwrap.appendChild(document.createTextNode('| ' + 'SKU:XXXXXXXXX'));
                            
                            const acordionRadiationinfo = document.createElement('div');
                            acordionRadiationinfo.setAttribute('class', 'radiation_test_detail');
                            accHead.appendChild(acordionRadiationinfo);
                            acordionRadiationinfo.appendChild(document.createTextNode('( ' + result[Object.keys(result)[a]].length + ' Radiation Tests)'));

                            //accordion sub heading content
                            const accSubHead = document.createElement('div');
                            accSubHead.setAttribute('class', 'acc_head acc_head_bottom');
                            accHeading.appendChild(accSubHead);
                                
                                const accRating = document.createElement('div');
                                accRating.setAttribute('class', 'ratings');
                                accSubHead.appendChild(accRating);
                                const star = parseInt(Math.random() * (5 - 0) + 0);
                                    for (r=0; r<5; r++) {
                                        const accRatingelem = document.createElement('i');
                                        if(r <= star){
                                            accRatingelem.setAttribute('class', 'fas fa-star active');
                                        } else {
                                            accRatingelem.setAttribute('class', 'fas fa-star');
                                        }
                                        accRating.appendChild(accRatingelem);
                                    }
                                
                                const reviewCount = document.createElement('div');
                                reviewCount.setAttribute('class', 'no_of_reviews more_review_info');
                                reviewCount.appendChild(document.createTextNode('(' + '30' + ' Rad Reviews)'));
                                accSubHead.appendChild(reviewCount);

                                const latestView = document.createElement('div');
                                latestView.setAttribute('class', 'latest_viewed more_review_info');
                                latestView.appendChild(document.createTextNode('View on ' + 'octopart'));
                                accSubHead.appendChild(latestView);

                                    const accContent = document.createElement('div');
            accContent.setAttribute('class', 'acc_content');
            accContent.setAttribute('style', 'display:block');
            adAccButtonElement.appendChild(accContent);
            
            const rowInnerContentClass= [ {class: 'part_number', key: 'partNumber', value: ''},
                {class: 'SKU', key: '', value: 'SKU-02'}, 
                {class: 'device_type', key: 'deviceType', value: ''},
                {class: 'manufacturer updated', key: 'manufacturer', value: ''},
                {class: 'rev', key: 'revisionNumber', value: ''},
                {class: 'rev_date', key: 'revisionDate', value: ''},
                {class: 'lot_code', key: 'lotCode', value: ''},
                {class: 'capacitance updated', key: 'capacitance', value: ''},
                {class: 'rated_voltage updated', key: 'ratedVoltage', value: ''},
                {class: 'positive_tolerance updated', key: 'positiveTolerance', value: ''},
                {class: 'negative_tolerance updated', key: 'negativeTolerance', value: ''},
                {class: 'radiation_test updated', key: 'ratedVoltage', value: ''},
                {class: 'test_category updated', key: 'testCategory', value: ''},
                {class: 'source updated', key: 'source', value: ''},
                {class: 'test_date updated', key: 'testDate', value: ''},
                {class: 'test_details updated', key: 'testDetails', value: ''},
                {class: 'result updated', key: 'testResult', value: ''},
                {class: 'documents updated', key: 'testDocuments', value: ''},
                {class: 'testFacility updated', key: 'testFacility', value: ''}
            ];

            // const rowInnerDocumentClass= [
            //     {class: 'file_name', key: 'fileName', value: ''},
            //     {class: 'file_URL', key: 'link', value: ''}
            // ];


            // console.log(rowInnerDocumentClass.length);

            // acordionRadiationinfo.appendChild(document.createTextNode('(' + result[Object.keys(result)[a]].length + 'Radiation Tests)'));

            for (i=0; i< result[Object.keys(result)[a]].length; i++) {
                
                const rowContent = document.createElement('div');
                rowContent.setAttribute('class', 'row_content');
                accContent.appendChild(rowContent);

                for (m=0; m< rowInnerContentClass.length; m++) {

                    const rowInnerContent= document.createElement('div');
                    rowInnerContent.setAttribute('class', rowInnerContentClass[m].class);


                    const rowInnerWrapp= document.createElement('div');
                    rowInnerWrapp.setAttribute('class', 'href_wrap');

                    

                    // console.log(rowDocumentContent);

                    if(rowInnerContentClass[m].key === ''){
                        rowInnerContent.appendChild(document.createTextNode(rowInnerContentClass[m].value));
                    }
                    else if(rowInnerContentClass[m].key === 'testDocuments'){                        
                        const tempLength = result[Object.keys(result)[a]][i][rowInnerContentClass[m].key].length;

                        if(tempLength > 1) {
                            const rowDocumentContentImg= document.createElement('img');
                            rowDocumentContentImg.setAttribute('class', 'pdf_icon');
                            rowDocumentContentImg.setAttribute('src', 'Images/pdf-file.svg');

                            const rowDocumentContentElem= document.createElement('div');
                            rowDocumentContentElem.setAttribute('class', 'files');

                            rowDocumentContentElem.appendChild(document.createTextNode('2 Documents'));

                            const rowDocumentIcon= document.createElement('i');
                            rowDocumentIcon.setAttribute('class', 'fas fa-caret-down');
                            rowInnerContent.appendChild(rowDocumentContentImg);
                            rowInnerContent.appendChild(rowDocumentContentElem);
                            rowInnerContent.appendChild(rowDocumentIcon);

                            for (s=0; s<2; s++) {
                                const rowDocumentContent= document.createElement('a');
                                rowDocumentContent.setAttribute('download', 'newfilename');
                                rowDocumentContent.setAttribute('onclick', 'downloadFileFunction()');
                                rowDocumentContent.setAttribute('href', result[Object.keys(result)[a]][i][rowInnerContentClass[m].key][s].link);
                                rowDocumentContent.appendChild(document.createTextNode(result[Object.keys(result)[a]][i][rowInnerContentClass[m].key][s].fileName));

                                // console.log(rowDocumentContent);
                                rowInnerWrapp.appendChild(rowDocumentContent);
                                rowDocumentContentElem.appendChild(rowInnerWrapp);
                            }                            
                        } else if(tempLength === 1) {
                            let rowDocumentContent= document.createElement('a');
                            rowDocumentContent.setAttribute('download', 'newfilename');
                            rowDocumentContent.setAttribute('class', 'files');

                            rowDocumentContent.setAttribute('href', result[Object.keys(result)[a]][i][rowInnerContentClass[m].key][0].link);
                            rowDocumentContent.appendChild(document.createTextNode('Radiation Test'));
                            rowInnerContent.appendChild(rowDocumentContent);

                            // console.log(rowInnerContent);
                        } else {
                            let rowDocumentContent= document.createElement('div');
                            rowDocumentContent.appendChild(document.createTextNode('[no Files Located]'));
                            rowInnerContent.appendChild(rowDocumentContent);
                        }
                    }
                    else {
                        rowInnerContent.appendChild(document.createTextNode(result[Object.keys(result)[a]][i][rowInnerContentClass[m].key]));
                    }
                    rowContent.appendChild(rowInnerContent);
                }

            }
            const accHeadingfix = document.createElement('div');
            accHeadingfix.setAttribute('class', 'acc_heading_fix');
            adAccButtonElement.appendChild(accHeadingfix);
    }
}


function accordionFunctionRun() {
    const accordionComps = document.getElementsByClassName("acc_heading");
    let k;
    for (k = 0; k < accordionComps.length; k++) {
        accordionComps[k].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    }
}