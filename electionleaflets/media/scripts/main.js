function upload(){

    //validation goes here
<<<<<<< HEAD

=======
    
>>>>>>> origin/current_live
    //hide form and show loading gif
    document.getElementById('frmLeaflet').style.display = "none";
    document.getElementById('divLoading').style.display = "block";

    //javascript post goes here
<<<<<<< HEAD

}

function uploadImages(){
	// $(document).scrollTop(0);

 //   document.getElementById('frmUpload').style.position = "absolute";
 //   document.getElementById('frmUpload').style.left = "-2000px";
 //   document.getElementById('uploading').style.display = "block";

   return true;
}

=======
    
}

function showMap(sMapProvider, nLng, nLat){

    var oMapstraction = new Mapstraction('divSpotMap', sMapProvider);

    oMapstraction.addControls({
        overview: true          
    });

    // create a lat/lon object
    var oPoint = new LatLonPoint(nLat,nLng);

    // display the map centered on a latitude and longitude (Google zoom levels)
    oMapstraction.setCenterAndZoom(oPoint, 11);

    // create a marker positioned at a lat/lon 
    oMarker = new Marker(oPoint);
    oMarker.setIcon("/media/images/marker.png", [15,15], null);
    oMarker.setShadowIcon("/media/images/shadow.png",1);
 
    // display marker
    oMapstraction.addMarker(oMarker);
}

function uploadImages(){
	$(document).scrollTop(0);
	
   document.getElementById('frmUpload').style.position = "absolute";    
   document.getElementById('frmUpload').style.left = "-2000px";       
   document.getElementById('divUploading').style.display = "block";
    
   return true;
}

function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    $('#btnNext').bind('click', function() {
        carousel.next();
        return false;
    });

    $('#btnPrevious').bind('click', function() {
        carousel.prev();
        return false;
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

>>>>>>> origin/current_live
function setupRate(){

    var aItems = $('#hidRateItems').val().split(',');
    for (var i=0; i < aItems.length; i++) {
        if(aItems[i] != ''){
             $("#divRate_" + aItems[i] + " div.slider").slider({
                    value: 50,
                    change: function (event, ui){
                            iRateId = $(this).parent().attr('id').split('_')[1];
                            $('#hidRateValue_' + iRateId).val($(this).slider('value'));
                        }
<<<<<<< HEAD
                    });
=======
                    });        
>>>>>>> origin/current_live
        }
    };
}

function setupUploader(){
    $("#uploadify").uploadify({
        'uploader'       : 'script/uploadify.swf',
        'script'         : '/upload.php',
        'buttonText'     : 'Select files from your computer',
        'buttonImg'      : 'images/upload.png',
        'width'          : 400,
        'height'         : 80,
        'scriptData'     : {
                                '_is_postback'          : $('[name=_is_postback]').val(),
<<<<<<< HEAD
                                '_is_uploadify'          : 1,
=======
                                '_is_uploadify'          : 1,                                
>>>>>>> origin/current_live
                                '_viewstate'            : $('[name=_viewstate]').val(),
                                '_postback_command'     : $('[name=_postback_command]').val(),
                                '_postback_argument'    : $('[name=_postback_argument]').val()
                            },
        'cancelImg'      : '/images/cancel.png',
        'folder'         : 'uploads',
        'queueID'        : 'divFileQue',
        'auto'           : true,
        'multi'          : true,
        'simUploadLimit' : 4,
        'onSelectOnce'   : function(){
                                      $('#divFileQue p.hint').hide();
                               },
        'onComplete'     : function(event,queueId,file,response,data){
                                        //console.log(response);
                                        var json = $.evalJSON(response);
                                        $.each(json.images,function(index,image_url){
                                                $('#imageList').prepend("<div><img src='"+image_url+"'/></div>");
                                        });
                                    },
        'onOpen'         : function(){
                                        $('[name=addInfo]').attr('disabled', 'disabled');
                                    },
        'onAllComplete'  : function(){
                                        $('[name=addInfo]').attr('disabled', '');
                                    },
        'onProgress'      : function(event,queueId,file,data){
                                            if (data.percentage==100){
                                                     $('#uploadify'+queueId+' > .percentage').text(' - Processing ...');
                                                     $('#uploadify'+queueId+'ProgressBar').css("width","100%");
<<<<<<< HEAD
                                                     return false;
=======
                                                     return false;   
>>>>>>> origin/current_live
                                            }
                                            return true;
                                    }
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/current_live
