const util = require('../../utils/util');

Page({

	/**
   * 页面的初始数据
   */
	data: {
		scale: 1,
		location: {
			latitude:24.738036758626574,
			longitude:-66.09141025827961
		},
		markers: [{
			id: 1,
			latitude:24.738036758626574,
			longitude:-66.09141025827961,
			width: 50,
			height: 50,
			iconPath: '../../img/model02.png',
		}],
		polyline: [{
			points: [{
				latitude:24.738036758626574,
				longitude:-66.09141025827961
				},{
				latitude:20.97257908240793,
				longitude:-66.92304726143118
				},{
				latitude:17.20542410418054,
				longitude:-67.72603162101457
				},{
				latitude:13.437056767375472,
				longitude:-68.50687933749794
				},{
				latitude:9.667901397494916,
				longitude:-69.27123897732488
				},{
				latitude:5.8983409120192105,
				longitude:-70.02413755972456
				},{
				latitude:2.128731334558847,
				longitude:-70.77017863219754
				},{
				latitude:-1.6405902010176123,
				longitude:-71.51374034600181
				},{
				latitude:-5.409293391030774,
				longitude:-72.25910522974696
				},{
				latitude:-9.177046437697364,
				longitude:-73.01061045355596
				},{
				latitude:-12.943507297950351,
				longitude:-73.77281858379436
				},{
				latitude:-16.708309276008674,
				longitude:-74.55067467742127
				},{
				latitude:-20.471051952032234,
				longitude:-75.3497043574752
				},{
				latitude:-24.231286241083108,
				longitude:-76.17624603950595
				},{
				latitude:-27.988486218595206,
				longitude:-77.03780610141136
				},{
				latitude:-31.742033752448638,
				longitude:-77.94344137403087
				},{
				latitude:-35.491168984098245,
				longitude:-78.90436019779246
				},{
				latitude:-39.234935687060215,
				longitude:-79.9347557057914
				},{
				latitude:-42.97211125747313,
				longitude:-81.05298061632756
				},{
				latitude:-46.70107011031451,
				longitude:-82.28337089341365
				},{
				latitude:-50.41961292467163,
				longitude:-83.65898465263255
				},{
				latitude:-54.12465245503963,
				longitude:-85.22599397277357
				},{
				latitude:-57.811711512417574,
				longitude:-87.05098636805512
				},{
				latitude:-61.474052115189245,
				longitude:-89.23342305317095
				},{
				latitude:-65.10103282862775,
				longitude:-91.92825369963198
				},{
				latitude:-68.6749361420261,
				longitude:-95.38887832564566
				},{
				latitude:-72.16424756255383,
				longitude:-100.05336477400911
				},{
				latitude:-75.50820572735452,
				longitude:-106.72454714014395
				},{
				latitude:-78.57903828762474,
				longitude:-116.93438221337072
				},{
				latitude:-81.09051250581678,
				longitude:-133.40967275565524
				},{
				latitude:-82.46201449115533,
				longitude:-158.60173267898006
				},{
				latitude:-82.07833544471904,
				longitude:172.8656948359596
				},{
				latitude:-80.14291938112588,
				longitude:151.32859208091364
				},{
				latitude:-77.3493651804015,
				longitude:137.87370681225715
				},{
				latitude:-74.14526196904599,
				longitude:129.39492854265677
				},{
				latitude:-70.73460017681096,
				longitude:123.69397454812221
				},{
				latitude:-67.21009279149014,
				longitude:119.60262293339288
				},{
				latitude:-63.617454269198454,
				longitude:116.50151214453199
				},{
				latitude:-59.98123230981292,
				longitude:114.04445404345745
				},{
				latitude:-56.31562004642881,
				longitude:112.0263585399613
				},{
				latitude:-52.629315724954154,
				longitude:110.31913909653827
				},{
				latitude:-48.927937175981285,
				longitude:108.8390644241532
				},{
				latitude:-45.21525807902662,
				longitude:107.52920489607399
				},{
				latitude:-41.49390464182604,
				longitude:106.34954926414275
				},{
				latitude:-37.76575858149589,
				longitude:105.27109654514359
				},{
				latitude:-34.03220642643767,
				longitude:104.27228383186677
				},{
				latitude:-30.294293195594395,
				longitude:103.33668451935843
				},{
				latitude:-26.552826558835424,
				longitude:102.45147834254644
				},{
				latitude:-22.808438308658978,
				longitude:101.60644050824328
				},{
				latitude:-19.061644124347396,
				longitude:100.79323818566156
				},{
				latitude:-15.31286918517651,
				longitude:100.00491824222621
				},{
				latitude:-11.562474637398685,
				longitude:99.23553158317011
				},{
				latitude:-7.8107755234893865,
				longitude:98.47983262321074
				},{
				latitude:-4.058057430733288,
				longitude:97.73309487144242
				},{
				latitude:-0.3045871367144147,
				longitude:96.99089919547215
				},{
				latitude:3.4493776523281965,
				longitude:96.24898355725786
				},{
				latitude:7.203575975143484,
				longitude:95.50309957913578
				},{
				latitude:10.957736518474926,
				longitude:94.74884861928044
				},{
				latitude:14.71156835895256,
				longitude:93.98155882829955
				},{
				latitude:18.46474535504352,
				longitude:93.19605292280224
				},{
				latitude:22.2168927001171,
				longitude:92.38648426085896
				},{
				latitude:25.967576677161002,
				longitude:91.54603631367806
				},{
				latitude:29.71626453141997,
				longitude:90.66655383539054
				},{
				latitude:33.462312517564726,
				longitude:89.73807841018652
				},{
				latitude:37.20490442798946,
				longitude:88.74814494283072
				},{
				latitude:40.9429849984674,
				longitude:87.68080494161117
				},{
				latitude:44.67518136097537,
				longitude:86.51519217861347
				},{
				latitude:48.39963228896455,
				longitude:85.22330287824057
				},{
				latitude:52.113766216212426,
				longitude:83.76662843395196
				},{
				latitude:55.813922161323866,
				longitude:82.09052733238751
				},{
				latitude:59.494683784287055,
				longitude:80.11493609609634
				},{
				latitude:63.14772849959834,
				longitude:77.71788120688036
				},{
				latitude:66.75958034402527,
				longitude:74.70496182058268
				},{
				latitude:70.30713278760571,
				longitude:70.74978368733589
				},{
				latitude:73.74770397821622,
				longitude:65.27137774652788
				},{
				latitude:76.99550673988148,
				longitude:57.1770708253075
				},{
				latitude:79.86277234212864,
				longitude:44.39118551038083
				},{
				latitude:81.93212841534574,
				longitude:23.772217274135503
				},{
				latitude:82.50923158888763,
				longitude:-4.511025758091601
				},{
				latitude:81.29147033157689,
				longitude:-30.5912356697607
				},{
				latitude:78.8518018921292,
				longitude:-47.92787795318094
				},{
				latitude:75.80659620162487,
				longitude:-58.63236557138378
				},{
				latitude:72.46835490515947,
				longitude:-65.5714347869557
				},{
				latitude:68.97604503158611,
				longitude:-70.38809101983786
				},{
				latitude:65.39506564220763,
				longitude:-73.94071146378245
				},{
				latitude:61.75906224887554,
				longitude:-76.69436369937561
				},{
				latitude:58.08679738123984,
				longitude:-78.91620374581325
				},{
				latitude:54.38949645520146,
				longitude:-80.76863301099075
				},{
				latitude:50.674242376929705,
				longitude:-82.35535425707641
				},{
				latitude:46.94573090147895,
				longitude:-83.74549582865994
				},{
				latitude:43.20721319889414,
				longitude:-84.98682123860723
				},{
				latitude:39.460997873114714,
				longitude:-86.11341996106582
				},{
				latitude:35.708802716716946,
				longitude:-87.15030414877627
				},{
				latitude:31.951922050548546,
				longitude:-88.11630463328035
				},{
				latitude:28.191361619964802,
				longitude:-89.02593556656431
				},{
				latitude:24.42793592502424,
				longitude:-89.89063751548792
				},{
				latitude:20.662300663887176,
				longitude:-90.71965172599822
				},{
				latitude:16.895015912065556,
				longitude:-91.52058019864143
				},{
				latitude:13.126555513933047,
				longitude:-92.29986380180486
				},{
				latitude:9.35734294121819,
				longitude:-93.06310329060794
				},{
				latitude:5.587757269419922,
				longitude:-93.81526421257725
				},{
				latitude:1.8181528146014354,
				longitude:-94.56093645483506
				},{
				latitude:-1.9511342498640565,
				longitude:-95.30448450826098
				},{
				latitude:-5.719773727018866,
				longitude:-96.05019090146463
				},{
				latitude:-9.487433285471191,
				longitude:-96.80239963475813
				},{
				latitude:-13.253769494771827,
				longitude:-97.56570742545291
				},{
				latitude:-17.01841352470559,
				longitude:-98.34508665126472
				},{
				latitude:-20.780961540337806,
				longitude:-99.14613123712383
				},{
				latitude:-24.540956772767732,
				longitude:-99.97525473066084
				},{
				latitude:-28.297871589881982,
				longitude:-100.84007279280034
				},{
				latitude:-32.05107590672962,
				longitude:-101.74980617892186
				},{
				latitude:-35.79979108174527,
				longitude:-102.71586130493928
				},{
				latitude:-39.54305235070866,
				longitude:-103.75272500208224
				},{
				latitude:-43.27959954371793,
				longitude:-104.87917346037908
				},{
				latitude:-47.00777633989935,
				longitude:-106.12012320992203
				},{
				latitude:-50.72531853154306,
				longitude:-107.50952712107518
				},{
				latitude:-54.42904666559042,
				longitude:-109.0949164802727
				},{
				latitude:-58.1143435341625,
				longitude:-110.94500299056487
				},{
				latitude:-61.77421160845462,
				longitude:-113.16277907444636
				},{
				latitude:-65.39759964238971,
				longitude:-115.90928010197852
				}],
			color: '#1296db',
			width: 4,
			arrowLine: true
		}],
		isDisabled: false,
	},
	onRunApi:function() {
		const version = wx.getSystemInfoSync().SDKVersion;
		if (util.compareVersion(version, '2.13.0') < 0) {
			// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
			wx.showToast({
				title: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
				icon: 'none'
			});
			return;
		}

		const mapCtx = wx.createMapContext('map', this);
		if (this.data.isDisabled) {
			return;
		}
		this.setData({
			isDisabled: true
		});
		this.timer = setTimeout(() => {
			this.setData({
				isDisabled: false
			},
			clearInterval(i)
			);
		},100000);

		var that = this
		var times = 0
    var i = setInterval(function() {
      times+= 3
      if (times <= 119) {
        mapCtx.moveToLocation({
					longitude : that.data.polyline[0].points[times].longitude,
					latitude : that.data.polyline[0].points[times].latitude,
					// latitude:43.20721319889414,
					// longitude:-84.98682123860723
				})}
     }, 1300)
		mapCtx.moveAlong({
			markerId: 1,
			path: this.data.polyline[0].points,
			duration: 100000,
			autoRotate: true
		});
		
	},
});