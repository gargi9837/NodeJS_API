var http=require ('http');
var server=http.createServer(function(req,res){
    var request=require('request');
    request('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=202106&date=15-11-2021'
    ,function(error,responding,body){
        var data=JSON.parse(body);
        let text="";
        for(let i=0;i<data.session.length;i++){
            text +=data.session[i].name+":"+data.sessions[i].available_capacity_dose1+",";}
            res.write(text);
            res.end('');
});
}).listen('8080');
