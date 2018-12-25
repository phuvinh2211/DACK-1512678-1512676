const {encode ,sign,decode ,verify} = require('./lib/transaction');
let { RpcClient } = require('tendermint');
const base32 = require('base32.js');
const request = require('request');
const mysql = require('mysql');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var myprivateKey = 'SDU5CPMDDFK2DONGNHM3AK4NN72HRB6V4LODJLLHJIMXYDC2BXXM3IZF';
var mypublicKey = 'GCSZAZ2XXXYXWQEECG5UPE3YWFESRG2RM7HQKLAQK3VRLOY7KEZU3C23';
var receiverPublicKey = 'GC3JNE4SXHVEMNF4BDFCDNTT5P6QQHGEBNUBQAX6WYJGWJTODLLPYSWW';

const BANDWIDTH_PERIOD = 86400;
const MAX_BLOCK_SIZE = 22020096;
const RESERVE_RATIO = 1;
const MAX_CELLULOSE = Number.MAX_SAFE_INTEGER;
const NETWORK_BANDWIDTH = RESERVE_RATIO * MAX_BLOCK_SIZE * BANDWIDTH_PERIOD;

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dack_blockchain"
});

connect.connect(function(err) {
  if (err)
  {throw err}
    console.log("Connected!");
  return err;
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var balance = 0;
var name ;
var sequence = 0;
var accountEnegy= 0;
var picture = 'abc.com';
var bandwidthTime='10/10/2018';

app.post('/api', function(req, res){
  var pubKey = req.body.address;
  console.log(pubKey)
  var sqlDelete = "DELETE FROM account WHERE address = '"+pubKey+"'";
  console.log("sqldelete"+sqlDelete)
  connect.query(sqlDelete, function (err, result) {
    if (err) throw err;
    console.log("delete complete");
  });
  var txs ;
  var result = [];
  var urlTransaction = 'https://komodo.forest.network/tx_search?query=%22account=%27'+pubKey+'%27%22'+'&per_page=100';
  console.log(urlTransaction);
  request({
    url: urlTransaction,
    json: true
  }, function (error, response, body) {
      txs = body.result.txs;
      for (let i=0; i<txs.length; i++) {
        var b64string = txs[i].tx;
        var buf = Buffer.from(b64string, 'base64');
        var x = decode(buf);
        result.push(x);
      }
      for(let i=0;i<result.length;i++){
        if(result[i].operation==='payment'){
          if(result[i].account === pubKey){
            balance-=result[i].params.amount;
          }
          else{
            balance+=result[i].params.amount;
          }
        }
        if(result[i].operation==='update_account'){
          if(result[i].params.key==="name"){
            name = result[i].params.value;
          }
        }
      }
    accountEnegy = balance*NETWORK_BANDWIDTH/MAX_CELLULOSE;
    sequence = result[result.length-1].sequence;
    console.log(accountEnegy);
    console.log("balance == =============== :"+ balance);
    console.log("name :" +name)
    var sql = "INSERT INTO account VALUES ('"+pubKey+"',"+balance+","+sequence+","+accountEnegy+",'"+bandwidthTime+"','"+name+"','"+picture+"')"
    console.log("sql :"+sql)
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("insert complete");
    });
  })

  res.send('hello world');
});

app.listen(8000);
//Payment
// const tx = {
//   version:1,
//   operation:'payment',
//   params:{
//     address:receiverPublicKey,
//     amount:100
//   },
//   account:mypublicKey,
//   sequence:3,
//   memo:Buffer.alloc(0)
// }
//Update_account name
// const tx = {
//   version:1,
//   operation:'update_account',
//   params:{
//     key:'name',
//     value:Buffer.from(' ')
//   },
//   account:mypublicKey,
//   sequence:24,
//   memo:Buffer.alloc(0)
// }

// const temp = [
//   'GC3JNE4SXHVEMNF4BDFCDNTT5P6QQHGEBNUBQAX6WYJGWJTODLLPYSWW','GDLLXAEH3MYZ3IYEE4JNVYPXXQDA5HY6JMVLU7UFNZJVY7CDVCURFED3']

// //Follow error
// const tx = {
//   version:1,
//   operation:'update_account',
//   params:{
//     key:'followings',
//     value:temp
//   },
//   account:mypublicKey,
//   sequence:36,
//   memo:Buffer.alloc(0)
// }

//Tha tim
// var temp = {
//   type:2,
//   reaction:3
// };
// const tx = {
//   version:1,
//   operation:'interactReaction',
//   params:{
//     object:'2DA81A622C380616ADEEA6BFB2D944D79E225A38B1C98D5679DA41DF69A14CC2',
//     content:temp
//   },
//   account:mypublicKey,
//   sequence:34,
//   memo:Buffer.alloc(0)
// }

// POST
// var temp = {
//   type:1,
//   text:"ngục trung vô tửu diệc vô hoa \n đối thử lương tiêu nại nhược hà \n nhân hướng song tiền khán minh nguyệt \n nguyệt tòng song khích khán thi gia"
// };
// console.log(temp)
// const tx = {
//   version:1,
//   operation:'post',
//   params:{
//     content:temp,
//     keys:[]
//   },
//   account:mypublicKey,
//   sequence:36,
//   memo:Buffer.alloc(0)
// }


// console.log("text:")
// sign(tx,myprivateKey);
// const rq = '0x' + encode(tx).toString('hex');
// console.log(rq);


// let client = RpcClient('https://komodo.forest.network:443')

// // request a block
// client.broadcastTxCommit({ params: result })
//   .then((res) => console.log(res))
//Get url
//url get all transaction

// var url = 'https://komodo.forest.network/tx_search?query=%22account=%27'+mypublicKey+'%27%22'
// console.log(url)
// var urlCommit = 'https://komodo.forest.network/broadcast_tx_commit?tx='+rq;
// console.log(urlCommit);
// request({
//     url: urlCommit,
//     json: true
// }, function (error, response, body) {
//   console.log(body)
// })


// var b64string = "ATCewog42ViOLFGBql9PsUnxSHUqSoNuw9Gk+t+p6jUwd/hDAAAAAAAAADQABABVCmZvbGxvd2luZ3MASAACMMS05n+pdwJFHSH8kvoXniIH0MFHCNLiPM7R/NZfWCMphA8wMMWFw3hZ102NPuOeeBpiTQPY6c1vc7yuNNSNOzDQ1oYG54ifYnHJ/fnXameajjbpfyQDXYMc87gQ8FM8hDATgNiOntOLYIcLCureB/U0aauNvYn1v+o+SiRUSeFiLBo5wQI=";

// var buf = Buffer.from(b64string, 'base64');
// var x = decode(buf)
// console.log("lllllllllllllllllllll")
// console.log(x);