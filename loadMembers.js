var members = JSON.parse(`
  [
 {
   "Name": "Sarah Elizabeth Walworth",
   "Roll": 107
 },
 {
   "Name": "Trevor Chinen Dent",
   "Roll": 217
 },
 {
   "Name": "Samuel Ian Solondz",
   "Roll": 235
 },
 {
   "Name": "Ashley Nicole Montalvo",
   "Roll": 241
 },
 {
   "Name": "Alex Thomas Urbanski",
   "Roll": 247
 },
 {
   "Name": "Cooper Douglas Jones",
   "Roll": 254
 },
 {
   "Name": "Charles Henry MacCraiger",
   "Roll": 255
 },
 {
   "Name": "Alex Chinen Dent",
   "Roll": 257
 },
 {
   "Name": "Madison Ryan Heath",
   "Roll": 258
 },
 {
   "Name": "Pamela Anne Dahlberg",
   "Roll": 259
 },
 {
   "Name": "Suchita Lulla",
   "Roll": 264
 },
 {
   "Name": "Alexandra Nieves Ferguson",
   "Roll": 266
 },
 {
   "Name": "Kelsea Elaine Keenan",
   "Roll": 268
 },
 {
   "Name": "Arash Yousefzadeh",
   "Roll": 270
 },
 {
   "Name": "Mitchell Jett Spencer",
   "Roll": 271
 },
 {
   "Name": "Madeline Wilkes LaMee",
   "Roll": 272
 },
 {
   "Name": "Sarah Ann Woronoff",
   "Roll": 274
 },
 {
   "Name": "Garrett William Hempy",
   "Roll": 275
 },
 {
   "Name": "Kevin Gordon Vandeveld",
   "Roll": 276
 },
 {
   "Name": "Arthur Caio de Oliveira Gajdys",
   "Roll": 277
 },
 {
   "Name": "Michael James Sciarabba",
   "Roll": 278
 },
 {
   "Name": "Talley Anne Cain",
   "Roll": 279
 },
 {
   "Name": "McKayla Taylor Vlasity",
   "Roll": 280
 },
 {
   "Name": "Divya Bhagya Bandreddi",
   "Roll": 281
 },
 {
   "Name": "Connor Shamwow Killoran",
   "Roll": 282
 },
 {
   "Name": "Jonathan Philip Cohen",
   "Roll": 283
 },
 {
   "Name": "Serena Rose Evans-Lutterodt",
   "Roll": 284
 },
 {
   "Name": "Ryan Kendall Hughes",
   "Roll": 285
 },
 {
   "Name": "Ian Richard Claras",
   "Roll": 286
 },
 {
   "Name": "Cameron Elle Welyki",
   "Roll": 287
 },
 {
   "Name": "Clara Ann Rachel Wilson",
   "Roll": 288
 },
 {
   "Name": "Benjamin Luke Beaumont",
   "Roll": 289
 },
 {
   "Name": "Michael Ahmad Lajevardi",
   "Roll": 291
 },
 {
   "Name": "Evangeline Heon Frechette",
   "Roll": 292
 },
 {
   "Name": "Colin Mackenzie Claytor",
   "Roll": 293
 },
 {
   "Name": "Kelsey Ann Lynch",
   "Roll": 294
 },
 {
   "Name": "Richard Huu Nyguen",
   "Roll": 295
 },
 {
   "Name": "Grace Hyde McCall",
   "Roll": 296
 },
 {
   "Name": "Yazen Sus",
   "Roll": 297
 },
 {
   "Name": "Avery Helen Ostrand",
   "Roll": 298
 },
 {
   "Name": "Michel Francois Monnet",
   "Roll": 299
 },
 {
   "Name": "Kimberly Elizabeth Bower",
   "Roll": 300
 },
 {
   "Name": "Kaitlyn Elizabeth Olson",
   "Roll": 301
 },
 {
   "Name": "Erin Kate Bobby",
   "Roll": 302
 },
 {
   "Name": "Mohamed El Amine Aichiouene",
   "Roll": 303
 },
 {
   "Name": "Brayden King Cadwallader",
   "Roll": 304
 },
 {
   "Name": "Hayley Marie Kinlaw",
   "Roll": 305
 },
 {
   "Name": "Star Dora Fassler",
   "Roll": 306
 },
 {
   "Name": "Emily Anne Jordan",
   "Roll": 307
 },
 {
   "Name": "Angelina Grace Chavez",
   "Roll": 308
 },
 {
   "Name": "Joseph Patrick Rooney",
   "Roll": 309
 },
 {
   "Name": "Michael George Gigiolio",
   "Roll": 310
 },
 {
   "Name": "William George Thomas Platt",
   "Roll": 311
 },
 {
   "Name": "Jason Dennis Herron",
   "Roll": 312
 },
 {
   "Name": "Devin Willard Sharpe",
   "Roll": 313
 },
 {
   "Name": "Rosie Pearl Stewart",
   "Roll": 314
 },
 {
   "Name": "Bryan Loyd Thomas Harant",
   "Roll": 315
 },
 {
   "Name": "Daniel McLucas Crook",
   "Roll": 316
 },
 {
   "Name": "Benjamin Jacob Simon",
   "Roll": 317
 },
 {
   "Name": "Andreas Peter Brecl",
   "Roll": 318
 },
 {
   "Name": "Hannah Christine Newton",
   "Roll": 319
 }
]
  `);

  $(document).ready(function(){
    var i = 0;
    for(i;i < Object.keys(members).length; i++){
      var name = members[i]["Name"];
      var roll = members[i]["Roll"];

      $( "#members" ).append( $( "<div class = 'member'><h3>"+name+"</h3> <p>" + roll + "</p> </div>" ) );
    }
  });
