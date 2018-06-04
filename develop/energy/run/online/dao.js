


define(function (require) {

    var ret = {};

    String.prototype.repeat = function (n) {
        var _this = this;
        var result = '';
        for (var i = 0; i < n; i++) {
            result += _this;
        }
        return result;
    }

    ret.getGrid1Data = function () {
    	var arr = [];
    	var unit = {};
    	var prop = ['Id'];
    	var data = [
            ['1', '锅炉效率（%）', '90.62', '92.66', '-2.05', '7.94'],
            ['2', '汽机热耗（kj/kWh）', '8399.71', '8204.12', '195.03', '8.17'],
            ['3', '厂用电率（%）', '6.90', '6.90', '0.00', '0.00'],
		];

    	for (var i = 0; i < data[0].length; i++) {
    		prop.push(String.fromCharCode(0x60 + i + 1).repeat(4));
       	}
       	for (var i = 0; i < data.length; i++) {
       		unit[prop[0]] = i+1;
       		for (var j = 1; j < prop.length; j++) {
       			unit[prop[j]] = data[i][j-1];
       		}
       		arr.push(JSON.parse(JSON.stringify(unit)));
       	}
        return arr;
    }

    ret.getGrid2Data = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['1', '锅炉系统', '-', '-', '-', '-', '-', '-', '-'],
            ['2', '汽机系统', '-', '-', '-', '-', '-', '-', '-'],
            ['2.1', '内压缸内效率（%）', '75.83', '81.20', '-12.1', '112.96', '4.62', '-', '4.62'],
            ['2.2', '中压缸内效率（%）', '89.33', '92.50', '-3.17', '70.19', '2.87', '-', '2.87'],
            ['2.3', '主蒸汽压力（MPa）', '13.50', '12.94', '0.56', '14.66', '0.60', '0.60', '-'],
            ['2.4', '主蒸汽温度（℃）', '540.78', '537.00', '3.78', '-9.34', '-0.38', '-0.38', '0.00'],
            ['2.5', '再热汽温度（℃）', '538.63', '537.00', '1.63', '-3.39', '-0.14', '-0.14', '0.00'],
            ['2.6', '再热气压损（%）', '1.97', '10.00', '-8.03', '-53.21', '-2.18', '-', '-2.18'],
            ['2.7', '给水温度（℃）', '243.55', '240.76', '2.79', '-3.02', '-0.12', '-', '-0.12'],
            ['2.8', '背压（kPa）', '7.44', '6.00', '1.44', '63.77', '2.58', '0.00', '2.58'],
            ['2.9', '凝汽器端差（℃）', '5.42', '1.45', '3.97', '63.17', '2.58', '-', '2.58'],
        ];

        for (var i = 0; i < data[0].length; i++) {
            prop.push(String.fromCharCode(0x60 + i + 1).repeat(4));
        }
        for (var i = 0; i < data.length; i++) {
            unit[prop[0]] = i + 1;
            for (var j = 1; j < prop.length; j++) {
                unit[prop[j]] = data[i][j - 1];
            }
            arr.push(JSON.parse(JSON.stringify(unit)));
        }
        return arr;
    }

    ret.getGridBubbleData = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['蒸汽温度', '℃', '537.03', '540', '550', '520'],
            ['蒸汽压力', 'MPa', '9.43', '9.8', '10', '8.8'],
            ['给水温度', '℃', '213.53', '215', '225', '190'],
        ];

        for (var i = 0; i < data[0].length; i++) {
            prop.push(String.fromCharCode(0x60 + i + 1).repeat(4));
        }
        for (var i = 0; i < data.length; i++) {
            unit[prop[0]] = i + 1;
            for (var j = 1; j < prop.length; j++) {
                unit[prop[j]] = data[i][j - 1];
            }
            arr.push(JSON.parse(JSON.stringify(unit)));
        }
        return arr;
    }

    ret.getTransferData = function (cnt) {
      var arr = [];
      var unit = {};
      var prop = ['Id'];
      var data = [
            ['1','5114','0','OT矿KC170516002','100','3','21.58','40.12','30.01','4.34','0.34','0.3','0.05','0.24','0.38','0.01','0.01','4.79','33.94','1.69','8.78','1.86','49','104.4' ],
            ['2','7539','0','安特米娜KC170525001','100','26','30.58','31.78','24.67','3.04','0.3','1.81','0.4','4.42','0.18','0.02','0.2','1.43','463.72','0.56','9.2','1.04','8.3','904.8' ],
            ['3','1000','0','富开姆KC170516003','100','10','23.61','34.27','28.7','7.52','0.24','0.63','0.24','1.26','0.17','0.01','0.01','5.7','49.8','1.56','7.5','1.45','2.9','348' ],
            ['4','1000','0','马来西亚混矿KC170525004','100','20','19.8','19.3','26.5','13.34','1.59','0.92','0.88','1.98','0.44','0.04','0.03','2.26','190.36','2.14','6.82','0.97','1.4','696' ],
            ['5','3474','0','毛塔矿KC170605011','100','3','20.92','30.42','36.35','1','1.04','0.33','0.01','0.01','0.38','0.03','0.02','11','22.6','0.14','8','1.45','33.3','104.4' ],
            ['6','3159','0','西拉格达KC170509001','100','8','20.8','32.54','25.47','8.74','0.44','0.61','0.05','0.61','0.01','0.01','0.01','3.06','60.64','2.6','8.2','1.56','11.3','278.4' ],
            ['7','1957','0','氧化矿','100','7','20.98','15.32','21.7','17.67','1.05','1.96','1.23','0.98','0.14','0.02','0.01','3.8','346','4.42','11','0.73','8','243.6' ],
            ['8','100000','0','渣精矿','100','3','23.5','10.7','28.16','15.02','0.38','0.8','1.86','0.56','0.7','0.18','0.08','2','2','2.17','8.5','0.46','957.9','104.4' ],
            ['9','20169','0','金山矿','100','20','24','41.37','28.05','4.06','0.01','0.06','0.23','0.32','1.15','0.02','0.05','7.61','154.63','0.89','7.6','1.72','29','696' ],
          ];

      var tmpData = [];
      for (var i = 0; i < data.length; i++) {
        tmpData[i] = data[(i+cnt)%data.length];
        tmpData[i][0] = i+1;
      }



      for (var i = 0; i < tmpData[0].length; i++) {
        prop.push(String.fromCharCode(0x60 + i + 1).repeat(4));
        }
        for (var i = 0; i < tmpData.length; i++) {
          unit[prop[0]] = i+1;
          for (var j = 1; j < prop.length; j++) {
            unit[prop[j]] = tmpData[i][j-1];
          }
          arr.push(JSON.parse(JSON.stringify(unit)));
        }
        return arr;
    }


    return ret;

})



















