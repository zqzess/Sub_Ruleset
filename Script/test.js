/*by Liquor remove Super's ad/logo
[Script]
http-response ^https?://.*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js
[MITM]
hostname = *.snssdk.com
*/
var obj = $response.body.replace(/:(\d{19})/g, ':\"$1str\"');
obj = JSON.parse(obj);
if (obj.data.data) {
    for (var i = obj.data.data.length - 1; i >= 0; i--) {
        if (obj.data.data[i].ad_info != null) {
            obj.data.data.splice(i, 1);
        }
    }
}
obj = JSON.stringify(obj);
obj = obj.replace(/:\"(\d{19})str\"/g, ':$1');
$done({body});
