/*

中国省市区数据
level 1: prov   省
level 2: city   市
level 3: dist   区/县

*/

const CHINA_REGION = function () {
  const __region = [
    {
      "code": "110000",
      "prov": "11",
      "city": "00",
      "dist": "00",
      "name": "北京市",
      "level": 1
    },
    {
      "code": "110100",
      "prov": "11",
      "city": "01",
      "dist": "00",
      "name": "市辖区",
      "level": 2
    },
    {
      "code": "110101",
      "prov": "11",
      "city": "01",
      "dist": "01",
      "name": "东城区",
      "level": 3
    },
    {
      "code": "110102",
      "prov": "11",
      "city": "01",
      "dist": "02",
      "name": "西城区",
      "level": 3
    },
    {
      "code": "110105",
      "prov": "11",
      "city": "01",
      "dist": "05",
      "name": "朝阳区",
      "level": 3
    },
    {
      "code": "110106",
      "prov": "11",
      "city": "01",
      "dist": "06",
      "name": "丰台区",
      "level": 3
    },
    {
      "code": "110107",
      "prov": "11",
      "city": "01",
      "dist": "07",
      "name": "石景山区",
      "level": 3
    },
    {
      "code": "110108",
      "prov": "11",
      "city": "01",
      "dist": "08",
      "name": "海淀区",
      "level": 3
    },
    {
      "code": "110109",
      "prov": "11",
      "city": "01",
      "dist": "09",
      "name": "门头沟区",
      "level": 3
    },
    {
      "code": "110111",
      "prov": "11",
      "city": "01",
      "dist": "11",
      "name": "房山区",
      "level": 3
    },
    {
      "code": "110112",
      "prov": "11",
      "city": "01",
      "dist": "12",
      "name": "通州区",
      "level": 3
    },
    {
      "code": "110113",
      "prov": "11",
      "city": "01",
      "dist": "13",
      "name": "顺义区",
      "level": 3
    },
    {
      "code": "110114",
      "prov": "11",
      "city": "01",
      "dist": "14",
      "name": "昌平区",
      "level": 3
    },
    {
      "code": "110115",
      "prov": "11",
      "city": "01",
      "dist": "15",
      "name": "大兴区",
      "level": 3
    },
    {
      "code": "110116",
      "prov": "11",
      "city": "01",
      "dist": "16",
      "name": "怀柔区",
      "level": 3
    },
    {
      "code": "110117",
      "prov": "11",
      "city": "01",
      "dist": "17",
      "name": "平谷区",
      "level": 3
    },
    {
      "code": "110200",
      "prov": "11",
      "city": "02",
      "dist": "00",
      "name": "县",
      "level": 2
    },
    {
      "code": "110228",
      "prov": "11",
      "city": "02",
      "dist": "28",
      "name": "密云县",
      "level": 3
    },
    {
      "code": "110229",
      "prov": "11",
      "city": "02",
      "dist": "29",
      "name": "延庆县",
      "level": 3
    },
    {
      "code": "120000",
      "prov": "12",
      "city": "00",
      "dist": "00",
      "name": "天津市",
      "level": 1
    },
    {
      "code": "120100",
      "prov": "12",
      "city": "01",
      "dist": "00",
      "name": "市辖区",
      "level": 2
    },
    {
      "code": "120101",
      "prov": "12",
      "city": "01",
      "dist": "01",
      "name": "和平区",
      "level": 3
    },
    {
      "code": "120102",
      "prov": "12",
      "city": "01",
      "dist": "02",
      "name": "河东区",
      "level": 3
    },
    {
      "code": "120103",
      "prov": "12",
      "city": "01",
      "dist": "03",
      "name": "河西区",
      "level": 3
    },
    {
      "code": "120104",
      "prov": "12",
      "city": "01",
      "dist": "04",
      "name": "南开区",
      "level": 3
    },
    {
      "code": "120105",
      "prov": "12",
      "city": "01",
      "dist": "05",
      "name": "河北区",
      "level": 3
    },
    {
      "code": "120106",
      "prov": "12",
      "city": "01",
      "dist": "06",
      "name": "红桥区",
      "level": 3
    },
    {
      "code": "120110",
      "prov": "12",
      "city": "01",
      "dist": "10",
      "name": "东丽区",
      "level": 3
    },
    {
      "code": "120111",
      "prov": "12",
      "city": "01",
      "dist": "11",
      "name": "西青区",
      "level": 3
    },
    {
      "code": "120112",
      "prov": "12",
      "city": "01",
      "dist": "12",
      "name": "津南区",
      "level": 3
    },
    {
      "code": "120113",
      "prov": "12",
      "city": "01",
      "dist": "13",
      "name": "北辰区",
      "level": 3
    },
    {
      "code": "120114",
      "prov": "12",
      "city": "01",
      "dist": "14",
      "name": "武清区",
      "level": 3
    },
    {
      "code": "120115",
      "prov": "12",
      "city": "01",
      "dist": "15",
      "name": "宝坻区",
      "level": 3
    },
    {
      "code": "120116",
      "prov": "12",
      "city": "01",
      "dist": "16",
      "name": "滨海新区",
      "level": 3
    },
    {
      "code": "120200",
      "prov": "12",
      "city": "02",
      "dist": "00",
      "name": "县",
      "level": 2
    },
    {
      "code": "120221",
      "prov": "12",
      "city": "02",
      "dist": "21",
      "name": "宁河县",
      "level": 3
    },
    {
      "code": "120223",
      "prov": "12",
      "city": "02",
      "dist": "23",
      "name": "静海县",
      "level": 3
    },
    {
      "code": "120225",
      "prov": "12",
      "city": "02",
      "dist": "25",
      "name": "蓟县",
      "level": 3
    },
    {
      "code": "130000",
      "prov": "13",
      "city": "00",
      "dist": "00",
      "name": "河北省",
      "level": 1
    },
    {
      "code": "130100",
      "prov": "13",
      "city": "01",
      "dist": "00",
      "name": "石家庄市",
      "level": 2
    },
    {
      "code": "130101",
      "prov": "13",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130102",
      "prov": "13",
      "city": "01",
      "dist": "02",
      "name": "长安区",
      "level": 3
    },
    {
      "code": "130104",
      "prov": "13",
      "city": "01",
      "dist": "04",
      "name": "桥西区",
      "level": 3
    },
    {
      "code": "130105",
      "prov": "13",
      "city": "01",
      "dist": "05",
      "name": "新华区",
      "level": 3
    },
    {
      "code": "130107",
      "prov": "13",
      "city": "01",
      "dist": "07",
      "name": "井陉矿区",
      "level": 3
    },
    {
      "code": "130108",
      "prov": "13",
      "city": "01",
      "dist": "08",
      "name": "裕华区",
      "level": 3
    },
    {
      "code": "130109",
      "prov": "13",
      "city": "01",
      "dist": "09",
      "name": "藁城区",
      "level": 3
    },
    {
      "code": "130110",
      "prov": "13",
      "city": "01",
      "dist": "10",
      "name": "鹿泉区",
      "level": 3
    },
    {
      "code": "130111",
      "prov": "13",
      "city": "01",
      "dist": "11",
      "name": "栾城区",
      "level": 3
    },
    {
      "code": "130121",
      "prov": "13",
      "city": "01",
      "dist": "21",
      "name": "井陉县",
      "level": 3
    },
    {
      "code": "130123",
      "prov": "13",
      "city": "01",
      "dist": "23",
      "name": "正定县",
      "level": 3
    },
    {
      "code": "130125",
      "prov": "13",
      "city": "01",
      "dist": "25",
      "name": "行唐县",
      "level": 3
    },
    {
      "code": "130126",
      "prov": "13",
      "city": "01",
      "dist": "26",
      "name": "灵寿县",
      "level": 3
    },
    {
      "code": "130127",
      "prov": "13",
      "city": "01",
      "dist": "27",
      "name": "高邑县",
      "level": 3
    },
    {
      "code": "130128",
      "prov": "13",
      "city": "01",
      "dist": "28",
      "name": "深泽县",
      "level": 3
    },
    {
      "code": "130129",
      "prov": "13",
      "city": "01",
      "dist": "29",
      "name": "赞皇县",
      "level": 3
    },
    {
      "code": "130130",
      "prov": "13",
      "city": "01",
      "dist": "30",
      "name": "无极县",
      "level": 3
    },
    {
      "code": "130131",
      "prov": "13",
      "city": "01",
      "dist": "31",
      "name": "平山县",
      "level": 3
    },
    {
      "code": "130132",
      "prov": "13",
      "city": "01",
      "dist": "32",
      "name": "元氏县",
      "level": 3
    },
    {
      "code": "130133",
      "prov": "13",
      "city": "01",
      "dist": "33",
      "name": "赵县",
      "level": 3
    },
    {
      "code": "130181",
      "prov": "13",
      "city": "01",
      "dist": "81",
      "name": "辛集市",
      "level": 3
    },
    {
      "code": "130183",
      "prov": "13",
      "city": "01",
      "dist": "83",
      "name": "晋州市",
      "level": 3
    },
    {
      "code": "130184",
      "prov": "13",
      "city": "01",
      "dist": "84",
      "name": "新乐市",
      "level": 3
    },
    {
      "code": "130200",
      "prov": "13",
      "city": "02",
      "dist": "00",
      "name": "唐山市",
      "level": 2
    },
    {
      "code": "130201",
      "prov": "13",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130202",
      "prov": "13",
      "city": "02",
      "dist": "02",
      "name": "路南区",
      "level": 3
    },
    {
      "code": "130203",
      "prov": "13",
      "city": "02",
      "dist": "03",
      "name": "路北区",
      "level": 3
    },
    {
      "code": "130204",
      "prov": "13",
      "city": "02",
      "dist": "04",
      "name": "古冶区",
      "level": 3
    },
    {
      "code": "130205",
      "prov": "13",
      "city": "02",
      "dist": "05",
      "name": "开平区",
      "level": 3
    },
    {
      "code": "130207",
      "prov": "13",
      "city": "02",
      "dist": "07",
      "name": "丰南区",
      "level": 3
    },
    {
      "code": "130208",
      "prov": "13",
      "city": "02",
      "dist": "08",
      "name": "丰润区",
      "level": 3
    },
    {
      "code": "130209",
      "prov": "13",
      "city": "02",
      "dist": "09",
      "name": "曹妃甸区",
      "level": 3
    },
    {
      "code": "130223",
      "prov": "13",
      "city": "02",
      "dist": "23",
      "name": "滦县",
      "level": 3
    },
    {
      "code": "130224",
      "prov": "13",
      "city": "02",
      "dist": "24",
      "name": "滦南县",
      "level": 3
    },
    {
      "code": "130225",
      "prov": "13",
      "city": "02",
      "dist": "25",
      "name": "乐亭县",
      "level": 3
    },
    {
      "code": "130227",
      "prov": "13",
      "city": "02",
      "dist": "27",
      "name": "迁西县",
      "level": 3
    },
    {
      "code": "130229",
      "prov": "13",
      "city": "02",
      "dist": "29",
      "name": "玉田县",
      "level": 3
    },
    {
      "code": "130281",
      "prov": "13",
      "city": "02",
      "dist": "81",
      "name": "遵化市",
      "level": 3
    },
    {
      "code": "130283",
      "prov": "13",
      "city": "02",
      "dist": "83",
      "name": "迁安市",
      "level": 3
    },
    {
      "code": "130300",
      "prov": "13",
      "city": "03",
      "dist": "00",
      "name": "秦皇岛市",
      "level": 2
    },
    {
      "code": "130301",
      "prov": "13",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130302",
      "prov": "13",
      "city": "03",
      "dist": "02",
      "name": "海港区",
      "level": 3
    },
    {
      "code": "130303",
      "prov": "13",
      "city": "03",
      "dist": "03",
      "name": "山海关区",
      "level": 3
    },
    {
      "code": "130304",
      "prov": "13",
      "city": "03",
      "dist": "04",
      "name": "北戴河区",
      "level": 3
    },
    {
      "code": "130321",
      "prov": "13",
      "city": "03",
      "dist": "21",
      "name": "青龙满族自治县",
      "level": 3
    },
    {
      "code": "130322",
      "prov": "13",
      "city": "03",
      "dist": "22",
      "name": "昌黎县",
      "level": 3
    },
    {
      "code": "130323",
      "prov": "13",
      "city": "03",
      "dist": "23",
      "name": "抚宁县",
      "level": 3
    },
    {
      "code": "130324",
      "prov": "13",
      "city": "03",
      "dist": "24",
      "name": "卢龙县",
      "level": 3
    },
    {
      "code": "130400",
      "prov": "13",
      "city": "04",
      "dist": "00",
      "name": "邯郸市",
      "level": 2
    },
    {
      "code": "130401",
      "prov": "13",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130402",
      "prov": "13",
      "city": "04",
      "dist": "02",
      "name": "邯山区",
      "level": 3
    },
    {
      "code": "130403",
      "prov": "13",
      "city": "04",
      "dist": "03",
      "name": "丛台区",
      "level": 3
    },
    {
      "code": "130404",
      "prov": "13",
      "city": "04",
      "dist": "04",
      "name": "复兴区",
      "level": 3
    },
    {
      "code": "130406",
      "prov": "13",
      "city": "04",
      "dist": "06",
      "name": "峰峰矿区",
      "level": 3
    },
    {
      "code": "130421",
      "prov": "13",
      "city": "04",
      "dist": "21",
      "name": "邯郸县",
      "level": 3
    },
    {
      "code": "130423",
      "prov": "13",
      "city": "04",
      "dist": "23",
      "name": "临漳县",
      "level": 3
    },
    {
      "code": "130424",
      "prov": "13",
      "city": "04",
      "dist": "24",
      "name": "成安县",
      "level": 3
    },
    {
      "code": "130425",
      "prov": "13",
      "city": "04",
      "dist": "25",
      "name": "大名县",
      "level": 3
    },
    {
      "code": "130426",
      "prov": "13",
      "city": "04",
      "dist": "26",
      "name": "涉县",
      "level": 3
    },
    {
      "code": "130427",
      "prov": "13",
      "city": "04",
      "dist": "27",
      "name": "磁县",
      "level": 3
    },
    {
      "code": "130428",
      "prov": "13",
      "city": "04",
      "dist": "28",
      "name": "肥乡县",
      "level": 3
    },
    {
      "code": "130429",
      "prov": "13",
      "city": "04",
      "dist": "29",
      "name": "永年县",
      "level": 3
    },
    {
      "code": "130430",
      "prov": "13",
      "city": "04",
      "dist": "30",
      "name": "邱县",
      "level": 3
    },
    {
      "code": "130431",
      "prov": "13",
      "city": "04",
      "dist": "31",
      "name": "鸡泽县",
      "level": 3
    },
    {
      "code": "130432",
      "prov": "13",
      "city": "04",
      "dist": "32",
      "name": "广平县",
      "level": 3
    },
    {
      "code": "130433",
      "prov": "13",
      "city": "04",
      "dist": "33",
      "name": "馆陶县",
      "level": 3
    },
    {
      "code": "130434",
      "prov": "13",
      "city": "04",
      "dist": "34",
      "name": "魏县",
      "level": 3
    },
    {
      "code": "130435",
      "prov": "13",
      "city": "04",
      "dist": "35",
      "name": "曲周县",
      "level": 3
    },
    {
      "code": "130481",
      "prov": "13",
      "city": "04",
      "dist": "81",
      "name": "武安市",
      "level": 3
    },
    {
      "code": "130500",
      "prov": "13",
      "city": "05",
      "dist": "00",
      "name": "邢台市",
      "level": 2
    },
    {
      "code": "130501",
      "prov": "13",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130502",
      "prov": "13",
      "city": "05",
      "dist": "02",
      "name": "桥东区",
      "level": 3
    },
    {
      "code": "130503",
      "prov": "13",
      "city": "05",
      "dist": "03",
      "name": "桥西区",
      "level": 3
    },
    {
      "code": "130521",
      "prov": "13",
      "city": "05",
      "dist": "21",
      "name": "邢台县",
      "level": 3
    },
    {
      "code": "130522",
      "prov": "13",
      "city": "05",
      "dist": "22",
      "name": "临城县",
      "level": 3
    },
    {
      "code": "130523",
      "prov": "13",
      "city": "05",
      "dist": "23",
      "name": "内丘县",
      "level": 3
    },
    {
      "code": "130524",
      "prov": "13",
      "city": "05",
      "dist": "24",
      "name": "柏乡县",
      "level": 3
    },
    {
      "code": "130525",
      "prov": "13",
      "city": "05",
      "dist": "25",
      "name": "隆尧县",
      "level": 3
    },
    {
      "code": "130526",
      "prov": "13",
      "city": "05",
      "dist": "26",
      "name": "任县",
      "level": 3
    },
    {
      "code": "130527",
      "prov": "13",
      "city": "05",
      "dist": "27",
      "name": "南和县",
      "level": 3
    },
    {
      "code": "130528",
      "prov": "13",
      "city": "05",
      "dist": "28",
      "name": "宁晋县",
      "level": 3
    },
    {
      "code": "130529",
      "prov": "13",
      "city": "05",
      "dist": "29",
      "name": "巨鹿县",
      "level": 3
    },
    {
      "code": "130530",
      "prov": "13",
      "city": "05",
      "dist": "30",
      "name": "新河县",
      "level": 3
    },
    {
      "code": "130531",
      "prov": "13",
      "city": "05",
      "dist": "31",
      "name": "广宗县",
      "level": 3
    },
    {
      "code": "130532",
      "prov": "13",
      "city": "05",
      "dist": "32",
      "name": "平乡县",
      "level": 3
    },
    {
      "code": "130533",
      "prov": "13",
      "city": "05",
      "dist": "33",
      "name": "威县",
      "level": 3
    },
    {
      "code": "130534",
      "prov": "13",
      "city": "05",
      "dist": "34",
      "name": "清河县",
      "level": 3
    },
    {
      "code": "130535",
      "prov": "13",
      "city": "05",
      "dist": "35",
      "name": "临西县",
      "level": 3
    },
    {
      "code": "130581",
      "prov": "13",
      "city": "05",
      "dist": "81",
      "name": "南宫市",
      "level": 3
    },
    {
      "code": "130582",
      "prov": "13",
      "city": "05",
      "dist": "82",
      "name": "沙河市",
      "level": 3
    },
    {
      "code": "130600",
      "prov": "13",
      "city": "06",
      "dist": "00",
      "name": "保定市",
      "level": 2
    },
    {
      "code": "130601",
      "prov": "13",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130602",
      "prov": "13",
      "city": "06",
      "dist": "02",
      "name": "新市区",
      "level": 3
    },
    {
      "code": "130603",
      "prov": "13",
      "city": "06",
      "dist": "03",
      "name": "北市区",
      "level": 3
    },
    {
      "code": "130604",
      "prov": "13",
      "city": "06",
      "dist": "04",
      "name": "南市区",
      "level": 3
    },
    {
      "code": "130621",
      "prov": "13",
      "city": "06",
      "dist": "21",
      "name": "满城县",
      "level": 3
    },
    {
      "code": "130622",
      "prov": "13",
      "city": "06",
      "dist": "22",
      "name": "清苑县",
      "level": 3
    },
    {
      "code": "130623",
      "prov": "13",
      "city": "06",
      "dist": "23",
      "name": "涞水县",
      "level": 3
    },
    {
      "code": "130624",
      "prov": "13",
      "city": "06",
      "dist": "24",
      "name": "阜平县",
      "level": 3
    },
    {
      "code": "130625",
      "prov": "13",
      "city": "06",
      "dist": "25",
      "name": "徐水县",
      "level": 3
    },
    {
      "code": "130626",
      "prov": "13",
      "city": "06",
      "dist": "26",
      "name": "定兴县",
      "level": 3
    },
    {
      "code": "130627",
      "prov": "13",
      "city": "06",
      "dist": "27",
      "name": "唐县",
      "level": 3
    },
    {
      "code": "130628",
      "prov": "13",
      "city": "06",
      "dist": "28",
      "name": "高阳县",
      "level": 3
    },
    {
      "code": "130629",
      "prov": "13",
      "city": "06",
      "dist": "29",
      "name": "容城县",
      "level": 3
    },
    {
      "code": "130630",
      "prov": "13",
      "city": "06",
      "dist": "30",
      "name": "涞源县",
      "level": 3
    },
    {
      "code": "130631",
      "prov": "13",
      "city": "06",
      "dist": "31",
      "name": "望都县",
      "level": 3
    },
    {
      "code": "130632",
      "prov": "13",
      "city": "06",
      "dist": "32",
      "name": "安新县",
      "level": 3
    },
    {
      "code": "130633",
      "prov": "13",
      "city": "06",
      "dist": "33",
      "name": "易县",
      "level": 3
    },
    {
      "code": "130634",
      "prov": "13",
      "city": "06",
      "dist": "34",
      "name": "曲阳县",
      "level": 3
    },
    {
      "code": "130635",
      "prov": "13",
      "city": "06",
      "dist": "35",
      "name": "蠡县",
      "level": 3
    },
    {
      "code": "130636",
      "prov": "13",
      "city": "06",
      "dist": "36",
      "name": "顺平县",
      "level": 3
    },
    {
      "code": "130637",
      "prov": "13",
      "city": "06",
      "dist": "37",
      "name": "博野县",
      "level": 3
    },
    {
      "code": "130638",
      "prov": "13",
      "city": "06",
      "dist": "38",
      "name": "雄县",
      "level": 3
    },
    {
      "code": "130681",
      "prov": "13",
      "city": "06",
      "dist": "81",
      "name": "涿州市",
      "level": 3
    },
    {
      "code": "130682",
      "prov": "13",
      "city": "06",
      "dist": "82",
      "name": "定州市",
      "level": 3
    },
    {
      "code": "130683",
      "prov": "13",
      "city": "06",
      "dist": "83",
      "name": "安国市",
      "level": 3
    },
    {
      "code": "130684",
      "prov": "13",
      "city": "06",
      "dist": "84",
      "name": "高碑店市",
      "level": 3
    },
    {
      "code": "130700",
      "prov": "13",
      "city": "07",
      "dist": "00",
      "name": "张家口市",
      "level": 2
    },
    {
      "code": "130701",
      "prov": "13",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130702",
      "prov": "13",
      "city": "07",
      "dist": "02",
      "name": "桥东区",
      "level": 3
    },
    {
      "code": "130703",
      "prov": "13",
      "city": "07",
      "dist": "03",
      "name": "桥西区",
      "level": 3
    },
    {
      "code": "130705",
      "prov": "13",
      "city": "07",
      "dist": "05",
      "name": "宣化区",
      "level": 3
    },
    {
      "code": "130706",
      "prov": "13",
      "city": "07",
      "dist": "06",
      "name": "下花园区",
      "level": 3
    },
    {
      "code": "130721",
      "prov": "13",
      "city": "07",
      "dist": "21",
      "name": "宣化县",
      "level": 3
    },
    {
      "code": "130722",
      "prov": "13",
      "city": "07",
      "dist": "22",
      "name": "张北县",
      "level": 3
    },
    {
      "code": "130723",
      "prov": "13",
      "city": "07",
      "dist": "23",
      "name": "康保县",
      "level": 3
    },
    {
      "code": "130724",
      "prov": "13",
      "city": "07",
      "dist": "24",
      "name": "沽源县",
      "level": 3
    },
    {
      "code": "130725",
      "prov": "13",
      "city": "07",
      "dist": "25",
      "name": "尚义县",
      "level": 3
    },
    {
      "code": "130726",
      "prov": "13",
      "city": "07",
      "dist": "26",
      "name": "蔚县",
      "level": 3
    },
    {
      "code": "130727",
      "prov": "13",
      "city": "07",
      "dist": "27",
      "name": "阳原县",
      "level": 3
    },
    {
      "code": "130728",
      "prov": "13",
      "city": "07",
      "dist": "28",
      "name": "怀安县",
      "level": 3
    },
    {
      "code": "130729",
      "prov": "13",
      "city": "07",
      "dist": "29",
      "name": "万全县",
      "level": 3
    },
    {
      "code": "130730",
      "prov": "13",
      "city": "07",
      "dist": "30",
      "name": "怀来县",
      "level": 3
    },
    {
      "code": "130731",
      "prov": "13",
      "city": "07",
      "dist": "31",
      "name": "涿鹿县",
      "level": 3
    },
    {
      "code": "130732",
      "prov": "13",
      "city": "07",
      "dist": "32",
      "name": "赤城县",
      "level": 3
    },
    {
      "code": "130733",
      "prov": "13",
      "city": "07",
      "dist": "33",
      "name": "崇礼县",
      "level": 3
    },
    {
      "code": "130800",
      "prov": "13",
      "city": "08",
      "dist": "00",
      "name": "承德市",
      "level": 2
    },
    {
      "code": "130801",
      "prov": "13",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130802",
      "prov": "13",
      "city": "08",
      "dist": "02",
      "name": "双桥区",
      "level": 3
    },
    {
      "code": "130803",
      "prov": "13",
      "city": "08",
      "dist": "03",
      "name": "双滦区",
      "level": 3
    },
    {
      "code": "130804",
      "prov": "13",
      "city": "08",
      "dist": "04",
      "name": "鹰手营子矿区",
      "level": 3
    },
    {
      "code": "130821",
      "prov": "13",
      "city": "08",
      "dist": "21",
      "name": "承德县",
      "level": 3
    },
    {
      "code": "130822",
      "prov": "13",
      "city": "08",
      "dist": "22",
      "name": "兴隆县",
      "level": 3
    },
    {
      "code": "130823",
      "prov": "13",
      "city": "08",
      "dist": "23",
      "name": "平泉县",
      "level": 3
    },
    {
      "code": "130824",
      "prov": "13",
      "city": "08",
      "dist": "24",
      "name": "滦平县",
      "level": 3
    },
    {
      "code": "130825",
      "prov": "13",
      "city": "08",
      "dist": "25",
      "name": "隆化县",
      "level": 3
    },
    {
      "code": "130826",
      "prov": "13",
      "city": "08",
      "dist": "26",
      "name": "丰宁满族自治县",
      "level": 3
    },
    {
      "code": "130827",
      "prov": "13",
      "city": "08",
      "dist": "27",
      "name": "宽城满族自治县",
      "level": 3
    },
    {
      "code": "130828",
      "prov": "13",
      "city": "08",
      "dist": "28",
      "name": "围场满族蒙古族自治县",
      "level": 3
    },
    {
      "code": "130900",
      "prov": "13",
      "city": "09",
      "dist": "00",
      "name": "沧州市",
      "level": 2
    },
    {
      "code": "130901",
      "prov": "13",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "130902",
      "prov": "13",
      "city": "09",
      "dist": "02",
      "name": "新华区",
      "level": 3
    },
    {
      "code": "130903",
      "prov": "13",
      "city": "09",
      "dist": "03",
      "name": "运河区",
      "level": 3
    },
    {
      "code": "130921",
      "prov": "13",
      "city": "09",
      "dist": "21",
      "name": "沧县",
      "level": 3
    },
    {
      "code": "130922",
      "prov": "13",
      "city": "09",
      "dist": "22",
      "name": "青县",
      "level": 3
    },
    {
      "code": "130923",
      "prov": "13",
      "city": "09",
      "dist": "23",
      "name": "东光县",
      "level": 3
    },
    {
      "code": "130924",
      "prov": "13",
      "city": "09",
      "dist": "24",
      "name": "海兴县",
      "level": 3
    },
    {
      "code": "130925",
      "prov": "13",
      "city": "09",
      "dist": "25",
      "name": "盐山县",
      "level": 3
    },
    {
      "code": "130926",
      "prov": "13",
      "city": "09",
      "dist": "26",
      "name": "肃宁县",
      "level": 3
    },
    {
      "code": "130927",
      "prov": "13",
      "city": "09",
      "dist": "27",
      "name": "南皮县",
      "level": 3
    },
    {
      "code": "130928",
      "prov": "13",
      "city": "09",
      "dist": "28",
      "name": "吴桥县",
      "level": 3
    },
    {
      "code": "130929",
      "prov": "13",
      "city": "09",
      "dist": "29",
      "name": "献县",
      "level": 3
    },
    {
      "code": "130930",
      "prov": "13",
      "city": "09",
      "dist": "30",
      "name": "孟村回族自治县",
      "level": 3
    },
    {
      "code": "130981",
      "prov": "13",
      "city": "09",
      "dist": "81",
      "name": "泊头市",
      "level": 3
    },
    {
      "code": "130982",
      "prov": "13",
      "city": "09",
      "dist": "82",
      "name": "任丘市",
      "level": 3
    },
    {
      "code": "130983",
      "prov": "13",
      "city": "09",
      "dist": "83",
      "name": "黄骅市",
      "level": 3
    },
    {
      "code": "130984",
      "prov": "13",
      "city": "09",
      "dist": "84",
      "name": "河间市",
      "level": 3
    },
    {
      "code": "131000",
      "prov": "13",
      "city": "10",
      "dist": "00",
      "name": "廊坊市",
      "level": 2
    },
    {
      "code": "131001",
      "prov": "13",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "131002",
      "prov": "13",
      "city": "10",
      "dist": "02",
      "name": "安次区",
      "level": 3
    },
    {
      "code": "131003",
      "prov": "13",
      "city": "10",
      "dist": "03",
      "name": "广阳区",
      "level": 3
    },
    {
      "code": "131022",
      "prov": "13",
      "city": "10",
      "dist": "22",
      "name": "固安县",
      "level": 3
    },
    {
      "code": "131023",
      "prov": "13",
      "city": "10",
      "dist": "23",
      "name": "永清县",
      "level": 3
    },
    {
      "code": "131024",
      "prov": "13",
      "city": "10",
      "dist": "24",
      "name": "香河县",
      "level": 3
    },
    {
      "code": "131025",
      "prov": "13",
      "city": "10",
      "dist": "25",
      "name": "大城县",
      "level": 3
    },
    {
      "code": "131026",
      "prov": "13",
      "city": "10",
      "dist": "26",
      "name": "文安县",
      "level": 3
    },
    {
      "code": "131028",
      "prov": "13",
      "city": "10",
      "dist": "28",
      "name": "大厂回族自治县",
      "level": 3
    },
    {
      "code": "131081",
      "prov": "13",
      "city": "10",
      "dist": "81",
      "name": "霸州市",
      "level": 3
    },
    {
      "code": "131082",
      "prov": "13",
      "city": "10",
      "dist": "82",
      "name": "三河市",
      "level": 3
    },
    {
      "code": "131100",
      "prov": "13",
      "city": "11",
      "dist": "00",
      "name": "衡水市",
      "level": 2
    },
    {
      "code": "131101",
      "prov": "13",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "131102",
      "prov": "13",
      "city": "11",
      "dist": "02",
      "name": "桃城区",
      "level": 3
    },
    {
      "code": "131121",
      "prov": "13",
      "city": "11",
      "dist": "21",
      "name": "枣强县",
      "level": 3
    },
    {
      "code": "131122",
      "prov": "13",
      "city": "11",
      "dist": "22",
      "name": "武邑县",
      "level": 3
    },
    {
      "code": "131123",
      "prov": "13",
      "city": "11",
      "dist": "23",
      "name": "武强县",
      "level": 3
    },
    {
      "code": "131124",
      "prov": "13",
      "city": "11",
      "dist": "24",
      "name": "饶阳县",
      "level": 3
    },
    {
      "code": "131125",
      "prov": "13",
      "city": "11",
      "dist": "25",
      "name": "安平县",
      "level": 3
    },
    {
      "code": "131126",
      "prov": "13",
      "city": "11",
      "dist": "26",
      "name": "故城县",
      "level": 3
    },
    {
      "code": "131127",
      "prov": "13",
      "city": "11",
      "dist": "27",
      "name": "景县",
      "level": 3
    },
    {
      "code": "131128",
      "prov": "13",
      "city": "11",
      "dist": "28",
      "name": "阜城县",
      "level": 3
    },
    {
      "code": "131181",
      "prov": "13",
      "city": "11",
      "dist": "81",
      "name": "冀州市",
      "level": 3
    },
    {
      "code": "131182",
      "prov": "13",
      "city": "11",
      "dist": "82",
      "name": "深州市",
      "level": 3
    },
    {
      "code": "140000",
      "prov": "14",
      "city": "00",
      "dist": "00",
      "name": "山西省",
      "level": 1
    },
    {
      "code": "140100",
      "prov": "14",
      "city": "01",
      "dist": "00",
      "name": "太原市",
      "level": 2
    },
    {
      "code": "140101",
      "prov": "14",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140105",
      "prov": "14",
      "city": "01",
      "dist": "05",
      "name": "小店区",
      "level": 3
    },
    {
      "code": "140106",
      "prov": "14",
      "city": "01",
      "dist": "06",
      "name": "迎泽区",
      "level": 3
    },
    {
      "code": "140107",
      "prov": "14",
      "city": "01",
      "dist": "07",
      "name": "杏花岭区",
      "level": 3
    },
    {
      "code": "140108",
      "prov": "14",
      "city": "01",
      "dist": "08",
      "name": "尖草坪区",
      "level": 3
    },
    {
      "code": "140109",
      "prov": "14",
      "city": "01",
      "dist": "09",
      "name": "万柏林区",
      "level": 3
    },
    {
      "code": "140110",
      "prov": "14",
      "city": "01",
      "dist": "10",
      "name": "晋源区",
      "level": 3
    },
    {
      "code": "140121",
      "prov": "14",
      "city": "01",
      "dist": "21",
      "name": "清徐县",
      "level": 3
    },
    {
      "code": "140122",
      "prov": "14",
      "city": "01",
      "dist": "22",
      "name": "阳曲县",
      "level": 3
    },
    {
      "code": "140123",
      "prov": "14",
      "city": "01",
      "dist": "23",
      "name": "娄烦县",
      "level": 3
    },
    {
      "code": "140181",
      "prov": "14",
      "city": "01",
      "dist": "81",
      "name": "古交市",
      "level": 3
    },
    {
      "code": "140200",
      "prov": "14",
      "city": "02",
      "dist": "00",
      "name": "大同市",
      "level": 2
    },
    {
      "code": "140201",
      "prov": "14",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140202",
      "prov": "14",
      "city": "02",
      "dist": "02",
      "name": "城区",
      "level": 3
    },
    {
      "code": "140203",
      "prov": "14",
      "city": "02",
      "dist": "03",
      "name": "矿区",
      "level": 3
    },
    {
      "code": "140211",
      "prov": "14",
      "city": "02",
      "dist": "11",
      "name": "南郊区",
      "level": 3
    },
    {
      "code": "140212",
      "prov": "14",
      "city": "02",
      "dist": "12",
      "name": "新荣区",
      "level": 3
    },
    {
      "code": "140221",
      "prov": "14",
      "city": "02",
      "dist": "21",
      "name": "阳高县",
      "level": 3
    },
    {
      "code": "140222",
      "prov": "14",
      "city": "02",
      "dist": "22",
      "name": "天镇县",
      "level": 3
    },
    {
      "code": "140223",
      "prov": "14",
      "city": "02",
      "dist": "23",
      "name": "广灵县",
      "level": 3
    },
    {
      "code": "140224",
      "prov": "14",
      "city": "02",
      "dist": "24",
      "name": "灵丘县",
      "level": 3
    },
    {
      "code": "140225",
      "prov": "14",
      "city": "02",
      "dist": "25",
      "name": "浑源县",
      "level": 3
    },
    {
      "code": "140226",
      "prov": "14",
      "city": "02",
      "dist": "26",
      "name": "左云县",
      "level": 3
    },
    {
      "code": "140227",
      "prov": "14",
      "city": "02",
      "dist": "27",
      "name": "大同县",
      "level": 3
    },
    {
      "code": "140300",
      "prov": "14",
      "city": "03",
      "dist": "00",
      "name": "阳泉市",
      "level": 2
    },
    {
      "code": "140301",
      "prov": "14",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140302",
      "prov": "14",
      "city": "03",
      "dist": "02",
      "name": "城区",
      "level": 3
    },
    {
      "code": "140303",
      "prov": "14",
      "city": "03",
      "dist": "03",
      "name": "矿区",
      "level": 3
    },
    {
      "code": "140311",
      "prov": "14",
      "city": "03",
      "dist": "11",
      "name": "郊区",
      "level": 3
    },
    {
      "code": "140321",
      "prov": "14",
      "city": "03",
      "dist": "21",
      "name": "平定县",
      "level": 3
    },
    {
      "code": "140322",
      "prov": "14",
      "city": "03",
      "dist": "22",
      "name": "盂县",
      "level": 3
    },
    {
      "code": "140400",
      "prov": "14",
      "city": "04",
      "dist": "00",
      "name": "长治市",
      "level": 2
    },
    {
      "code": "140401",
      "prov": "14",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140402",
      "prov": "14",
      "city": "04",
      "dist": "02",
      "name": "城区",
      "level": 3
    },
    {
      "code": "140411",
      "prov": "14",
      "city": "04",
      "dist": "11",
      "name": "郊区",
      "level": 3
    },
    {
      "code": "140421",
      "prov": "14",
      "city": "04",
      "dist": "21",
      "name": "长治县",
      "level": 3
    },
    {
      "code": "140423",
      "prov": "14",
      "city": "04",
      "dist": "23",
      "name": "襄垣县",
      "level": 3
    },
    {
      "code": "140424",
      "prov": "14",
      "city": "04",
      "dist": "24",
      "name": "屯留县",
      "level": 3
    },
    {
      "code": "140425",
      "prov": "14",
      "city": "04",
      "dist": "25",
      "name": "平顺县",
      "level": 3
    },
    {
      "code": "140426",
      "prov": "14",
      "city": "04",
      "dist": "26",
      "name": "黎城县",
      "level": 3
    },
    {
      "code": "140427",
      "prov": "14",
      "city": "04",
      "dist": "27",
      "name": "壶关县",
      "level": 3
    },
    {
      "code": "140428",
      "prov": "14",
      "city": "04",
      "dist": "28",
      "name": "长子县",
      "level": 3
    },
    {
      "code": "140429",
      "prov": "14",
      "city": "04",
      "dist": "29",
      "name": "武乡县",
      "level": 3
    },
    {
      "code": "140430",
      "prov": "14",
      "city": "04",
      "dist": "30",
      "name": "沁县",
      "level": 3
    },
    {
      "code": "140431",
      "prov": "14",
      "city": "04",
      "dist": "31",
      "name": "沁源县",
      "level": 3
    },
    {
      "code": "140481",
      "prov": "14",
      "city": "04",
      "dist": "81",
      "name": "潞城市",
      "level": 3
    },
    {
      "code": "140500",
      "prov": "14",
      "city": "05",
      "dist": "00",
      "name": "晋城市",
      "level": 2
    },
    {
      "code": "140501",
      "prov": "14",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140502",
      "prov": "14",
      "city": "05",
      "dist": "02",
      "name": "城区",
      "level": 3
    },
    {
      "code": "140521",
      "prov": "14",
      "city": "05",
      "dist": "21",
      "name": "沁水县",
      "level": 3
    },
    {
      "code": "140522",
      "prov": "14",
      "city": "05",
      "dist": "22",
      "name": "阳城县",
      "level": 3
    },
    {
      "code": "140524",
      "prov": "14",
      "city": "05",
      "dist": "24",
      "name": "陵川县",
      "level": 3
    },
    {
      "code": "140525",
      "prov": "14",
      "city": "05",
      "dist": "25",
      "name": "泽州县",
      "level": 3
    },
    {
      "code": "140581",
      "prov": "14",
      "city": "05",
      "dist": "81",
      "name": "高平市",
      "level": 3
    },
    {
      "code": "140600",
      "prov": "14",
      "city": "06",
      "dist": "00",
      "name": "朔州市",
      "level": 2
    },
    {
      "code": "140601",
      "prov": "14",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140602",
      "prov": "14",
      "city": "06",
      "dist": "02",
      "name": "朔城区",
      "level": 3
    },
    {
      "code": "140603",
      "prov": "14",
      "city": "06",
      "dist": "03",
      "name": "平鲁区",
      "level": 3
    },
    {
      "code": "140621",
      "prov": "14",
      "city": "06",
      "dist": "21",
      "name": "山阴县",
      "level": 3
    },
    {
      "code": "140622",
      "prov": "14",
      "city": "06",
      "dist": "22",
      "name": "应县",
      "level": 3
    },
    {
      "code": "140623",
      "prov": "14",
      "city": "06",
      "dist": "23",
      "name": "右玉县",
      "level": 3
    },
    {
      "code": "140624",
      "prov": "14",
      "city": "06",
      "dist": "24",
      "name": "怀仁县",
      "level": 3
    },
    {
      "code": "140700",
      "prov": "14",
      "city": "07",
      "dist": "00",
      "name": "晋中市",
      "level": 2
    },
    {
      "code": "140701",
      "prov": "14",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140702",
      "prov": "14",
      "city": "07",
      "dist": "02",
      "name": "榆次区",
      "level": 3
    },
    {
      "code": "140721",
      "prov": "14",
      "city": "07",
      "dist": "21",
      "name": "榆社县",
      "level": 3
    },
    {
      "code": "140722",
      "prov": "14",
      "city": "07",
      "dist": "22",
      "name": "左权县",
      "level": 3
    },
    {
      "code": "140723",
      "prov": "14",
      "city": "07",
      "dist": "23",
      "name": "和顺县",
      "level": 3
    },
    {
      "code": "140724",
      "prov": "14",
      "city": "07",
      "dist": "24",
      "name": "昔阳县",
      "level": 3
    },
    {
      "code": "140725",
      "prov": "14",
      "city": "07",
      "dist": "25",
      "name": "寿阳县",
      "level": 3
    },
    {
      "code": "140726",
      "prov": "14",
      "city": "07",
      "dist": "26",
      "name": "太谷县",
      "level": 3
    },
    {
      "code": "140727",
      "prov": "14",
      "city": "07",
      "dist": "27",
      "name": "祁县",
      "level": 3
    },
    {
      "code": "140728",
      "prov": "14",
      "city": "07",
      "dist": "28",
      "name": "平遥县",
      "level": 3
    },
    {
      "code": "140729",
      "prov": "14",
      "city": "07",
      "dist": "29",
      "name": "灵石县",
      "level": 3
    },
    {
      "code": "140781",
      "prov": "14",
      "city": "07",
      "dist": "81",
      "name": "介休市",
      "level": 3
    },
    {
      "code": "140800",
      "prov": "14",
      "city": "08",
      "dist": "00",
      "name": "运城市",
      "level": 2
    },
    {
      "code": "140801",
      "prov": "14",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140802",
      "prov": "14",
      "city": "08",
      "dist": "02",
      "name": "盐湖区",
      "level": 3
    },
    {
      "code": "140821",
      "prov": "14",
      "city": "08",
      "dist": "21",
      "name": "临猗县",
      "level": 3
    },
    {
      "code": "140822",
      "prov": "14",
      "city": "08",
      "dist": "22",
      "name": "万荣县",
      "level": 3
    },
    {
      "code": "140823",
      "prov": "14",
      "city": "08",
      "dist": "23",
      "name": "闻喜县",
      "level": 3
    },
    {
      "code": "140824",
      "prov": "14",
      "city": "08",
      "dist": "24",
      "name": "稷山县",
      "level": 3
    },
    {
      "code": "140825",
      "prov": "14",
      "city": "08",
      "dist": "25",
      "name": "新绛县",
      "level": 3
    },
    {
      "code": "140826",
      "prov": "14",
      "city": "08",
      "dist": "26",
      "name": "绛县",
      "level": 3
    },
    {
      "code": "140827",
      "prov": "14",
      "city": "08",
      "dist": "27",
      "name": "垣曲县",
      "level": 3
    },
    {
      "code": "140828",
      "prov": "14",
      "city": "08",
      "dist": "28",
      "name": "夏县",
      "level": 3
    },
    {
      "code": "140829",
      "prov": "14",
      "city": "08",
      "dist": "29",
      "name": "平陆县",
      "level": 3
    },
    {
      "code": "140830",
      "prov": "14",
      "city": "08",
      "dist": "30",
      "name": "芮城县",
      "level": 3
    },
    {
      "code": "140881",
      "prov": "14",
      "city": "08",
      "dist": "81",
      "name": "永济市",
      "level": 3
    },
    {
      "code": "140882",
      "prov": "14",
      "city": "08",
      "dist": "82",
      "name": "河津市",
      "level": 3
    },
    {
      "code": "140900",
      "prov": "14",
      "city": "09",
      "dist": "00",
      "name": "忻州市",
      "level": 2
    },
    {
      "code": "140901",
      "prov": "14",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "140902",
      "prov": "14",
      "city": "09",
      "dist": "02",
      "name": "忻府区",
      "level": 3
    },
    {
      "code": "140921",
      "prov": "14",
      "city": "09",
      "dist": "21",
      "name": "定襄县",
      "level": 3
    },
    {
      "code": "140922",
      "prov": "14",
      "city": "09",
      "dist": "22",
      "name": "五台县",
      "level": 3
    },
    {
      "code": "140923",
      "prov": "14",
      "city": "09",
      "dist": "23",
      "name": "代县",
      "level": 3
    },
    {
      "code": "140924",
      "prov": "14",
      "city": "09",
      "dist": "24",
      "name": "繁峙县",
      "level": 3
    },
    {
      "code": "140925",
      "prov": "14",
      "city": "09",
      "dist": "25",
      "name": "宁武县",
      "level": 3
    },
    {
      "code": "140926",
      "prov": "14",
      "city": "09",
      "dist": "26",
      "name": "静乐县",
      "level": 3
    },
    {
      "code": "140927",
      "prov": "14",
      "city": "09",
      "dist": "27",
      "name": "神池县",
      "level": 3
    },
    {
      "code": "140928",
      "prov": "14",
      "city": "09",
      "dist": "28",
      "name": "五寨县",
      "level": 3
    },
    {
      "code": "140929",
      "prov": "14",
      "city": "09",
      "dist": "29",
      "name": "岢岚县",
      "level": 3
    },
    {
      "code": "140930",
      "prov": "14",
      "city": "09",
      "dist": "30",
      "name": "河曲县",
      "level": 3
    },
    {
      "code": "140931",
      "prov": "14",
      "city": "09",
      "dist": "31",
      "name": "保德县",
      "level": 3
    },
    {
      "code": "140932",
      "prov": "14",
      "city": "09",
      "dist": "32",
      "name": "偏关县",
      "level": 3
    },
    {
      "code": "140981",
      "prov": "14",
      "city": "09",
      "dist": "81",
      "name": "原平市",
      "level": 3
    },
    {
      "code": "141000",
      "prov": "14",
      "city": "10",
      "dist": "00",
      "name": "临汾市",
      "level": 2
    },
    {
      "code": "141001",
      "prov": "14",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "141002",
      "prov": "14",
      "city": "10",
      "dist": "02",
      "name": "尧都区",
      "level": 3
    },
    {
      "code": "141021",
      "prov": "14",
      "city": "10",
      "dist": "21",
      "name": "曲沃县",
      "level": 3
    },
    {
      "code": "141022",
      "prov": "14",
      "city": "10",
      "dist": "22",
      "name": "翼城县",
      "level": 3
    },
    {
      "code": "141023",
      "prov": "14",
      "city": "10",
      "dist": "23",
      "name": "襄汾县",
      "level": 3
    },
    {
      "code": "141024",
      "prov": "14",
      "city": "10",
      "dist": "24",
      "name": "洪洞县",
      "level": 3
    },
    {
      "code": "141025",
      "prov": "14",
      "city": "10",
      "dist": "25",
      "name": "古县",
      "level": 3
    },
    {
      "code": "141026",
      "prov": "14",
      "city": "10",
      "dist": "26",
      "name": "安泽县",
      "level": 3
    },
    {
      "code": "141027",
      "prov": "14",
      "city": "10",
      "dist": "27",
      "name": "浮山县",
      "level": 3
    },
    {
      "code": "141028",
      "prov": "14",
      "city": "10",
      "dist": "28",
      "name": "吉县",
      "level": 3
    },
    {
      "code": "141029",
      "prov": "14",
      "city": "10",
      "dist": "29",
      "name": "乡宁县",
      "level": 3
    },
    {
      "code": "141030",
      "prov": "14",
      "city": "10",
      "dist": "30",
      "name": "大宁县",
      "level": 3
    },
    {
      "code": "141031",
      "prov": "14",
      "city": "10",
      "dist": "31",
      "name": "隰县",
      "level": 3
    },
    {
      "code": "141032",
      "prov": "14",
      "city": "10",
      "dist": "32",
      "name": "永和县",
      "level": 3
    },
    {
      "code": "141033",
      "prov": "14",
      "city": "10",
      "dist": "33",
      "name": "蒲县",
      "level": 3
    },
    {
      "code": "141034",
      "prov": "14",
      "city": "10",
      "dist": "34",
      "name": "汾西县",
      "level": 3
    },
    {
      "code": "141081",
      "prov": "14",
      "city": "10",
      "dist": "81",
      "name": "侯马市",
      "level": 3
    },
    {
      "code": "141082",
      "prov": "14",
      "city": "10",
      "dist": "82",
      "name": "霍州市",
      "level": 3
    },
    {
      "code": "141100",
      "prov": "14",
      "city": "11",
      "dist": "00",
      "name": "吕梁市",
      "level": 2
    },
    {
      "code": "141101",
      "prov": "14",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "141102",
      "prov": "14",
      "city": "11",
      "dist": "02",
      "name": "离石区",
      "level": 3
    },
    {
      "code": "141121",
      "prov": "14",
      "city": "11",
      "dist": "21",
      "name": "文水县",
      "level": 3
    },
    {
      "code": "141122",
      "prov": "14",
      "city": "11",
      "dist": "22",
      "name": "交城县",
      "level": 3
    },
    {
      "code": "141123",
      "prov": "14",
      "city": "11",
      "dist": "23",
      "name": "兴县",
      "level": 3
    },
    {
      "code": "141124",
      "prov": "14",
      "city": "11",
      "dist": "24",
      "name": "临县",
      "level": 3
    },
    {
      "code": "141125",
      "prov": "14",
      "city": "11",
      "dist": "25",
      "name": "柳林县",
      "level": 3
    },
    {
      "code": "141126",
      "prov": "14",
      "city": "11",
      "dist": "26",
      "name": "石楼县",
      "level": 3
    },
    {
      "code": "141127",
      "prov": "14",
      "city": "11",
      "dist": "27",
      "name": "岚县",
      "level": 3
    },
    {
      "code": "141128",
      "prov": "14",
      "city": "11",
      "dist": "28",
      "name": "方山县",
      "level": 3
    },
    {
      "code": "141129",
      "prov": "14",
      "city": "11",
      "dist": "29",
      "name": "中阳县",
      "level": 3
    },
    {
      "code": "141130",
      "prov": "14",
      "city": "11",
      "dist": "30",
      "name": "交口县",
      "level": 3
    },
    {
      "code": "141181",
      "prov": "14",
      "city": "11",
      "dist": "81",
      "name": "孝义市",
      "level": 3
    },
    {
      "code": "141182",
      "prov": "14",
      "city": "11",
      "dist": "82",
      "name": "汾阳市",
      "level": 3
    },
    {
      "code": "150000",
      "prov": "15",
      "city": "00",
      "dist": "00",
      "name": "内蒙古自治区",
      "level": 1
    },
    {
      "code": "150100",
      "prov": "15",
      "city": "01",
      "dist": "00",
      "name": "呼和浩特市",
      "level": 2
    },
    {
      "code": "150101",
      "prov": "15",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150102",
      "prov": "15",
      "city": "01",
      "dist": "02",
      "name": "新城区",
      "level": 3
    },
    {
      "code": "150103",
      "prov": "15",
      "city": "01",
      "dist": "03",
      "name": "回民区",
      "level": 3
    },
    {
      "code": "150104",
      "prov": "15",
      "city": "01",
      "dist": "04",
      "name": "玉泉区",
      "level": 3
    },
    {
      "code": "150105",
      "prov": "15",
      "city": "01",
      "dist": "05",
      "name": "赛罕区",
      "level": 3
    },
    {
      "code": "150121",
      "prov": "15",
      "city": "01",
      "dist": "21",
      "name": "土默特左旗",
      "level": 3
    },
    {
      "code": "150122",
      "prov": "15",
      "city": "01",
      "dist": "22",
      "name": "托克托县",
      "level": 3
    },
    {
      "code": "150123",
      "prov": "15",
      "city": "01",
      "dist": "23",
      "name": "和林格尔县",
      "level": 3
    },
    {
      "code": "150124",
      "prov": "15",
      "city": "01",
      "dist": "24",
      "name": "清水河县",
      "level": 3
    },
    {
      "code": "150125",
      "prov": "15",
      "city": "01",
      "dist": "25",
      "name": "武川县",
      "level": 3
    },
    {
      "code": "150200",
      "prov": "15",
      "city": "02",
      "dist": "00",
      "name": "包头市",
      "level": 2
    },
    {
      "code": "150201",
      "prov": "15",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150202",
      "prov": "15",
      "city": "02",
      "dist": "02",
      "name": "东河区",
      "level": 3
    },
    {
      "code": "150203",
      "prov": "15",
      "city": "02",
      "dist": "03",
      "name": "昆都仑区",
      "level": 3
    },
    {
      "code": "150204",
      "prov": "15",
      "city": "02",
      "dist": "04",
      "name": "青山区",
      "level": 3
    },
    {
      "code": "150205",
      "prov": "15",
      "city": "02",
      "dist": "05",
      "name": "石拐区",
      "level": 3
    },
    {
      "code": "150206",
      "prov": "15",
      "city": "02",
      "dist": "06",
      "name": "白云鄂博矿区",
      "level": 3
    },
    {
      "code": "150207",
      "prov": "15",
      "city": "02",
      "dist": "07",
      "name": "九原区",
      "level": 3
    },
    {
      "code": "150221",
      "prov": "15",
      "city": "02",
      "dist": "21",
      "name": "土默特右旗",
      "level": 3
    },
    {
      "code": "150222",
      "prov": "15",
      "city": "02",
      "dist": "22",
      "name": "固阳县",
      "level": 3
    },
    {
      "code": "150223",
      "prov": "15",
      "city": "02",
      "dist": "23",
      "name": "达尔罕茂明安联合旗",
      "level": 3
    },
    {
      "code": "150300",
      "prov": "15",
      "city": "03",
      "dist": "00",
      "name": "乌海市",
      "level": 2
    },
    {
      "code": "150301",
      "prov": "15",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150302",
      "prov": "15",
      "city": "03",
      "dist": "02",
      "name": "海勃湾区",
      "level": 3
    },
    {
      "code": "150303",
      "prov": "15",
      "city": "03",
      "dist": "03",
      "name": "海南区",
      "level": 3
    },
    {
      "code": "150304",
      "prov": "15",
      "city": "03",
      "dist": "04",
      "name": "乌达区",
      "level": 3
    },
    {
      "code": "150400",
      "prov": "15",
      "city": "04",
      "dist": "00",
      "name": "赤峰市",
      "level": 2
    },
    {
      "code": "150401",
      "prov": "15",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150402",
      "prov": "15",
      "city": "04",
      "dist": "02",
      "name": "红山区",
      "level": 3
    },
    {
      "code": "150403",
      "prov": "15",
      "city": "04",
      "dist": "03",
      "name": "元宝山区",
      "level": 3
    },
    {
      "code": "150404",
      "prov": "15",
      "city": "04",
      "dist": "04",
      "name": "松山区",
      "level": 3
    },
    {
      "code": "150421",
      "prov": "15",
      "city": "04",
      "dist": "21",
      "name": "阿鲁科尔沁旗",
      "level": 3
    },
    {
      "code": "150422",
      "prov": "15",
      "city": "04",
      "dist": "22",
      "name": "巴林左旗",
      "level": 3
    },
    {
      "code": "150423",
      "prov": "15",
      "city": "04",
      "dist": "23",
      "name": "巴林右旗",
      "level": 3
    },
    {
      "code": "150424",
      "prov": "15",
      "city": "04",
      "dist": "24",
      "name": "林西县",
      "level": 3
    },
    {
      "code": "150425",
      "prov": "15",
      "city": "04",
      "dist": "25",
      "name": "克什克腾旗",
      "level": 3
    },
    {
      "code": "150426",
      "prov": "15",
      "city": "04",
      "dist": "26",
      "name": "翁牛特旗",
      "level": 3
    },
    {
      "code": "150428",
      "prov": "15",
      "city": "04",
      "dist": "28",
      "name": "喀喇沁旗",
      "level": 3
    },
    {
      "code": "150429",
      "prov": "15",
      "city": "04",
      "dist": "29",
      "name": "宁城县",
      "level": 3
    },
    {
      "code": "150430",
      "prov": "15",
      "city": "04",
      "dist": "30",
      "name": "敖汉旗",
      "level": 3
    },
    {
      "code": "150500",
      "prov": "15",
      "city": "05",
      "dist": "00",
      "name": "通辽市",
      "level": 2
    },
    {
      "code": "150501",
      "prov": "15",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150502",
      "prov": "15",
      "city": "05",
      "dist": "02",
      "name": "科尔沁区",
      "level": 3
    },
    {
      "code": "150521",
      "prov": "15",
      "city": "05",
      "dist": "21",
      "name": "科尔沁左翼中旗",
      "level": 3
    },
    {
      "code": "150522",
      "prov": "15",
      "city": "05",
      "dist": "22",
      "name": "科尔沁左翼后旗",
      "level": 3
    },
    {
      "code": "150523",
      "prov": "15",
      "city": "05",
      "dist": "23",
      "name": "开鲁县",
      "level": 3
    },
    {
      "code": "150524",
      "prov": "15",
      "city": "05",
      "dist": "24",
      "name": "库伦旗",
      "level": 3
    },
    {
      "code": "150525",
      "prov": "15",
      "city": "05",
      "dist": "25",
      "name": "奈曼旗",
      "level": 3
    },
    {
      "code": "150526",
      "prov": "15",
      "city": "05",
      "dist": "26",
      "name": "扎鲁特旗",
      "level": 3
    },
    {
      "code": "150581",
      "prov": "15",
      "city": "05",
      "dist": "81",
      "name": "霍林郭勒市",
      "level": 3
    },
    {
      "code": "150600",
      "prov": "15",
      "city": "06",
      "dist": "00",
      "name": "鄂尔多斯市",
      "level": 2
    },
    {
      "code": "150601",
      "prov": "15",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150602",
      "prov": "15",
      "city": "06",
      "dist": "02",
      "name": "东胜区",
      "level": 3
    },
    {
      "code": "150621",
      "prov": "15",
      "city": "06",
      "dist": "21",
      "name": "达拉特旗",
      "level": 3
    },
    {
      "code": "150622",
      "prov": "15",
      "city": "06",
      "dist": "22",
      "name": "准格尔旗",
      "level": 3
    },
    {
      "code": "150623",
      "prov": "15",
      "city": "06",
      "dist": "23",
      "name": "鄂托克前旗",
      "level": 3
    },
    {
      "code": "150624",
      "prov": "15",
      "city": "06",
      "dist": "24",
      "name": "鄂托克旗",
      "level": 3
    },
    {
      "code": "150625",
      "prov": "15",
      "city": "06",
      "dist": "25",
      "name": "杭锦旗",
      "level": 3
    },
    {
      "code": "150626",
      "prov": "15",
      "city": "06",
      "dist": "26",
      "name": "乌审旗",
      "level": 3
    },
    {
      "code": "150627",
      "prov": "15",
      "city": "06",
      "dist": "27",
      "name": "伊金霍洛旗",
      "level": 3
    },
    {
      "code": "150700",
      "prov": "15",
      "city": "07",
      "dist": "00",
      "name": "呼伦贝尔市",
      "level": 2
    },
    {
      "code": "150701",
      "prov": "15",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150702",
      "prov": "15",
      "city": "07",
      "dist": "02",
      "name": "海拉尔区",
      "level": 3
    },
    {
      "code": "150703",
      "prov": "15",
      "city": "07",
      "dist": "03",
      "name": "扎赉诺尔区",
      "level": 3
    },
    {
      "code": "150721",
      "prov": "15",
      "city": "07",
      "dist": "21",
      "name": "阿荣旗",
      "level": 3
    },
    {
      "code": "150722",
      "prov": "15",
      "city": "07",
      "dist": "22",
      "name": "莫力达瓦达斡尔族自治旗",
      "level": 3
    },
    {
      "code": "150723",
      "prov": "15",
      "city": "07",
      "dist": "23",
      "name": "鄂伦春自治旗",
      "level": 3
    },
    {
      "code": "150724",
      "prov": "15",
      "city": "07",
      "dist": "24",
      "name": "鄂温克族自治旗",
      "level": 3
    },
    {
      "code": "150725",
      "prov": "15",
      "city": "07",
      "dist": "25",
      "name": "陈巴尔虎旗",
      "level": 3
    },
    {
      "code": "150726",
      "prov": "15",
      "city": "07",
      "dist": "26",
      "name": "新巴尔虎左旗",
      "level": 3
    },
    {
      "code": "150727",
      "prov": "15",
      "city": "07",
      "dist": "27",
      "name": "新巴尔虎右旗",
      "level": 3
    },
    {
      "code": "150781",
      "prov": "15",
      "city": "07",
      "dist": "81",
      "name": "满洲里市",
      "level": 3
    },
    {
      "code": "150782",
      "prov": "15",
      "city": "07",
      "dist": "82",
      "name": "牙克石市",
      "level": 3
    },
    {
      "code": "150783",
      "prov": "15",
      "city": "07",
      "dist": "83",
      "name": "扎兰屯市",
      "level": 3
    },
    {
      "code": "150784",
      "prov": "15",
      "city": "07",
      "dist": "84",
      "name": "额尔古纳市",
      "level": 3
    },
    {
      "code": "150785",
      "prov": "15",
      "city": "07",
      "dist": "85",
      "name": "根河市",
      "level": 3
    },
    {
      "code": "150800",
      "prov": "15",
      "city": "08",
      "dist": "00",
      "name": "巴彦淖尔市",
      "level": 2
    },
    {
      "code": "150801",
      "prov": "15",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150802",
      "prov": "15",
      "city": "08",
      "dist": "02",
      "name": "临河区",
      "level": 3
    },
    {
      "code": "150821",
      "prov": "15",
      "city": "08",
      "dist": "21",
      "name": "五原县",
      "level": 3
    },
    {
      "code": "150822",
      "prov": "15",
      "city": "08",
      "dist": "22",
      "name": "磴口县",
      "level": 3
    },
    {
      "code": "150823",
      "prov": "15",
      "city": "08",
      "dist": "23",
      "name": "乌拉特前旗",
      "level": 3
    },
    {
      "code": "150824",
      "prov": "15",
      "city": "08",
      "dist": "24",
      "name": "乌拉特中旗",
      "level": 3
    },
    {
      "code": "150825",
      "prov": "15",
      "city": "08",
      "dist": "25",
      "name": "乌拉特后旗",
      "level": 3
    },
    {
      "code": "150826",
      "prov": "15",
      "city": "08",
      "dist": "26",
      "name": "杭锦后旗",
      "level": 3
    },
    {
      "code": "150900",
      "prov": "15",
      "city": "09",
      "dist": "00",
      "name": "乌兰察布市",
      "level": 2
    },
    {
      "code": "150901",
      "prov": "15",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "150902",
      "prov": "15",
      "city": "09",
      "dist": "02",
      "name": "集宁区",
      "level": 3
    },
    {
      "code": "150921",
      "prov": "15",
      "city": "09",
      "dist": "21",
      "name": "卓资县",
      "level": 3
    },
    {
      "code": "150922",
      "prov": "15",
      "city": "09",
      "dist": "22",
      "name": "化德县",
      "level": 3
    },
    {
      "code": "150923",
      "prov": "15",
      "city": "09",
      "dist": "23",
      "name": "商都县",
      "level": 3
    },
    {
      "code": "150924",
      "prov": "15",
      "city": "09",
      "dist": "24",
      "name": "兴和县",
      "level": 3
    },
    {
      "code": "150925",
      "prov": "15",
      "city": "09",
      "dist": "25",
      "name": "凉城县",
      "level": 3
    },
    {
      "code": "150926",
      "prov": "15",
      "city": "09",
      "dist": "26",
      "name": "察哈尔右翼前旗",
      "level": 3
    },
    {
      "code": "150927",
      "prov": "15",
      "city": "09",
      "dist": "27",
      "name": "察哈尔右翼中旗",
      "level": 3
    },
    {
      "code": "150928",
      "prov": "15",
      "city": "09",
      "dist": "28",
      "name": "察哈尔右翼后旗",
      "level": 3
    },
    {
      "code": "150929",
      "prov": "15",
      "city": "09",
      "dist": "29",
      "name": "四子王旗",
      "level": 3
    },
    {
      "code": "150981",
      "prov": "15",
      "city": "09",
      "dist": "81",
      "name": "丰镇市",
      "level": 3
    },
    {
      "code": "152200",
      "prov": "15",
      "city": "22",
      "dist": "00",
      "name": "兴安盟",
      "level": 2
    },
    {
      "code": "152201",
      "prov": "15",
      "city": "22",
      "dist": "01",
      "name": "乌兰浩特市",
      "level": 3
    },
    {
      "code": "152202",
      "prov": "15",
      "city": "22",
      "dist": "02",
      "name": "阿尔山市",
      "level": 3
    },
    {
      "code": "152221",
      "prov": "15",
      "city": "22",
      "dist": "21",
      "name": "科尔沁右翼前旗",
      "level": 3
    },
    {
      "code": "152222",
      "prov": "15",
      "city": "22",
      "dist": "22",
      "name": "科尔沁右翼中旗",
      "level": 3
    },
    {
      "code": "152223",
      "prov": "15",
      "city": "22",
      "dist": "23",
      "name": "扎赉特旗",
      "level": 3
    },
    {
      "code": "152224",
      "prov": "15",
      "city": "22",
      "dist": "24",
      "name": "突泉县",
      "level": 3
    },
    {
      "code": "152500",
      "prov": "15",
      "city": "25",
      "dist": "00",
      "name": "锡林郭勒盟",
      "level": 2
    },
    {
      "code": "152501",
      "prov": "15",
      "city": "25",
      "dist": "01",
      "name": "二连浩特市",
      "level": 3
    },
    {
      "code": "152502",
      "prov": "15",
      "city": "25",
      "dist": "02",
      "name": "锡林浩特市",
      "level": 3
    },
    {
      "code": "152522",
      "prov": "15",
      "city": "25",
      "dist": "22",
      "name": "阿巴嘎旗",
      "level": 3
    },
    {
      "code": "152523",
      "prov": "15",
      "city": "25",
      "dist": "23",
      "name": "苏尼特左旗",
      "level": 3
    },
    {
      "code": "152524",
      "prov": "15",
      "city": "25",
      "dist": "24",
      "name": "苏尼特右旗",
      "level": 3
    },
    {
      "code": "152525",
      "prov": "15",
      "city": "25",
      "dist": "25",
      "name": "东乌珠穆沁旗",
      "level": 3
    },
    {
      "code": "152526",
      "prov": "15",
      "city": "25",
      "dist": "26",
      "name": "西乌珠穆沁旗",
      "level": 3
    },
    {
      "code": "152527",
      "prov": "15",
      "city": "25",
      "dist": "27",
      "name": "太仆寺旗",
      "level": 3
    },
    {
      "code": "152528",
      "prov": "15",
      "city": "25",
      "dist": "28",
      "name": "镶黄旗",
      "level": 3
    },
    {
      "code": "152529",
      "prov": "15",
      "city": "25",
      "dist": "29",
      "name": "正镶白旗",
      "level": 3
    },
    {
      "code": "152530",
      "prov": "15",
      "city": "25",
      "dist": "30",
      "name": "正蓝旗",
      "level": 3
    },
    {
      "code": "152531",
      "prov": "15",
      "city": "25",
      "dist": "31",
      "name": "多伦县",
      "level": 3
    },
    {
      "code": "152900",
      "prov": "15",
      "city": "29",
      "dist": "00",
      "name": "阿拉善盟",
      "level": 2
    },
    {
      "code": "152921",
      "prov": "15",
      "city": "29",
      "dist": "21",
      "name": "阿拉善左旗",
      "level": 3
    },
    {
      "code": "152922",
      "prov": "15",
      "city": "29",
      "dist": "22",
      "name": "阿拉善右旗",
      "level": 3
    },
    {
      "code": "152923",
      "prov": "15",
      "city": "29",
      "dist": "23",
      "name": "额济纳旗",
      "level": 3
    },
    {
      "code": "210000",
      "prov": "21",
      "city": "00",
      "dist": "00",
      "name": "辽宁省",
      "level": 1
    },
    {
      "code": "210100",
      "prov": "21",
      "city": "01",
      "dist": "00",
      "name": "沈阳市",
      "level": 2
    },
    {
      "code": "210101",
      "prov": "21",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210102",
      "prov": "21",
      "city": "01",
      "dist": "02",
      "name": "和平区",
      "level": 3
    },
    {
      "code": "210103",
      "prov": "21",
      "city": "01",
      "dist": "03",
      "name": "沈河区",
      "level": 3
    },
    {
      "code": "210104",
      "prov": "21",
      "city": "01",
      "dist": "04",
      "name": "大东区",
      "level": 3
    },
    {
      "code": "210105",
      "prov": "21",
      "city": "01",
      "dist": "05",
      "name": "皇姑区",
      "level": 3
    },
    {
      "code": "210106",
      "prov": "21",
      "city": "01",
      "dist": "06",
      "name": "铁西区",
      "level": 3
    },
    {
      "code": "210111",
      "prov": "21",
      "city": "01",
      "dist": "11",
      "name": "苏家屯区",
      "level": 3
    },
    {
      "code": "210112",
      "prov": "21",
      "city": "01",
      "dist": "12",
      "name": "浑南区",
      "level": 3
    },
    {
      "code": "210113",
      "prov": "21",
      "city": "01",
      "dist": "13",
      "name": "沈北新区",
      "level": 3
    },
    {
      "code": "210114",
      "prov": "21",
      "city": "01",
      "dist": "14",
      "name": "于洪区",
      "level": 3
    },
    {
      "code": "210122",
      "prov": "21",
      "city": "01",
      "dist": "22",
      "name": "辽中县",
      "level": 3
    },
    {
      "code": "210123",
      "prov": "21",
      "city": "01",
      "dist": "23",
      "name": "康平县",
      "level": 3
    },
    {
      "code": "210124",
      "prov": "21",
      "city": "01",
      "dist": "24",
      "name": "法库县",
      "level": 3
    },
    {
      "code": "210181",
      "prov": "21",
      "city": "01",
      "dist": "81",
      "name": "新民市",
      "level": 3
    },
    {
      "code": "210200",
      "prov": "21",
      "city": "02",
      "dist": "00",
      "name": "大连市",
      "level": 2
    },
    {
      "code": "210201",
      "prov": "21",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210202",
      "prov": "21",
      "city": "02",
      "dist": "02",
      "name": "中山区",
      "level": 3
    },
    {
      "code": "210203",
      "prov": "21",
      "city": "02",
      "dist": "03",
      "name": "西岗区",
      "level": 3
    },
    {
      "code": "210204",
      "prov": "21",
      "city": "02",
      "dist": "04",
      "name": "沙河口区",
      "level": 3
    },
    {
      "code": "210211",
      "prov": "21",
      "city": "02",
      "dist": "11",
      "name": "甘井子区",
      "level": 3
    },
    {
      "code": "210212",
      "prov": "21",
      "city": "02",
      "dist": "12",
      "name": "旅顺口区",
      "level": 3
    },
    {
      "code": "210213",
      "prov": "21",
      "city": "02",
      "dist": "13",
      "name": "金州区",
      "level": 3
    },
    {
      "code": "210224",
      "prov": "21",
      "city": "02",
      "dist": "24",
      "name": "长海县",
      "level": 3
    },
    {
      "code": "210281",
      "prov": "21",
      "city": "02",
      "dist": "81",
      "name": "瓦房店市",
      "level": 3
    },
    {
      "code": "210282",
      "prov": "21",
      "city": "02",
      "dist": "82",
      "name": "普兰店市",
      "level": 3
    },
    {
      "code": "210283",
      "prov": "21",
      "city": "02",
      "dist": "83",
      "name": "庄河市",
      "level": 3
    },
    {
      "code": "210300",
      "prov": "21",
      "city": "03",
      "dist": "00",
      "name": "鞍山市",
      "level": 2
    },
    {
      "code": "210301",
      "prov": "21",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210302",
      "prov": "21",
      "city": "03",
      "dist": "02",
      "name": "铁东区",
      "level": 3
    },
    {
      "code": "210303",
      "prov": "21",
      "city": "03",
      "dist": "03",
      "name": "铁西区",
      "level": 3
    },
    {
      "code": "210304",
      "prov": "21",
      "city": "03",
      "dist": "04",
      "name": "立山区",
      "level": 3
    },
    {
      "code": "210311",
      "prov": "21",
      "city": "03",
      "dist": "11",
      "name": "千山区",
      "level": 3
    },
    {
      "code": "210321",
      "prov": "21",
      "city": "03",
      "dist": "21",
      "name": "台安县",
      "level": 3
    },
    {
      "code": "210323",
      "prov": "21",
      "city": "03",
      "dist": "23",
      "name": "岫岩满族自治县",
      "level": 3
    },
    {
      "code": "210381",
      "prov": "21",
      "city": "03",
      "dist": "81",
      "name": "海城市",
      "level": 3
    },
    {
      "code": "210400",
      "prov": "21",
      "city": "04",
      "dist": "00",
      "name": "抚顺市",
      "level": 2
    },
    {
      "code": "210401",
      "prov": "21",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210402",
      "prov": "21",
      "city": "04",
      "dist": "02",
      "name": "新抚区",
      "level": 3
    },
    {
      "code": "210403",
      "prov": "21",
      "city": "04",
      "dist": "03",
      "name": "东洲区",
      "level": 3
    },
    {
      "code": "210404",
      "prov": "21",
      "city": "04",
      "dist": "04",
      "name": "望花区",
      "level": 3
    },
    {
      "code": "210411",
      "prov": "21",
      "city": "04",
      "dist": "11",
      "name": "顺城区",
      "level": 3
    },
    {
      "code": "210421",
      "prov": "21",
      "city": "04",
      "dist": "21",
      "name": "抚顺县",
      "level": 3
    },
    {
      "code": "210422",
      "prov": "21",
      "city": "04",
      "dist": "22",
      "name": "新宾满族自治县",
      "level": 3
    },
    {
      "code": "210423",
      "prov": "21",
      "city": "04",
      "dist": "23",
      "name": "清原满族自治县",
      "level": 3
    },
    {
      "code": "210500",
      "prov": "21",
      "city": "05",
      "dist": "00",
      "name": "本溪市",
      "level": 2
    },
    {
      "code": "210501",
      "prov": "21",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210502",
      "prov": "21",
      "city": "05",
      "dist": "02",
      "name": "平山区",
      "level": 3
    },
    {
      "code": "210503",
      "prov": "21",
      "city": "05",
      "dist": "03",
      "name": "溪湖区",
      "level": 3
    },
    {
      "code": "210504",
      "prov": "21",
      "city": "05",
      "dist": "04",
      "name": "明山区",
      "level": 3
    },
    {
      "code": "210505",
      "prov": "21",
      "city": "05",
      "dist": "05",
      "name": "南芬区",
      "level": 3
    },
    {
      "code": "210521",
      "prov": "21",
      "city": "05",
      "dist": "21",
      "name": "本溪满族自治县",
      "level": 3
    },
    {
      "code": "210522",
      "prov": "21",
      "city": "05",
      "dist": "22",
      "name": "桓仁满族自治县",
      "level": 3
    },
    {
      "code": "210600",
      "prov": "21",
      "city": "06",
      "dist": "00",
      "name": "丹东市",
      "level": 2
    },
    {
      "code": "210601",
      "prov": "21",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210602",
      "prov": "21",
      "city": "06",
      "dist": "02",
      "name": "元宝区",
      "level": 3
    },
    {
      "code": "210603",
      "prov": "21",
      "city": "06",
      "dist": "03",
      "name": "振兴区",
      "level": 3
    },
    {
      "code": "210604",
      "prov": "21",
      "city": "06",
      "dist": "04",
      "name": "振安区",
      "level": 3
    },
    {
      "code": "210624",
      "prov": "21",
      "city": "06",
      "dist": "24",
      "name": "宽甸满族自治县",
      "level": 3
    },
    {
      "code": "210681",
      "prov": "21",
      "city": "06",
      "dist": "81",
      "name": "东港市",
      "level": 3
    },
    {
      "code": "210682",
      "prov": "21",
      "city": "06",
      "dist": "82",
      "name": "凤城市",
      "level": 3
    },
    {
      "code": "210700",
      "prov": "21",
      "city": "07",
      "dist": "00",
      "name": "锦州市",
      "level": 2
    },
    {
      "code": "210701",
      "prov": "21",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210702",
      "prov": "21",
      "city": "07",
      "dist": "02",
      "name": "古塔区",
      "level": 3
    },
    {
      "code": "210703",
      "prov": "21",
      "city": "07",
      "dist": "03",
      "name": "凌河区",
      "level": 3
    },
    {
      "code": "210711",
      "prov": "21",
      "city": "07",
      "dist": "11",
      "name": "太和区",
      "level": 3
    },
    {
      "code": "210726",
      "prov": "21",
      "city": "07",
      "dist": "26",
      "name": "黑山县",
      "level": 3
    },
    {
      "code": "210727",
      "prov": "21",
      "city": "07",
      "dist": "27",
      "name": "义县",
      "level": 3
    },
    {
      "code": "210781",
      "prov": "21",
      "city": "07",
      "dist": "81",
      "name": "凌海市",
      "level": 3
    },
    {
      "code": "210782",
      "prov": "21",
      "city": "07",
      "dist": "82",
      "name": "北镇市",
      "level": 3
    },
    {
      "code": "210800",
      "prov": "21",
      "city": "08",
      "dist": "00",
      "name": "营口市",
      "level": 2
    },
    {
      "code": "210801",
      "prov": "21",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210802",
      "prov": "21",
      "city": "08",
      "dist": "02",
      "name": "站前区",
      "level": 3
    },
    {
      "code": "210803",
      "prov": "21",
      "city": "08",
      "dist": "03",
      "name": "西市区",
      "level": 3
    },
    {
      "code": "210804",
      "prov": "21",
      "city": "08",
      "dist": "04",
      "name": "鲅鱼圈区",
      "level": 3
    },
    {
      "code": "210811",
      "prov": "21",
      "city": "08",
      "dist": "11",
      "name": "老边区",
      "level": 3
    },
    {
      "code": "210881",
      "prov": "21",
      "city": "08",
      "dist": "81",
      "name": "盖州市",
      "level": 3
    },
    {
      "code": "210882",
      "prov": "21",
      "city": "08",
      "dist": "82",
      "name": "大石桥市",
      "level": 3
    },
    {
      "code": "210900",
      "prov": "21",
      "city": "09",
      "dist": "00",
      "name": "阜新市",
      "level": 2
    },
    {
      "code": "210901",
      "prov": "21",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "210902",
      "prov": "21",
      "city": "09",
      "dist": "02",
      "name": "海州区",
      "level": 3
    },
    {
      "code": "210903",
      "prov": "21",
      "city": "09",
      "dist": "03",
      "name": "新邱区",
      "level": 3
    },
    {
      "code": "210904",
      "prov": "21",
      "city": "09",
      "dist": "04",
      "name": "太平区",
      "level": 3
    },
    {
      "code": "210905",
      "prov": "21",
      "city": "09",
      "dist": "05",
      "name": "清河门区",
      "level": 3
    },
    {
      "code": "210911",
      "prov": "21",
      "city": "09",
      "dist": "11",
      "name": "细河区",
      "level": 3
    },
    {
      "code": "210921",
      "prov": "21",
      "city": "09",
      "dist": "21",
      "name": "阜新蒙古族自治县",
      "level": 3
    },
    {
      "code": "210922",
      "prov": "21",
      "city": "09",
      "dist": "22",
      "name": "彰武县",
      "level": 3
    },
    {
      "code": "211000",
      "prov": "21",
      "city": "10",
      "dist": "00",
      "name": "辽阳市",
      "level": 2
    },
    {
      "code": "211001",
      "prov": "21",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "211002",
      "prov": "21",
      "city": "10",
      "dist": "02",
      "name": "白塔区",
      "level": 3
    },
    {
      "code": "211003",
      "prov": "21",
      "city": "10",
      "dist": "03",
      "name": "文圣区",
      "level": 3
    },
    {
      "code": "211004",
      "prov": "21",
      "city": "10",
      "dist": "04",
      "name": "宏伟区",
      "level": 3
    },
    {
      "code": "211005",
      "prov": "21",
      "city": "10",
      "dist": "05",
      "name": "弓长岭区",
      "level": 3
    },
    {
      "code": "211011",
      "prov": "21",
      "city": "10",
      "dist": "11",
      "name": "太子河区",
      "level": 3
    },
    {
      "code": "211021",
      "prov": "21",
      "city": "10",
      "dist": "21",
      "name": "辽阳县",
      "level": 3
    },
    {
      "code": "211081",
      "prov": "21",
      "city": "10",
      "dist": "81",
      "name": "灯塔市",
      "level": 3
    },
    {
      "code": "211100",
      "prov": "21",
      "city": "11",
      "dist": "00",
      "name": "盘锦市",
      "level": 2
    },
    {
      "code": "211101",
      "prov": "21",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "211102",
      "prov": "21",
      "city": "11",
      "dist": "02",
      "name": "双台子区",
      "level": 3
    },
    {
      "code": "211103",
      "prov": "21",
      "city": "11",
      "dist": "03",
      "name": "兴隆台区",
      "level": 3
    },
    {
      "code": "211121",
      "prov": "21",
      "city": "11",
      "dist": "21",
      "name": "大洼县",
      "level": 3
    },
    {
      "code": "211122",
      "prov": "21",
      "city": "11",
      "dist": "22",
      "name": "盘山县",
      "level": 3
    },
    {
      "code": "211200",
      "prov": "21",
      "city": "12",
      "dist": "00",
      "name": "铁岭市",
      "level": 2
    },
    {
      "code": "211201",
      "prov": "21",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "211202",
      "prov": "21",
      "city": "12",
      "dist": "02",
      "name": "银州区",
      "level": 3
    },
    {
      "code": "211204",
      "prov": "21",
      "city": "12",
      "dist": "04",
      "name": "清河区",
      "level": 3
    },
    {
      "code": "211221",
      "prov": "21",
      "city": "12",
      "dist": "21",
      "name": "铁岭县",
      "level": 3
    },
    {
      "code": "211223",
      "prov": "21",
      "city": "12",
      "dist": "23",
      "name": "西丰县",
      "level": 3
    },
    {
      "code": "211224",
      "prov": "21",
      "city": "12",
      "dist": "24",
      "name": "昌图县",
      "level": 3
    },
    {
      "code": "211281",
      "prov": "21",
      "city": "12",
      "dist": "81",
      "name": "调兵山市",
      "level": 3
    },
    {
      "code": "211282",
      "prov": "21",
      "city": "12",
      "dist": "82",
      "name": "开原市",
      "level": 3
    },
    {
      "code": "211300",
      "prov": "21",
      "city": "13",
      "dist": "00",
      "name": "朝阳市",
      "level": 2
    },
    {
      "code": "211301",
      "prov": "21",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "211302",
      "prov": "21",
      "city": "13",
      "dist": "02",
      "name": "双塔区",
      "level": 3
    },
    {
      "code": "211303",
      "prov": "21",
      "city": "13",
      "dist": "03",
      "name": "龙城区",
      "level": 3
    },
    {
      "code": "211321",
      "prov": "21",
      "city": "13",
      "dist": "21",
      "name": "朝阳县",
      "level": 3
    },
    {
      "code": "211322",
      "prov": "21",
      "city": "13",
      "dist": "22",
      "name": "建平县",
      "level": 3
    },
    {
      "code": "211324",
      "prov": "21",
      "city": "13",
      "dist": "24",
      "name": "喀喇沁左翼蒙古族自治县",
      "level": 3
    },
    {
      "code": "211381",
      "prov": "21",
      "city": "13",
      "dist": "81",
      "name": "北票市",
      "level": 3
    },
    {
      "code": "211382",
      "prov": "21",
      "city": "13",
      "dist": "82",
      "name": "凌源市",
      "level": 3
    },
    {
      "code": "211400",
      "prov": "21",
      "city": "14",
      "dist": "00",
      "name": "葫芦岛市",
      "level": 2
    },
    {
      "code": "211401",
      "prov": "21",
      "city": "14",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "211402",
      "prov": "21",
      "city": "14",
      "dist": "02",
      "name": "连山区",
      "level": 3
    },
    {
      "code": "211403",
      "prov": "21",
      "city": "14",
      "dist": "03",
      "name": "龙港区",
      "level": 3
    },
    {
      "code": "211404",
      "prov": "21",
      "city": "14",
      "dist": "04",
      "name": "南票区",
      "level": 3
    },
    {
      "code": "211421",
      "prov": "21",
      "city": "14",
      "dist": "21",
      "name": "绥中县",
      "level": 3
    },
    {
      "code": "211422",
      "prov": "21",
      "city": "14",
      "dist": "22",
      "name": "建昌县",
      "level": 3
    },
    {
      "code": "211481",
      "prov": "21",
      "city": "14",
      "dist": "81",
      "name": "兴城市",
      "level": 3
    },
    {
      "code": "220000",
      "prov": "22",
      "city": "00",
      "dist": "00",
      "name": "吉林省",
      "level": 1
    },
    {
      "code": "220100",
      "prov": "22",
      "city": "01",
      "dist": "00",
      "name": "长春市",
      "level": 2
    },
    {
      "code": "220101",
      "prov": "22",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220102",
      "prov": "22",
      "city": "01",
      "dist": "02",
      "name": "南关区",
      "level": 3
    },
    {
      "code": "220103",
      "prov": "22",
      "city": "01",
      "dist": "03",
      "name": "宽城区",
      "level": 3
    },
    {
      "code": "220104",
      "prov": "22",
      "city": "01",
      "dist": "04",
      "name": "朝阳区",
      "level": 3
    },
    {
      "code": "220105",
      "prov": "22",
      "city": "01",
      "dist": "05",
      "name": "二道区",
      "level": 3
    },
    {
      "code": "220106",
      "prov": "22",
      "city": "01",
      "dist": "06",
      "name": "绿园区",
      "level": 3
    },
    {
      "code": "220112",
      "prov": "22",
      "city": "01",
      "dist": "12",
      "name": "双阳区",
      "level": 3
    },
    {
      "code": "220113",
      "prov": "22",
      "city": "01",
      "dist": "13",
      "name": "九台区",
      "level": 3
    },
    {
      "code": "220122",
      "prov": "22",
      "city": "01",
      "dist": "22",
      "name": "农安县",
      "level": 3
    },
    {
      "code": "220182",
      "prov": "22",
      "city": "01",
      "dist": "82",
      "name": "榆树市",
      "level": 3
    },
    {
      "code": "220183",
      "prov": "22",
      "city": "01",
      "dist": "83",
      "name": "德惠市",
      "level": 3
    },
    {
      "code": "220200",
      "prov": "22",
      "city": "02",
      "dist": "00",
      "name": "吉林市",
      "level": 2
    },
    {
      "code": "220201",
      "prov": "22",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220202",
      "prov": "22",
      "city": "02",
      "dist": "02",
      "name": "昌邑区",
      "level": 3
    },
    {
      "code": "220203",
      "prov": "22",
      "city": "02",
      "dist": "03",
      "name": "龙潭区",
      "level": 3
    },
    {
      "code": "220204",
      "prov": "22",
      "city": "02",
      "dist": "04",
      "name": "船营区",
      "level": 3
    },
    {
      "code": "220211",
      "prov": "22",
      "city": "02",
      "dist": "11",
      "name": "丰满区",
      "level": 3
    },
    {
      "code": "220221",
      "prov": "22",
      "city": "02",
      "dist": "21",
      "name": "永吉县",
      "level": 3
    },
    {
      "code": "220281",
      "prov": "22",
      "city": "02",
      "dist": "81",
      "name": "蛟河市",
      "level": 3
    },
    {
      "code": "220282",
      "prov": "22",
      "city": "02",
      "dist": "82",
      "name": "桦甸市",
      "level": 3
    },
    {
      "code": "220283",
      "prov": "22",
      "city": "02",
      "dist": "83",
      "name": "舒兰市",
      "level": 3
    },
    {
      "code": "220284",
      "prov": "22",
      "city": "02",
      "dist": "84",
      "name": "磐石市",
      "level": 3
    },
    {
      "code": "220300",
      "prov": "22",
      "city": "03",
      "dist": "00",
      "name": "四平市",
      "level": 2
    },
    {
      "code": "220301",
      "prov": "22",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220302",
      "prov": "22",
      "city": "03",
      "dist": "02",
      "name": "铁西区",
      "level": 3
    },
    {
      "code": "220303",
      "prov": "22",
      "city": "03",
      "dist": "03",
      "name": "铁东区",
      "level": 3
    },
    {
      "code": "220322",
      "prov": "22",
      "city": "03",
      "dist": "22",
      "name": "梨树县",
      "level": 3
    },
    {
      "code": "220323",
      "prov": "22",
      "city": "03",
      "dist": "23",
      "name": "伊通满族自治县",
      "level": 3
    },
    {
      "code": "220381",
      "prov": "22",
      "city": "03",
      "dist": "81",
      "name": "公主岭市",
      "level": 3
    },
    {
      "code": "220382",
      "prov": "22",
      "city": "03",
      "dist": "82",
      "name": "双辽市",
      "level": 3
    },
    {
      "code": "220400",
      "prov": "22",
      "city": "04",
      "dist": "00",
      "name": "辽源市",
      "level": 2
    },
    {
      "code": "220401",
      "prov": "22",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220402",
      "prov": "22",
      "city": "04",
      "dist": "02",
      "name": "龙山区",
      "level": 3
    },
    {
      "code": "220403",
      "prov": "22",
      "city": "04",
      "dist": "03",
      "name": "西安区",
      "level": 3
    },
    {
      "code": "220421",
      "prov": "22",
      "city": "04",
      "dist": "21",
      "name": "东丰县",
      "level": 3
    },
    {
      "code": "220422",
      "prov": "22",
      "city": "04",
      "dist": "22",
      "name": "东辽县",
      "level": 3
    },
    {
      "code": "220500",
      "prov": "22",
      "city": "05",
      "dist": "00",
      "name": "通化市",
      "level": 2
    },
    {
      "code": "220501",
      "prov": "22",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220502",
      "prov": "22",
      "city": "05",
      "dist": "02",
      "name": "东昌区",
      "level": 3
    },
    {
      "code": "220503",
      "prov": "22",
      "city": "05",
      "dist": "03",
      "name": "二道江区",
      "level": 3
    },
    {
      "code": "220521",
      "prov": "22",
      "city": "05",
      "dist": "21",
      "name": "通化县",
      "level": 3
    },
    {
      "code": "220523",
      "prov": "22",
      "city": "05",
      "dist": "23",
      "name": "辉南县",
      "level": 3
    },
    {
      "code": "220524",
      "prov": "22",
      "city": "05",
      "dist": "24",
      "name": "柳河县",
      "level": 3
    },
    {
      "code": "220581",
      "prov": "22",
      "city": "05",
      "dist": "81",
      "name": "梅河口市",
      "level": 3
    },
    {
      "code": "220582",
      "prov": "22",
      "city": "05",
      "dist": "82",
      "name": "集安市",
      "level": 3
    },
    {
      "code": "220600",
      "prov": "22",
      "city": "06",
      "dist": "00",
      "name": "白山市",
      "level": 2
    },
    {
      "code": "220601",
      "prov": "22",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220602",
      "prov": "22",
      "city": "06",
      "dist": "02",
      "name": "浑江区",
      "level": 3
    },
    {
      "code": "220605",
      "prov": "22",
      "city": "06",
      "dist": "05",
      "name": "江源区",
      "level": 3
    },
    {
      "code": "220621",
      "prov": "22",
      "city": "06",
      "dist": "21",
      "name": "抚松县",
      "level": 3
    },
    {
      "code": "220622",
      "prov": "22",
      "city": "06",
      "dist": "22",
      "name": "靖宇县",
      "level": 3
    },
    {
      "code": "220623",
      "prov": "22",
      "city": "06",
      "dist": "23",
      "name": "长白朝鲜族自治县",
      "level": 3
    },
    {
      "code": "220681",
      "prov": "22",
      "city": "06",
      "dist": "81",
      "name": "临江市",
      "level": 3
    },
    {
      "code": "220700",
      "prov": "22",
      "city": "07",
      "dist": "00",
      "name": "松原市",
      "level": 2
    },
    {
      "code": "220701",
      "prov": "22",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220702",
      "prov": "22",
      "city": "07",
      "dist": "02",
      "name": "宁江区",
      "level": 3
    },
    {
      "code": "220721",
      "prov": "22",
      "city": "07",
      "dist": "21",
      "name": "前郭尔罗斯蒙古族自治县",
      "level": 3
    },
    {
      "code": "220722",
      "prov": "22",
      "city": "07",
      "dist": "22",
      "name": "长岭县",
      "level": 3
    },
    {
      "code": "220723",
      "prov": "22",
      "city": "07",
      "dist": "23",
      "name": "乾安县",
      "level": 3
    },
    {
      "code": "220781",
      "prov": "22",
      "city": "07",
      "dist": "81",
      "name": "扶余市",
      "level": 3
    },
    {
      "code": "220800",
      "prov": "22",
      "city": "08",
      "dist": "00",
      "name": "白城市",
      "level": 2
    },
    {
      "code": "220801",
      "prov": "22",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "220802",
      "prov": "22",
      "city": "08",
      "dist": "02",
      "name": "洮北区",
      "level": 3
    },
    {
      "code": "220821",
      "prov": "22",
      "city": "08",
      "dist": "21",
      "name": "镇赉县",
      "level": 3
    },
    {
      "code": "220822",
      "prov": "22",
      "city": "08",
      "dist": "22",
      "name": "通榆县",
      "level": 3
    },
    {
      "code": "220881",
      "prov": "22",
      "city": "08",
      "dist": "81",
      "name": "洮南市",
      "level": 3
    },
    {
      "code": "220882",
      "prov": "22",
      "city": "08",
      "dist": "82",
      "name": "大安市",
      "level": 3
    },
    {
      "code": "222400",
      "prov": "22",
      "city": "24",
      "dist": "00",
      "name": "延边朝鲜族自治州",
      "level": 2
    },
    {
      "code": "222401",
      "prov": "22",
      "city": "24",
      "dist": "01",
      "name": "延吉市",
      "level": 3
    },
    {
      "code": "222402",
      "prov": "22",
      "city": "24",
      "dist": "02",
      "name": "图们市",
      "level": 3
    },
    {
      "code": "222403",
      "prov": "22",
      "city": "24",
      "dist": "03",
      "name": "敦化市",
      "level": 3
    },
    {
      "code": "222404",
      "prov": "22",
      "city": "24",
      "dist": "04",
      "name": "珲春市",
      "level": 3
    },
    {
      "code": "222405",
      "prov": "22",
      "city": "24",
      "dist": "05",
      "name": "龙井市",
      "level": 3
    },
    {
      "code": "222406",
      "prov": "22",
      "city": "24",
      "dist": "06",
      "name": "和龙市",
      "level": 3
    },
    {
      "code": "222424",
      "prov": "22",
      "city": "24",
      "dist": "24",
      "name": "汪清县",
      "level": 3
    },
    {
      "code": "222426",
      "prov": "22",
      "city": "24",
      "dist": "26",
      "name": "安图县",
      "level": 3
    },
    {
      "code": "230000",
      "prov": "23",
      "city": "00",
      "dist": "00",
      "name": "黑龙江省",
      "level": 1
    },
    {
      "code": "230100",
      "prov": "23",
      "city": "01",
      "dist": "00",
      "name": "哈尔滨市",
      "level": 2
    },
    {
      "code": "230101",
      "prov": "23",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230102",
      "prov": "23",
      "city": "01",
      "dist": "02",
      "name": "道里区",
      "level": 3
    },
    {
      "code": "230103",
      "prov": "23",
      "city": "01",
      "dist": "03",
      "name": "南岗区",
      "level": 3
    },
    {
      "code": "230104",
      "prov": "23",
      "city": "01",
      "dist": "04",
      "name": "道外区",
      "level": 3
    },
    {
      "code": "230108",
      "prov": "23",
      "city": "01",
      "dist": "08",
      "name": "平房区",
      "level": 3
    },
    {
      "code": "230109",
      "prov": "23",
      "city": "01",
      "dist": "09",
      "name": "松北区",
      "level": 3
    },
    {
      "code": "230110",
      "prov": "23",
      "city": "01",
      "dist": "10",
      "name": "香坊区",
      "level": 3
    },
    {
      "code": "230111",
      "prov": "23",
      "city": "01",
      "dist": "11",
      "name": "呼兰区",
      "level": 3
    },
    {
      "code": "230112",
      "prov": "23",
      "city": "01",
      "dist": "12",
      "name": "阿城区",
      "level": 3
    },
    {
      "code": "230123",
      "prov": "23",
      "city": "01",
      "dist": "23",
      "name": "依兰县",
      "level": 3
    },
    {
      "code": "230124",
      "prov": "23",
      "city": "01",
      "dist": "24",
      "name": "方正县",
      "level": 3
    },
    {
      "code": "230125",
      "prov": "23",
      "city": "01",
      "dist": "25",
      "name": "宾县",
      "level": 3
    },
    {
      "code": "230126",
      "prov": "23",
      "city": "01",
      "dist": "26",
      "name": "巴彦县",
      "level": 3
    },
    {
      "code": "230127",
      "prov": "23",
      "city": "01",
      "dist": "27",
      "name": "木兰县",
      "level": 3
    },
    {
      "code": "230128",
      "prov": "23",
      "city": "01",
      "dist": "28",
      "name": "通河县",
      "level": 3
    },
    {
      "code": "230129",
      "prov": "23",
      "city": "01",
      "dist": "29",
      "name": "延寿县",
      "level": 3
    },
    {
      "code": "230182",
      "prov": "23",
      "city": "01",
      "dist": "82",
      "name": "双城市",
      "level": 3
    },
    {
      "code": "230183",
      "prov": "23",
      "city": "01",
      "dist": "83",
      "name": "尚志市",
      "level": 3
    },
    {
      "code": "230184",
      "prov": "23",
      "city": "01",
      "dist": "84",
      "name": "五常市",
      "level": 3
    },
    {
      "code": "230200",
      "prov": "23",
      "city": "02",
      "dist": "00",
      "name": "齐齐哈尔市",
      "level": 2
    },
    {
      "code": "230201",
      "prov": "23",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230202",
      "prov": "23",
      "city": "02",
      "dist": "02",
      "name": "龙沙区",
      "level": 3
    },
    {
      "code": "230203",
      "prov": "23",
      "city": "02",
      "dist": "03",
      "name": "建华区",
      "level": 3
    },
    {
      "code": "230204",
      "prov": "23",
      "city": "02",
      "dist": "04",
      "name": "铁锋区",
      "level": 3
    },
    {
      "code": "230205",
      "prov": "23",
      "city": "02",
      "dist": "05",
      "name": "昂昂溪区",
      "level": 3
    },
    {
      "code": "230206",
      "prov": "23",
      "city": "02",
      "dist": "06",
      "name": "富拉尔基区",
      "level": 3
    },
    {
      "code": "230207",
      "prov": "23",
      "city": "02",
      "dist": "07",
      "name": "碾子山区",
      "level": 3
    },
    {
      "code": "230208",
      "prov": "23",
      "city": "02",
      "dist": "08",
      "name": "梅里斯达斡尔族区",
      "level": 3
    },
    {
      "code": "230221",
      "prov": "23",
      "city": "02",
      "dist": "21",
      "name": "龙江县",
      "level": 3
    },
    {
      "code": "230223",
      "prov": "23",
      "city": "02",
      "dist": "23",
      "name": "依安县",
      "level": 3
    },
    {
      "code": "230224",
      "prov": "23",
      "city": "02",
      "dist": "24",
      "name": "泰来县",
      "level": 3
    },
    {
      "code": "230225",
      "prov": "23",
      "city": "02",
      "dist": "25",
      "name": "甘南县",
      "level": 3
    },
    {
      "code": "230227",
      "prov": "23",
      "city": "02",
      "dist": "27",
      "name": "富裕县",
      "level": 3
    },
    {
      "code": "230229",
      "prov": "23",
      "city": "02",
      "dist": "29",
      "name": "克山县",
      "level": 3
    },
    {
      "code": "230230",
      "prov": "23",
      "city": "02",
      "dist": "30",
      "name": "克东县",
      "level": 3
    },
    {
      "code": "230231",
      "prov": "23",
      "city": "02",
      "dist": "31",
      "name": "拜泉县",
      "level": 3
    },
    {
      "code": "230281",
      "prov": "23",
      "city": "02",
      "dist": "81",
      "name": "讷河市",
      "level": 3
    },
    {
      "code": "230300",
      "prov": "23",
      "city": "03",
      "dist": "00",
      "name": "鸡西市",
      "level": 2
    },
    {
      "code": "230301",
      "prov": "23",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230302",
      "prov": "23",
      "city": "03",
      "dist": "02",
      "name": "鸡冠区",
      "level": 3
    },
    {
      "code": "230303",
      "prov": "23",
      "city": "03",
      "dist": "03",
      "name": "恒山区",
      "level": 3
    },
    {
      "code": "230304",
      "prov": "23",
      "city": "03",
      "dist": "04",
      "name": "滴道区",
      "level": 3
    },
    {
      "code": "230305",
      "prov": "23",
      "city": "03",
      "dist": "05",
      "name": "梨树区",
      "level": 3
    },
    {
      "code": "230306",
      "prov": "23",
      "city": "03",
      "dist": "06",
      "name": "城子河区",
      "level": 3
    },
    {
      "code": "230307",
      "prov": "23",
      "city": "03",
      "dist": "07",
      "name": "麻山区",
      "level": 3
    },
    {
      "code": "230321",
      "prov": "23",
      "city": "03",
      "dist": "21",
      "name": "鸡东县",
      "level": 3
    },
    {
      "code": "230381",
      "prov": "23",
      "city": "03",
      "dist": "81",
      "name": "虎林市",
      "level": 3
    },
    {
      "code": "230382",
      "prov": "23",
      "city": "03",
      "dist": "82",
      "name": "密山市",
      "level": 3
    },
    {
      "code": "230400",
      "prov": "23",
      "city": "04",
      "dist": "00",
      "name": "鹤岗市",
      "level": 2
    },
    {
      "code": "230401",
      "prov": "23",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230402",
      "prov": "23",
      "city": "04",
      "dist": "02",
      "name": "向阳区",
      "level": 3
    },
    {
      "code": "230403",
      "prov": "23",
      "city": "04",
      "dist": "03",
      "name": "工农区",
      "level": 3
    },
    {
      "code": "230404",
      "prov": "23",
      "city": "04",
      "dist": "04",
      "name": "南山区",
      "level": 3
    },
    {
      "code": "230405",
      "prov": "23",
      "city": "04",
      "dist": "05",
      "name": "兴安区",
      "level": 3
    },
    {
      "code": "230406",
      "prov": "23",
      "city": "04",
      "dist": "06",
      "name": "东山区",
      "level": 3
    },
    {
      "code": "230407",
      "prov": "23",
      "city": "04",
      "dist": "07",
      "name": "兴山区",
      "level": 3
    },
    {
      "code": "230421",
      "prov": "23",
      "city": "04",
      "dist": "21",
      "name": "萝北县",
      "level": 3
    },
    {
      "code": "230422",
      "prov": "23",
      "city": "04",
      "dist": "22",
      "name": "绥滨县",
      "level": 3
    },
    {
      "code": "230500",
      "prov": "23",
      "city": "05",
      "dist": "00",
      "name": "双鸭山市",
      "level": 2
    },
    {
      "code": "230501",
      "prov": "23",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230502",
      "prov": "23",
      "city": "05",
      "dist": "02",
      "name": "尖山区",
      "level": 3
    },
    {
      "code": "230503",
      "prov": "23",
      "city": "05",
      "dist": "03",
      "name": "岭东区",
      "level": 3
    },
    {
      "code": "230505",
      "prov": "23",
      "city": "05",
      "dist": "05",
      "name": "四方台区",
      "level": 3
    },
    {
      "code": "230506",
      "prov": "23",
      "city": "05",
      "dist": "06",
      "name": "宝山区",
      "level": 3
    },
    {
      "code": "230521",
      "prov": "23",
      "city": "05",
      "dist": "21",
      "name": "集贤县",
      "level": 3
    },
    {
      "code": "230522",
      "prov": "23",
      "city": "05",
      "dist": "22",
      "name": "友谊县",
      "level": 3
    },
    {
      "code": "230523",
      "prov": "23",
      "city": "05",
      "dist": "23",
      "name": "宝清县",
      "level": 3
    },
    {
      "code": "230524",
      "prov": "23",
      "city": "05",
      "dist": "24",
      "name": "饶河县",
      "level": 3
    },
    {
      "code": "230600",
      "prov": "23",
      "city": "06",
      "dist": "00",
      "name": "大庆市",
      "level": 2
    },
    {
      "code": "230601",
      "prov": "23",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230602",
      "prov": "23",
      "city": "06",
      "dist": "02",
      "name": "萨尔图区",
      "level": 3
    },
    {
      "code": "230603",
      "prov": "23",
      "city": "06",
      "dist": "03",
      "name": "龙凤区",
      "level": 3
    },
    {
      "code": "230604",
      "prov": "23",
      "city": "06",
      "dist": "04",
      "name": "让胡路区",
      "level": 3
    },
    {
      "code": "230605",
      "prov": "23",
      "city": "06",
      "dist": "05",
      "name": "红岗区",
      "level": 3
    },
    {
      "code": "230606",
      "prov": "23",
      "city": "06",
      "dist": "06",
      "name": "大同区",
      "level": 3
    },
    {
      "code": "230621",
      "prov": "23",
      "city": "06",
      "dist": "21",
      "name": "肇州县",
      "level": 3
    },
    {
      "code": "230622",
      "prov": "23",
      "city": "06",
      "dist": "22",
      "name": "肇源县",
      "level": 3
    },
    {
      "code": "230623",
      "prov": "23",
      "city": "06",
      "dist": "23",
      "name": "林甸县",
      "level": 3
    },
    {
      "code": "230624",
      "prov": "23",
      "city": "06",
      "dist": "24",
      "name": "杜尔伯特蒙古族自治县",
      "level": 3
    },
    {
      "code": "230700",
      "prov": "23",
      "city": "07",
      "dist": "00",
      "name": "伊春市",
      "level": 2
    },
    {
      "code": "230701",
      "prov": "23",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230702",
      "prov": "23",
      "city": "07",
      "dist": "02",
      "name": "伊春区",
      "level": 3
    },
    {
      "code": "230703",
      "prov": "23",
      "city": "07",
      "dist": "03",
      "name": "南岔区",
      "level": 3
    },
    {
      "code": "230704",
      "prov": "23",
      "city": "07",
      "dist": "04",
      "name": "友好区",
      "level": 3
    },
    {
      "code": "230705",
      "prov": "23",
      "city": "07",
      "dist": "05",
      "name": "西林区",
      "level": 3
    },
    {
      "code": "230706",
      "prov": "23",
      "city": "07",
      "dist": "06",
      "name": "翠峦区",
      "level": 3
    },
    {
      "code": "230707",
      "prov": "23",
      "city": "07",
      "dist": "07",
      "name": "新青区",
      "level": 3
    },
    {
      "code": "230708",
      "prov": "23",
      "city": "07",
      "dist": "08",
      "name": "美溪区",
      "level": 3
    },
    {
      "code": "230709",
      "prov": "23",
      "city": "07",
      "dist": "09",
      "name": "金山屯区",
      "level": 3
    },
    {
      "code": "230710",
      "prov": "23",
      "city": "07",
      "dist": "10",
      "name": "五营区",
      "level": 3
    },
    {
      "code": "230711",
      "prov": "23",
      "city": "07",
      "dist": "11",
      "name": "乌马河区",
      "level": 3
    },
    {
      "code": "230712",
      "prov": "23",
      "city": "07",
      "dist": "12",
      "name": "汤旺河区",
      "level": 3
    },
    {
      "code": "230713",
      "prov": "23",
      "city": "07",
      "dist": "13",
      "name": "带岭区",
      "level": 3
    },
    {
      "code": "230714",
      "prov": "23",
      "city": "07",
      "dist": "14",
      "name": "乌伊岭区",
      "level": 3
    },
    {
      "code": "230715",
      "prov": "23",
      "city": "07",
      "dist": "15",
      "name": "红星区",
      "level": 3
    },
    {
      "code": "230716",
      "prov": "23",
      "city": "07",
      "dist": "16",
      "name": "上甘岭区",
      "level": 3
    },
    {
      "code": "230722",
      "prov": "23",
      "city": "07",
      "dist": "22",
      "name": "嘉荫县",
      "level": 3
    },
    {
      "code": "230781",
      "prov": "23",
      "city": "07",
      "dist": "81",
      "name": "铁力市",
      "level": 3
    },
    {
      "code": "230800",
      "prov": "23",
      "city": "08",
      "dist": "00",
      "name": "佳木斯市",
      "level": 2
    },
    {
      "code": "230801",
      "prov": "23",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230803",
      "prov": "23",
      "city": "08",
      "dist": "03",
      "name": "向阳区",
      "level": 3
    },
    {
      "code": "230804",
      "prov": "23",
      "city": "08",
      "dist": "04",
      "name": "前进区",
      "level": 3
    },
    {
      "code": "230805",
      "prov": "23",
      "city": "08",
      "dist": "05",
      "name": "东风区",
      "level": 3
    },
    {
      "code": "230811",
      "prov": "23",
      "city": "08",
      "dist": "11",
      "name": "郊区",
      "level": 3
    },
    {
      "code": "230822",
      "prov": "23",
      "city": "08",
      "dist": "22",
      "name": "桦南县",
      "level": 3
    },
    {
      "code": "230826",
      "prov": "23",
      "city": "08",
      "dist": "26",
      "name": "桦川县",
      "level": 3
    },
    {
      "code": "230828",
      "prov": "23",
      "city": "08",
      "dist": "28",
      "name": "汤原县",
      "level": 3
    },
    {
      "code": "230833",
      "prov": "23",
      "city": "08",
      "dist": "33",
      "name": "抚远县",
      "level": 3
    },
    {
      "code": "230881",
      "prov": "23",
      "city": "08",
      "dist": "81",
      "name": "同江市",
      "level": 3
    },
    {
      "code": "230882",
      "prov": "23",
      "city": "08",
      "dist": "82",
      "name": "富锦市",
      "level": 3
    },
    {
      "code": "230900",
      "prov": "23",
      "city": "09",
      "dist": "00",
      "name": "七台河市",
      "level": 2
    },
    {
      "code": "230901",
      "prov": "23",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "230902",
      "prov": "23",
      "city": "09",
      "dist": "02",
      "name": "新兴区",
      "level": 3
    },
    {
      "code": "230903",
      "prov": "23",
      "city": "09",
      "dist": "03",
      "name": "桃山区",
      "level": 3
    },
    {
      "code": "230904",
      "prov": "23",
      "city": "09",
      "dist": "04",
      "name": "茄子河区",
      "level": 3
    },
    {
      "code": "230921",
      "prov": "23",
      "city": "09",
      "dist": "21",
      "name": "勃利县",
      "level": 3
    },
    {
      "code": "231000",
      "prov": "23",
      "city": "10",
      "dist": "00",
      "name": "牡丹江市",
      "level": 2
    },
    {
      "code": "231001",
      "prov": "23",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "231002",
      "prov": "23",
      "city": "10",
      "dist": "02",
      "name": "东安区",
      "level": 3
    },
    {
      "code": "231003",
      "prov": "23",
      "city": "10",
      "dist": "03",
      "name": "阳明区",
      "level": 3
    },
    {
      "code": "231004",
      "prov": "23",
      "city": "10",
      "dist": "04",
      "name": "爱民区",
      "level": 3
    },
    {
      "code": "231005",
      "prov": "23",
      "city": "10",
      "dist": "05",
      "name": "西安区",
      "level": 3
    },
    {
      "code": "231024",
      "prov": "23",
      "city": "10",
      "dist": "24",
      "name": "东宁县",
      "level": 3
    },
    {
      "code": "231025",
      "prov": "23",
      "city": "10",
      "dist": "25",
      "name": "林口县",
      "level": 3
    },
    {
      "code": "231081",
      "prov": "23",
      "city": "10",
      "dist": "81",
      "name": "绥芬河市",
      "level": 3
    },
    {
      "code": "231083",
      "prov": "23",
      "city": "10",
      "dist": "83",
      "name": "海林市",
      "level": 3
    },
    {
      "code": "231084",
      "prov": "23",
      "city": "10",
      "dist": "84",
      "name": "宁安市",
      "level": 3
    },
    {
      "code": "231085",
      "prov": "23",
      "city": "10",
      "dist": "85",
      "name": "穆棱市",
      "level": 3
    },
    {
      "code": "231100",
      "prov": "23",
      "city": "11",
      "dist": "00",
      "name": "黑河市",
      "level": 2
    },
    {
      "code": "231101",
      "prov": "23",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "231102",
      "prov": "23",
      "city": "11",
      "dist": "02",
      "name": "爱辉区",
      "level": 3
    },
    {
      "code": "231121",
      "prov": "23",
      "city": "11",
      "dist": "21",
      "name": "嫩江县",
      "level": 3
    },
    {
      "code": "231123",
      "prov": "23",
      "city": "11",
      "dist": "23",
      "name": "逊克县",
      "level": 3
    },
    {
      "code": "231124",
      "prov": "23",
      "city": "11",
      "dist": "24",
      "name": "孙吴县",
      "level": 3
    },
    {
      "code": "231181",
      "prov": "23",
      "city": "11",
      "dist": "81",
      "name": "北安市",
      "level": 3
    },
    {
      "code": "231182",
      "prov": "23",
      "city": "11",
      "dist": "82",
      "name": "五大连池市",
      "level": 3
    },
    {
      "code": "231200",
      "prov": "23",
      "city": "12",
      "dist": "00",
      "name": "绥化市",
      "level": 2
    },
    {
      "code": "231201",
      "prov": "23",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "231202",
      "prov": "23",
      "city": "12",
      "dist": "02",
      "name": "北林区",
      "level": 3
    },
    {
      "code": "231221",
      "prov": "23",
      "city": "12",
      "dist": "21",
      "name": "望奎县",
      "level": 3
    },
    {
      "code": "231222",
      "prov": "23",
      "city": "12",
      "dist": "22",
      "name": "兰西县",
      "level": 3
    },
    {
      "code": "231223",
      "prov": "23",
      "city": "12",
      "dist": "23",
      "name": "青冈县",
      "level": 3
    },
    {
      "code": "231224",
      "prov": "23",
      "city": "12",
      "dist": "24",
      "name": "庆安县",
      "level": 3
    },
    {
      "code": "231225",
      "prov": "23",
      "city": "12",
      "dist": "25",
      "name": "明水县",
      "level": 3
    },
    {
      "code": "231226",
      "prov": "23",
      "city": "12",
      "dist": "26",
      "name": "绥棱县",
      "level": 3
    },
    {
      "code": "231281",
      "prov": "23",
      "city": "12",
      "dist": "81",
      "name": "安达市",
      "level": 3
    },
    {
      "code": "231282",
      "prov": "23",
      "city": "12",
      "dist": "82",
      "name": "肇东市",
      "level": 3
    },
    {
      "code": "231283",
      "prov": "23",
      "city": "12",
      "dist": "83",
      "name": "海伦市",
      "level": 3
    },
    {
      "code": "232700",
      "prov": "23",
      "city": "27",
      "dist": "00",
      "name": "大兴安岭地区",
      "level": 2
    },
    {
      "code": "232721",
      "prov": "23",
      "city": "27",
      "dist": "21",
      "name": "呼玛县",
      "level": 3
    },
    {
      "code": "232722",
      "prov": "23",
      "city": "27",
      "dist": "22",
      "name": "塔河县",
      "level": 3
    },
    {
      "code": "232723",
      "prov": "23",
      "city": "27",
      "dist": "23",
      "name": "漠河县",
      "level": 3
    },
    {
      "code": "310000",
      "prov": "31",
      "city": "00",
      "dist": "00",
      "name": "上海市",
      "level": 1
    },
    {
      "code": "310100",
      "prov": "31",
      "city": "01",
      "dist": "00",
      "name": "市辖区",
      "level": 2
    },
    {
      "code": "310101",
      "prov": "31",
      "city": "01",
      "dist": "01",
      "name": "黄浦区",
      "level": 3
    },
    {
      "code": "310104",
      "prov": "31",
      "city": "01",
      "dist": "04",
      "name": "徐汇区",
      "level": 3
    },
    {
      "code": "310105",
      "prov": "31",
      "city": "01",
      "dist": "05",
      "name": "长宁区",
      "level": 3
    },
    {
      "code": "310106",
      "prov": "31",
      "city": "01",
      "dist": "06",
      "name": "静安区",
      "level": 3
    },
    {
      "code": "310107",
      "prov": "31",
      "city": "01",
      "dist": "07",
      "name": "普陀区",
      "level": 3
    },
    {
      "code": "310108",
      "prov": "31",
      "city": "01",
      "dist": "08",
      "name": "闸北区",
      "level": 3
    },
    {
      "code": "310109",
      "prov": "31",
      "city": "01",
      "dist": "09",
      "name": "虹口区",
      "level": 3
    },
    {
      "code": "310110",
      "prov": "31",
      "city": "01",
      "dist": "10",
      "name": "杨浦区",
      "level": 3
    },
    {
      "code": "310112",
      "prov": "31",
      "city": "01",
      "dist": "12",
      "name": "闵行区",
      "level": 3
    },
    {
      "code": "310113",
      "prov": "31",
      "city": "01",
      "dist": "13",
      "name": "宝山区",
      "level": 3
    },
    {
      "code": "310114",
      "prov": "31",
      "city": "01",
      "dist": "14",
      "name": "嘉定区",
      "level": 3
    },
    {
      "code": "310115",
      "prov": "31",
      "city": "01",
      "dist": "15",
      "name": "浦东新区",
      "level": 3
    },
    {
      "code": "310116",
      "prov": "31",
      "city": "01",
      "dist": "16",
      "name": "金山区",
      "level": 3
    },
    {
      "code": "310117",
      "prov": "31",
      "city": "01",
      "dist": "17",
      "name": "松江区",
      "level": 3
    },
    {
      "code": "310118",
      "prov": "31",
      "city": "01",
      "dist": "18",
      "name": "青浦区",
      "level": 3
    },
    {
      "code": "310120",
      "prov": "31",
      "city": "01",
      "dist": "20",
      "name": "奉贤区",
      "level": 3
    },
    {
      "code": "310200",
      "prov": "31",
      "city": "02",
      "dist": "00",
      "name": "县",
      "level": 2
    },
    {
      "code": "310230",
      "prov": "31",
      "city": "02",
      "dist": "30",
      "name": "崇明县",
      "level": 3
    },
    {
      "code": "320000",
      "prov": "32",
      "city": "00",
      "dist": "00",
      "name": "江苏省",
      "level": 1
    },
    {
      "code": "320100",
      "prov": "32",
      "city": "01",
      "dist": "00",
      "name": "南京市",
      "level": 2
    },
    {
      "code": "320101",
      "prov": "32",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320102",
      "prov": "32",
      "city": "01",
      "dist": "02",
      "name": "玄武区",
      "level": 3
    },
    {
      "code": "320104",
      "prov": "32",
      "city": "01",
      "dist": "04",
      "name": "秦淮区",
      "level": 3
    },
    {
      "code": "320105",
      "prov": "32",
      "city": "01",
      "dist": "05",
      "name": "建邺区",
      "level": 3
    },
    {
      "code": "320106",
      "prov": "32",
      "city": "01",
      "dist": "06",
      "name": "鼓楼区",
      "level": 3
    },
    {
      "code": "320111",
      "prov": "32",
      "city": "01",
      "dist": "11",
      "name": "浦口区",
      "level": 3
    },
    {
      "code": "320113",
      "prov": "32",
      "city": "01",
      "dist": "13",
      "name": "栖霞区",
      "level": 3
    },
    {
      "code": "320114",
      "prov": "32",
      "city": "01",
      "dist": "14",
      "name": "雨花台区",
      "level": 3
    },
    {
      "code": "320115",
      "prov": "32",
      "city": "01",
      "dist": "15",
      "name": "江宁区",
      "level": 3
    },
    {
      "code": "320116",
      "prov": "32",
      "city": "01",
      "dist": "16",
      "name": "六合区",
      "level": 3
    },
    {
      "code": "320117",
      "prov": "32",
      "city": "01",
      "dist": "17",
      "name": "溧水区",
      "level": 3
    },
    {
      "code": "320118",
      "prov": "32",
      "city": "01",
      "dist": "18",
      "name": "高淳区",
      "level": 3
    },
    {
      "code": "320200",
      "prov": "32",
      "city": "02",
      "dist": "00",
      "name": "无锡市",
      "level": 2
    },
    {
      "code": "320201",
      "prov": "32",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320202",
      "prov": "32",
      "city": "02",
      "dist": "02",
      "name": "崇安区",
      "level": 3
    },
    {
      "code": "320203",
      "prov": "32",
      "city": "02",
      "dist": "03",
      "name": "南长区",
      "level": 3
    },
    {
      "code": "320204",
      "prov": "32",
      "city": "02",
      "dist": "04",
      "name": "北塘区",
      "level": 3
    },
    {
      "code": "320205",
      "prov": "32",
      "city": "02",
      "dist": "05",
      "name": "锡山区",
      "level": 3
    },
    {
      "code": "320206",
      "prov": "32",
      "city": "02",
      "dist": "06",
      "name": "惠山区",
      "level": 3
    },
    {
      "code": "320211",
      "prov": "32",
      "city": "02",
      "dist": "11",
      "name": "滨湖区",
      "level": 3
    },
    {
      "code": "320281",
      "prov": "32",
      "city": "02",
      "dist": "81",
      "name": "江阴市",
      "level": 3
    },
    {
      "code": "320282",
      "prov": "32",
      "city": "02",
      "dist": "82",
      "name": "宜兴市",
      "level": 3
    },
    {
      "code": "320300",
      "prov": "32",
      "city": "03",
      "dist": "00",
      "name": "徐州市",
      "level": 2
    },
    {
      "code": "320301",
      "prov": "32",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320302",
      "prov": "32",
      "city": "03",
      "dist": "02",
      "name": "鼓楼区",
      "level": 3
    },
    {
      "code": "320303",
      "prov": "32",
      "city": "03",
      "dist": "03",
      "name": "云龙区",
      "level": 3
    },
    {
      "code": "320305",
      "prov": "32",
      "city": "03",
      "dist": "05",
      "name": "贾汪区",
      "level": 3
    },
    {
      "code": "320311",
      "prov": "32",
      "city": "03",
      "dist": "11",
      "name": "泉山区",
      "level": 3
    },
    {
      "code": "320312",
      "prov": "32",
      "city": "03",
      "dist": "12",
      "name": "铜山区",
      "level": 3
    },
    {
      "code": "320321",
      "prov": "32",
      "city": "03",
      "dist": "21",
      "name": "丰县",
      "level": 3
    },
    {
      "code": "320322",
      "prov": "32",
      "city": "03",
      "dist": "22",
      "name": "沛县",
      "level": 3
    },
    {
      "code": "320324",
      "prov": "32",
      "city": "03",
      "dist": "24",
      "name": "睢宁县",
      "level": 3
    },
    {
      "code": "320381",
      "prov": "32",
      "city": "03",
      "dist": "81",
      "name": "新沂市",
      "level": 3
    },
    {
      "code": "320382",
      "prov": "32",
      "city": "03",
      "dist": "82",
      "name": "邳州市",
      "level": 3
    },
    {
      "code": "320400",
      "prov": "32",
      "city": "04",
      "dist": "00",
      "name": "常州市",
      "level": 2
    },
    {
      "code": "320401",
      "prov": "32",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320402",
      "prov": "32",
      "city": "04",
      "dist": "02",
      "name": "天宁区",
      "level": 3
    },
    {
      "code": "320404",
      "prov": "32",
      "city": "04",
      "dist": "04",
      "name": "钟楼区",
      "level": 3
    },
    {
      "code": "320405",
      "prov": "32",
      "city": "04",
      "dist": "05",
      "name": "戚墅堰区",
      "level": 3
    },
    {
      "code": "320411",
      "prov": "32",
      "city": "04",
      "dist": "11",
      "name": "新北区",
      "level": 3
    },
    {
      "code": "320412",
      "prov": "32",
      "city": "04",
      "dist": "12",
      "name": "武进区",
      "level": 3
    },
    {
      "code": "320481",
      "prov": "32",
      "city": "04",
      "dist": "81",
      "name": "溧阳市",
      "level": 3
    },
    {
      "code": "320482",
      "prov": "32",
      "city": "04",
      "dist": "82",
      "name": "金坛市",
      "level": 3
    },
    {
      "code": "320500",
      "prov": "32",
      "city": "05",
      "dist": "00",
      "name": "苏州市",
      "level": 2
    },
    {
      "code": "320501",
      "prov": "32",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320505",
      "prov": "32",
      "city": "05",
      "dist": "05",
      "name": "虎丘区",
      "level": 3
    },
    {
      "code": "320506",
      "prov": "32",
      "city": "05",
      "dist": "06",
      "name": "吴中区",
      "level": 3
    },
    {
      "code": "320507",
      "prov": "32",
      "city": "05",
      "dist": "07",
      "name": "相城区",
      "level": 3
    },
    {
      "code": "320508",
      "prov": "32",
      "city": "05",
      "dist": "08",
      "name": "姑苏区",
      "level": 3
    },
    {
      "code": "320509",
      "prov": "32",
      "city": "05",
      "dist": "09",
      "name": "吴江区",
      "level": 3
    },
    {
      "code": "320581",
      "prov": "32",
      "city": "05",
      "dist": "81",
      "name": "常熟市",
      "level": 3
    },
    {
      "code": "320582",
      "prov": "32",
      "city": "05",
      "dist": "82",
      "name": "张家港市",
      "level": 3
    },
    {
      "code": "320583",
      "prov": "32",
      "city": "05",
      "dist": "83",
      "name": "昆山市",
      "level": 3
    },
    {
      "code": "320585",
      "prov": "32",
      "city": "05",
      "dist": "85",
      "name": "太仓市",
      "level": 3
    },
    {
      "code": "320600",
      "prov": "32",
      "city": "06",
      "dist": "00",
      "name": "南通市",
      "level": 2
    },
    {
      "code": "320601",
      "prov": "32",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320602",
      "prov": "32",
      "city": "06",
      "dist": "02",
      "name": "崇川区",
      "level": 3
    },
    {
      "code": "320611",
      "prov": "32",
      "city": "06",
      "dist": "11",
      "name": "港闸区",
      "level": 3
    },
    {
      "code": "320612",
      "prov": "32",
      "city": "06",
      "dist": "12",
      "name": "通州区",
      "level": 3
    },
    {
      "code": "320621",
      "prov": "32",
      "city": "06",
      "dist": "21",
      "name": "海安县",
      "level": 3
    },
    {
      "code": "320623",
      "prov": "32",
      "city": "06",
      "dist": "23",
      "name": "如东县",
      "level": 3
    },
    {
      "code": "320681",
      "prov": "32",
      "city": "06",
      "dist": "81",
      "name": "启东市",
      "level": 3
    },
    {
      "code": "320682",
      "prov": "32",
      "city": "06",
      "dist": "82",
      "name": "如皋市",
      "level": 3
    },
    {
      "code": "320684",
      "prov": "32",
      "city": "06",
      "dist": "84",
      "name": "海门市",
      "level": 3
    },
    {
      "code": "320700",
      "prov": "32",
      "city": "07",
      "dist": "00",
      "name": "连云港市",
      "level": 2
    },
    {
      "code": "320701",
      "prov": "32",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320703",
      "prov": "32",
      "city": "07",
      "dist": "03",
      "name": "连云区",
      "level": 3
    },
    {
      "code": "320706",
      "prov": "32",
      "city": "07",
      "dist": "06",
      "name": "海州区",
      "level": 3
    },
    {
      "code": "320707",
      "prov": "32",
      "city": "07",
      "dist": "07",
      "name": "赣榆区",
      "level": 3
    },
    {
      "code": "320722",
      "prov": "32",
      "city": "07",
      "dist": "22",
      "name": "东海县",
      "level": 3
    },
    {
      "code": "320723",
      "prov": "32",
      "city": "07",
      "dist": "23",
      "name": "灌云县",
      "level": 3
    },
    {
      "code": "320724",
      "prov": "32",
      "city": "07",
      "dist": "24",
      "name": "灌南县",
      "level": 3
    },
    {
      "code": "320800",
      "prov": "32",
      "city": "08",
      "dist": "00",
      "name": "淮安市",
      "level": 2
    },
    {
      "code": "320801",
      "prov": "32",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320802",
      "prov": "32",
      "city": "08",
      "dist": "02",
      "name": "清河区",
      "level": 3
    },
    {
      "code": "320803",
      "prov": "32",
      "city": "08",
      "dist": "03",
      "name": "淮安区",
      "level": 3
    },
    {
      "code": "320804",
      "prov": "32",
      "city": "08",
      "dist": "04",
      "name": "淮阴区",
      "level": 3
    },
    {
      "code": "320811",
      "prov": "32",
      "city": "08",
      "dist": "11",
      "name": "清浦区",
      "level": 3
    },
    {
      "code": "320826",
      "prov": "32",
      "city": "08",
      "dist": "26",
      "name": "涟水县",
      "level": 3
    },
    {
      "code": "320829",
      "prov": "32",
      "city": "08",
      "dist": "29",
      "name": "洪泽县",
      "level": 3
    },
    {
      "code": "320830",
      "prov": "32",
      "city": "08",
      "dist": "30",
      "name": "盱眙县",
      "level": 3
    },
    {
      "code": "320831",
      "prov": "32",
      "city": "08",
      "dist": "31",
      "name": "金湖县",
      "level": 3
    },
    {
      "code": "320900",
      "prov": "32",
      "city": "09",
      "dist": "00",
      "name": "盐城市",
      "level": 2
    },
    {
      "code": "320901",
      "prov": "32",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "320902",
      "prov": "32",
      "city": "09",
      "dist": "02",
      "name": "亭湖区",
      "level": 3
    },
    {
      "code": "320903",
      "prov": "32",
      "city": "09",
      "dist": "03",
      "name": "盐都区",
      "level": 3
    },
    {
      "code": "320921",
      "prov": "32",
      "city": "09",
      "dist": "21",
      "name": "响水县",
      "level": 3
    },
    {
      "code": "320922",
      "prov": "32",
      "city": "09",
      "dist": "22",
      "name": "滨海县",
      "level": 3
    },
    {
      "code": "320923",
      "prov": "32",
      "city": "09",
      "dist": "23",
      "name": "阜宁县",
      "level": 3
    },
    {
      "code": "320924",
      "prov": "32",
      "city": "09",
      "dist": "24",
      "name": "射阳县",
      "level": 3
    },
    {
      "code": "320925",
      "prov": "32",
      "city": "09",
      "dist": "25",
      "name": "建湖县",
      "level": 3
    },
    {
      "code": "320981",
      "prov": "32",
      "city": "09",
      "dist": "81",
      "name": "东台市",
      "level": 3
    },
    {
      "code": "320982",
      "prov": "32",
      "city": "09",
      "dist": "82",
      "name": "大丰市",
      "level": 3
    },
    {
      "code": "321000",
      "prov": "32",
      "city": "10",
      "dist": "00",
      "name": "扬州市",
      "level": 2
    },
    {
      "code": "321001",
      "prov": "32",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "321002",
      "prov": "32",
      "city": "10",
      "dist": "02",
      "name": "广陵区",
      "level": 3
    },
    {
      "code": "321003",
      "prov": "32",
      "city": "10",
      "dist": "03",
      "name": "邗江区",
      "level": 3
    },
    {
      "code": "321012",
      "prov": "32",
      "city": "10",
      "dist": "12",
      "name": "江都区",
      "level": 3
    },
    {
      "code": "321023",
      "prov": "32",
      "city": "10",
      "dist": "23",
      "name": "宝应县",
      "level": 3
    },
    {
      "code": "321081",
      "prov": "32",
      "city": "10",
      "dist": "81",
      "name": "仪征市",
      "level": 3
    },
    {
      "code": "321084",
      "prov": "32",
      "city": "10",
      "dist": "84",
      "name": "高邮市",
      "level": 3
    },
    {
      "code": "321100",
      "prov": "32",
      "city": "11",
      "dist": "00",
      "name": "镇江市",
      "level": 2
    },
    {
      "code": "321101",
      "prov": "32",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "321102",
      "prov": "32",
      "city": "11",
      "dist": "02",
      "name": "京口区",
      "level": 3
    },
    {
      "code": "321111",
      "prov": "32",
      "city": "11",
      "dist": "11",
      "name": "润州区",
      "level": 3
    },
    {
      "code": "321112",
      "prov": "32",
      "city": "11",
      "dist": "12",
      "name": "丹徒区",
      "level": 3
    },
    {
      "code": "321181",
      "prov": "32",
      "city": "11",
      "dist": "81",
      "name": "丹阳市",
      "level": 3
    },
    {
      "code": "321182",
      "prov": "32",
      "city": "11",
      "dist": "82",
      "name": "扬中市",
      "level": 3
    },
    {
      "code": "321183",
      "prov": "32",
      "city": "11",
      "dist": "83",
      "name": "句容市",
      "level": 3
    },
    {
      "code": "321200",
      "prov": "32",
      "city": "12",
      "dist": "00",
      "name": "泰州市",
      "level": 2
    },
    {
      "code": "321201",
      "prov": "32",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "321202",
      "prov": "32",
      "city": "12",
      "dist": "02",
      "name": "海陵区",
      "level": 3
    },
    {
      "code": "321203",
      "prov": "32",
      "city": "12",
      "dist": "03",
      "name": "高港区",
      "level": 3
    },
    {
      "code": "321204",
      "prov": "32",
      "city": "12",
      "dist": "04",
      "name": "姜堰区",
      "level": 3
    },
    {
      "code": "321281",
      "prov": "32",
      "city": "12",
      "dist": "81",
      "name": "兴化市",
      "level": 3
    },
    {
      "code": "321282",
      "prov": "32",
      "city": "12",
      "dist": "82",
      "name": "靖江市",
      "level": 3
    },
    {
      "code": "321283",
      "prov": "32",
      "city": "12",
      "dist": "83",
      "name": "泰兴市",
      "level": 3
    },
    {
      "code": "321300",
      "prov": "32",
      "city": "13",
      "dist": "00",
      "name": "宿迁市",
      "level": 2
    },
    {
      "code": "321301",
      "prov": "32",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "321302",
      "prov": "32",
      "city": "13",
      "dist": "02",
      "name": "宿城区",
      "level": 3
    },
    {
      "code": "321311",
      "prov": "32",
      "city": "13",
      "dist": "11",
      "name": "宿豫区",
      "level": 3
    },
    {
      "code": "321322",
      "prov": "32",
      "city": "13",
      "dist": "22",
      "name": "沭阳县",
      "level": 3
    },
    {
      "code": "321323",
      "prov": "32",
      "city": "13",
      "dist": "23",
      "name": "泗阳县",
      "level": 3
    },
    {
      "code": "321324",
      "prov": "32",
      "city": "13",
      "dist": "24",
      "name": "泗洪县",
      "level": 3
    },
    {
      "code": "330000",
      "prov": "33",
      "city": "00",
      "dist": "00",
      "name": "浙江省",
      "level": 1
    },
    {
      "code": "330100",
      "prov": "33",
      "city": "01",
      "dist": "00",
      "name": "杭州市",
      "level": 2
    },
    {
      "code": "330101",
      "prov": "33",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330102",
      "prov": "33",
      "city": "01",
      "dist": "02",
      "name": "上城区",
      "level": 3
    },
    {
      "code": "330103",
      "prov": "33",
      "city": "01",
      "dist": "03",
      "name": "下城区",
      "level": 3
    },
    {
      "code": "330104",
      "prov": "33",
      "city": "01",
      "dist": "04",
      "name": "江干区",
      "level": 3
    },
    {
      "code": "330105",
      "prov": "33",
      "city": "01",
      "dist": "05",
      "name": "拱墅区",
      "level": 3
    },
    {
      "code": "330106",
      "prov": "33",
      "city": "01",
      "dist": "06",
      "name": "西湖区",
      "level": 3
    },
    {
      "code": "330108",
      "prov": "33",
      "city": "01",
      "dist": "08",
      "name": "滨江区",
      "level": 3
    },
    {
      "code": "330109",
      "prov": "33",
      "city": "01",
      "dist": "09",
      "name": "萧山区",
      "level": 3
    },
    {
      "code": "330110",
      "prov": "33",
      "city": "01",
      "dist": "10",
      "name": "余杭区",
      "level": 3
    },
    {
      "code": "330122",
      "prov": "33",
      "city": "01",
      "dist": "22",
      "name": "桐庐县",
      "level": 3
    },
    {
      "code": "330127",
      "prov": "33",
      "city": "01",
      "dist": "27",
      "name": "淳安县",
      "level": 3
    },
    {
      "code": "330182",
      "prov": "33",
      "city": "01",
      "dist": "82",
      "name": "建德市",
      "level": 3
    },
    {
      "code": "330183",
      "prov": "33",
      "city": "01",
      "dist": "83",
      "name": "富阳市",
      "level": 3
    },
    {
      "code": "330185",
      "prov": "33",
      "city": "01",
      "dist": "85",
      "name": "临安市",
      "level": 3
    },
    {
      "code": "330200",
      "prov": "33",
      "city": "02",
      "dist": "00",
      "name": "宁波市",
      "level": 2
    },
    {
      "code": "330201",
      "prov": "33",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330203",
      "prov": "33",
      "city": "02",
      "dist": "03",
      "name": "海曙区",
      "level": 3
    },
    {
      "code": "330204",
      "prov": "33",
      "city": "02",
      "dist": "04",
      "name": "江东区",
      "level": 3
    },
    {
      "code": "330205",
      "prov": "33",
      "city": "02",
      "dist": "05",
      "name": "江北区",
      "level": 3
    },
    {
      "code": "330206",
      "prov": "33",
      "city": "02",
      "dist": "06",
      "name": "北仑区",
      "level": 3
    },
    {
      "code": "330211",
      "prov": "33",
      "city": "02",
      "dist": "11",
      "name": "镇海区",
      "level": 3
    },
    {
      "code": "330212",
      "prov": "33",
      "city": "02",
      "dist": "12",
      "name": "鄞州区",
      "level": 3
    },
    {
      "code": "330225",
      "prov": "33",
      "city": "02",
      "dist": "25",
      "name": "象山县",
      "level": 3
    },
    {
      "code": "330226",
      "prov": "33",
      "city": "02",
      "dist": "26",
      "name": "宁海县",
      "level": 3
    },
    {
      "code": "330281",
      "prov": "33",
      "city": "02",
      "dist": "81",
      "name": "余姚市",
      "level": 3
    },
    {
      "code": "330282",
      "prov": "33",
      "city": "02",
      "dist": "82",
      "name": "慈溪市",
      "level": 3
    },
    {
      "code": "330283",
      "prov": "33",
      "city": "02",
      "dist": "83",
      "name": "奉化市",
      "level": 3
    },
    {
      "code": "330300",
      "prov": "33",
      "city": "03",
      "dist": "00",
      "name": "温州市",
      "level": 2
    },
    {
      "code": "330301",
      "prov": "33",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330302",
      "prov": "33",
      "city": "03",
      "dist": "02",
      "name": "鹿城区",
      "level": 3
    },
    {
      "code": "330303",
      "prov": "33",
      "city": "03",
      "dist": "03",
      "name": "龙湾区",
      "level": 3
    },
    {
      "code": "330304",
      "prov": "33",
      "city": "03",
      "dist": "04",
      "name": "瓯海区",
      "level": 3
    },
    {
      "code": "330322",
      "prov": "33",
      "city": "03",
      "dist": "22",
      "name": "洞头县",
      "level": 3
    },
    {
      "code": "330324",
      "prov": "33",
      "city": "03",
      "dist": "24",
      "name": "永嘉县",
      "level": 3
    },
    {
      "code": "330326",
      "prov": "33",
      "city": "03",
      "dist": "26",
      "name": "平阳县",
      "level": 3
    },
    {
      "code": "330327",
      "prov": "33",
      "city": "03",
      "dist": "27",
      "name": "苍南县",
      "level": 3
    },
    {
      "code": "330328",
      "prov": "33",
      "city": "03",
      "dist": "28",
      "name": "文成县",
      "level": 3
    },
    {
      "code": "330329",
      "prov": "33",
      "city": "03",
      "dist": "29",
      "name": "泰顺县",
      "level": 3
    },
    {
      "code": "330381",
      "prov": "33",
      "city": "03",
      "dist": "81",
      "name": "瑞安市",
      "level": 3
    },
    {
      "code": "330382",
      "prov": "33",
      "city": "03",
      "dist": "82",
      "name": "乐清市",
      "level": 3
    },
    {
      "code": "330400",
      "prov": "33",
      "city": "04",
      "dist": "00",
      "name": "嘉兴市",
      "level": 2
    },
    {
      "code": "330401",
      "prov": "33",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330402",
      "prov": "33",
      "city": "04",
      "dist": "02",
      "name": "南湖区",
      "level": 3
    },
    {
      "code": "330411",
      "prov": "33",
      "city": "04",
      "dist": "11",
      "name": "秀洲区",
      "level": 3
    },
    {
      "code": "330421",
      "prov": "33",
      "city": "04",
      "dist": "21",
      "name": "嘉善县",
      "level": 3
    },
    {
      "code": "330424",
      "prov": "33",
      "city": "04",
      "dist": "24",
      "name": "海盐县",
      "level": 3
    },
    {
      "code": "330481",
      "prov": "33",
      "city": "04",
      "dist": "81",
      "name": "海宁市",
      "level": 3
    },
    {
      "code": "330482",
      "prov": "33",
      "city": "04",
      "dist": "82",
      "name": "平湖市",
      "level": 3
    },
    {
      "code": "330483",
      "prov": "33",
      "city": "04",
      "dist": "83",
      "name": "桐乡市",
      "level": 3
    },
    {
      "code": "330500",
      "prov": "33",
      "city": "05",
      "dist": "00",
      "name": "湖州市",
      "level": 2
    },
    {
      "code": "330501",
      "prov": "33",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330502",
      "prov": "33",
      "city": "05",
      "dist": "02",
      "name": "吴兴区",
      "level": 3
    },
    {
      "code": "330503",
      "prov": "33",
      "city": "05",
      "dist": "03",
      "name": "南浔区",
      "level": 3
    },
    {
      "code": "330521",
      "prov": "33",
      "city": "05",
      "dist": "21",
      "name": "德清县",
      "level": 3
    },
    {
      "code": "330522",
      "prov": "33",
      "city": "05",
      "dist": "22",
      "name": "长兴县",
      "level": 3
    },
    {
      "code": "330523",
      "prov": "33",
      "city": "05",
      "dist": "23",
      "name": "安吉县",
      "level": 3
    },
    {
      "code": "330600",
      "prov": "33",
      "city": "06",
      "dist": "00",
      "name": "绍兴市",
      "level": 2
    },
    {
      "code": "330601",
      "prov": "33",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330602",
      "prov": "33",
      "city": "06",
      "dist": "02",
      "name": "越城区",
      "level": 3
    },
    {
      "code": "330603",
      "prov": "33",
      "city": "06",
      "dist": "03",
      "name": "柯桥区",
      "level": 3
    },
    {
      "code": "330604",
      "prov": "33",
      "city": "06",
      "dist": "04",
      "name": "上虞区",
      "level": 3
    },
    {
      "code": "330624",
      "prov": "33",
      "city": "06",
      "dist": "24",
      "name": "新昌县",
      "level": 3
    },
    {
      "code": "330681",
      "prov": "33",
      "city": "06",
      "dist": "81",
      "name": "诸暨市",
      "level": 3
    },
    {
      "code": "330683",
      "prov": "33",
      "city": "06",
      "dist": "83",
      "name": "嵊州市",
      "level": 3
    },
    {
      "code": "330700",
      "prov": "33",
      "city": "07",
      "dist": "00",
      "name": "金华市",
      "level": 2
    },
    {
      "code": "330701",
      "prov": "33",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330702",
      "prov": "33",
      "city": "07",
      "dist": "02",
      "name": "婺城区",
      "level": 3
    },
    {
      "code": "330703",
      "prov": "33",
      "city": "07",
      "dist": "03",
      "name": "金东区",
      "level": 3
    },
    {
      "code": "330723",
      "prov": "33",
      "city": "07",
      "dist": "23",
      "name": "武义县",
      "level": 3
    },
    {
      "code": "330726",
      "prov": "33",
      "city": "07",
      "dist": "26",
      "name": "浦江县",
      "level": 3
    },
    {
      "code": "330727",
      "prov": "33",
      "city": "07",
      "dist": "27",
      "name": "磐安县",
      "level": 3
    },
    {
      "code": "330781",
      "prov": "33",
      "city": "07",
      "dist": "81",
      "name": "兰溪市",
      "level": 3
    },
    {
      "code": "330782",
      "prov": "33",
      "city": "07",
      "dist": "82",
      "name": "义乌市",
      "level": 3
    },
    {
      "code": "330783",
      "prov": "33",
      "city": "07",
      "dist": "83",
      "name": "东阳市",
      "level": 3
    },
    {
      "code": "330784",
      "prov": "33",
      "city": "07",
      "dist": "84",
      "name": "永康市",
      "level": 3
    },
    {
      "code": "330800",
      "prov": "33",
      "city": "08",
      "dist": "00",
      "name": "衢州市",
      "level": 2
    },
    {
      "code": "330801",
      "prov": "33",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330802",
      "prov": "33",
      "city": "08",
      "dist": "02",
      "name": "柯城区",
      "level": 3
    },
    {
      "code": "330803",
      "prov": "33",
      "city": "08",
      "dist": "03",
      "name": "衢江区",
      "level": 3
    },
    {
      "code": "330822",
      "prov": "33",
      "city": "08",
      "dist": "22",
      "name": "常山县",
      "level": 3
    },
    {
      "code": "330824",
      "prov": "33",
      "city": "08",
      "dist": "24",
      "name": "开化县",
      "level": 3
    },
    {
      "code": "330825",
      "prov": "33",
      "city": "08",
      "dist": "25",
      "name": "龙游县",
      "level": 3
    },
    {
      "code": "330881",
      "prov": "33",
      "city": "08",
      "dist": "81",
      "name": "江山市",
      "level": 3
    },
    {
      "code": "330900",
      "prov": "33",
      "city": "09",
      "dist": "00",
      "name": "舟山市",
      "level": 2
    },
    {
      "code": "330901",
      "prov": "33",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "330902",
      "prov": "33",
      "city": "09",
      "dist": "02",
      "name": "定海区",
      "level": 3
    },
    {
      "code": "330903",
      "prov": "33",
      "city": "09",
      "dist": "03",
      "name": "普陀区",
      "level": 3
    },
    {
      "code": "330921",
      "prov": "33",
      "city": "09",
      "dist": "21",
      "name": "岱山县",
      "level": 3
    },
    {
      "code": "330922",
      "prov": "33",
      "city": "09",
      "dist": "22",
      "name": "嵊泗县",
      "level": 3
    },
    {
      "code": "331000",
      "prov": "33",
      "city": "10",
      "dist": "00",
      "name": "台州市",
      "level": 2
    },
    {
      "code": "331001",
      "prov": "33",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "331002",
      "prov": "33",
      "city": "10",
      "dist": "02",
      "name": "椒江区",
      "level": 3
    },
    {
      "code": "331003",
      "prov": "33",
      "city": "10",
      "dist": "03",
      "name": "黄岩区",
      "level": 3
    },
    {
      "code": "331004",
      "prov": "33",
      "city": "10",
      "dist": "04",
      "name": "路桥区",
      "level": 3
    },
    {
      "code": "331021",
      "prov": "33",
      "city": "10",
      "dist": "21",
      "name": "玉环县",
      "level": 3
    },
    {
      "code": "331022",
      "prov": "33",
      "city": "10",
      "dist": "22",
      "name": "三门县",
      "level": 3
    },
    {
      "code": "331023",
      "prov": "33",
      "city": "10",
      "dist": "23",
      "name": "天台县",
      "level": 3
    },
    {
      "code": "331024",
      "prov": "33",
      "city": "10",
      "dist": "24",
      "name": "仙居县",
      "level": 3
    },
    {
      "code": "331081",
      "prov": "33",
      "city": "10",
      "dist": "81",
      "name": "温岭市",
      "level": 3
    },
    {
      "code": "331082",
      "prov": "33",
      "city": "10",
      "dist": "82",
      "name": "临海市",
      "level": 3
    },
    {
      "code": "331100",
      "prov": "33",
      "city": "11",
      "dist": "00",
      "name": "丽水市",
      "level": 2
    },
    {
      "code": "331101",
      "prov": "33",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "331102",
      "prov": "33",
      "city": "11",
      "dist": "02",
      "name": "莲都区",
      "level": 3
    },
    {
      "code": "331121",
      "prov": "33",
      "city": "11",
      "dist": "21",
      "name": "青田县",
      "level": 3
    },
    {
      "code": "331122",
      "prov": "33",
      "city": "11",
      "dist": "22",
      "name": "缙云县",
      "level": 3
    },
    {
      "code": "331123",
      "prov": "33",
      "city": "11",
      "dist": "23",
      "name": "遂昌县",
      "level": 3
    },
    {
      "code": "331124",
      "prov": "33",
      "city": "11",
      "dist": "24",
      "name": "松阳县",
      "level": 3
    },
    {
      "code": "331125",
      "prov": "33",
      "city": "11",
      "dist": "25",
      "name": "云和县",
      "level": 3
    },
    {
      "code": "331126",
      "prov": "33",
      "city": "11",
      "dist": "26",
      "name": "庆元县",
      "level": 3
    },
    {
      "code": "331127",
      "prov": "33",
      "city": "11",
      "dist": "27",
      "name": "景宁畲族自治县",
      "level": 3
    },
    {
      "code": "331181",
      "prov": "33",
      "city": "11",
      "dist": "81",
      "name": "龙泉市",
      "level": 3
    },
    {
      "code": "340000",
      "prov": "34",
      "city": "00",
      "dist": "00",
      "name": "安徽省",
      "level": 1
    },
    {
      "code": "340100",
      "prov": "34",
      "city": "01",
      "dist": "00",
      "name": "合肥市",
      "level": 2
    },
    {
      "code": "340101",
      "prov": "34",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340102",
      "prov": "34",
      "city": "01",
      "dist": "02",
      "name": "瑶海区",
      "level": 3
    },
    {
      "code": "340103",
      "prov": "34",
      "city": "01",
      "dist": "03",
      "name": "庐阳区",
      "level": 3
    },
    {
      "code": "340104",
      "prov": "34",
      "city": "01",
      "dist": "04",
      "name": "蜀山区",
      "level": 3
    },
    {
      "code": "340111",
      "prov": "34",
      "city": "01",
      "dist": "11",
      "name": "包河区",
      "level": 3
    },
    {
      "code": "340121",
      "prov": "34",
      "city": "01",
      "dist": "21",
      "name": "长丰县",
      "level": 3
    },
    {
      "code": "340122",
      "prov": "34",
      "city": "01",
      "dist": "22",
      "name": "肥东县",
      "level": 3
    },
    {
      "code": "340123",
      "prov": "34",
      "city": "01",
      "dist": "23",
      "name": "肥西县",
      "level": 3
    },
    {
      "code": "340124",
      "prov": "34",
      "city": "01",
      "dist": "24",
      "name": "庐江县",
      "level": 3
    },
    {
      "code": "340181",
      "prov": "34",
      "city": "01",
      "dist": "81",
      "name": "巢湖市",
      "level": 3
    },
    {
      "code": "340200",
      "prov": "34",
      "city": "02",
      "dist": "00",
      "name": "芜湖市",
      "level": 2
    },
    {
      "code": "340201",
      "prov": "34",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340202",
      "prov": "34",
      "city": "02",
      "dist": "02",
      "name": "镜湖区",
      "level": 3
    },
    {
      "code": "340203",
      "prov": "34",
      "city": "02",
      "dist": "03",
      "name": "弋江区",
      "level": 3
    },
    {
      "code": "340207",
      "prov": "34",
      "city": "02",
      "dist": "07",
      "name": "鸠江区",
      "level": 3
    },
    {
      "code": "340208",
      "prov": "34",
      "city": "02",
      "dist": "08",
      "name": "三山区",
      "level": 3
    },
    {
      "code": "340221",
      "prov": "34",
      "city": "02",
      "dist": "21",
      "name": "芜湖县",
      "level": 3
    },
    {
      "code": "340222",
      "prov": "34",
      "city": "02",
      "dist": "22",
      "name": "繁昌县",
      "level": 3
    },
    {
      "code": "340223",
      "prov": "34",
      "city": "02",
      "dist": "23",
      "name": "南陵县",
      "level": 3
    },
    {
      "code": "340225",
      "prov": "34",
      "city": "02",
      "dist": "25",
      "name": "无为县",
      "level": 3
    },
    {
      "code": "340300",
      "prov": "34",
      "city": "03",
      "dist": "00",
      "name": "蚌埠市",
      "level": 2
    },
    {
      "code": "340301",
      "prov": "34",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340302",
      "prov": "34",
      "city": "03",
      "dist": "02",
      "name": "龙子湖区",
      "level": 3
    },
    {
      "code": "340303",
      "prov": "34",
      "city": "03",
      "dist": "03",
      "name": "蚌山区",
      "level": 3
    },
    {
      "code": "340304",
      "prov": "34",
      "city": "03",
      "dist": "04",
      "name": "禹会区",
      "level": 3
    },
    {
      "code": "340311",
      "prov": "34",
      "city": "03",
      "dist": "11",
      "name": "淮上区",
      "level": 3
    },
    {
      "code": "340321",
      "prov": "34",
      "city": "03",
      "dist": "21",
      "name": "怀远县",
      "level": 3
    },
    {
      "code": "340322",
      "prov": "34",
      "city": "03",
      "dist": "22",
      "name": "五河县",
      "level": 3
    },
    {
      "code": "340323",
      "prov": "34",
      "city": "03",
      "dist": "23",
      "name": "固镇县",
      "level": 3
    },
    {
      "code": "340400",
      "prov": "34",
      "city": "04",
      "dist": "00",
      "name": "淮南市",
      "level": 2
    },
    {
      "code": "340401",
      "prov": "34",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340402",
      "prov": "34",
      "city": "04",
      "dist": "02",
      "name": "大通区",
      "level": 3
    },
    {
      "code": "340403",
      "prov": "34",
      "city": "04",
      "dist": "03",
      "name": "田家庵区",
      "level": 3
    },
    {
      "code": "340404",
      "prov": "34",
      "city": "04",
      "dist": "04",
      "name": "谢家集区",
      "level": 3
    },
    {
      "code": "340405",
      "prov": "34",
      "city": "04",
      "dist": "05",
      "name": "八公山区",
      "level": 3
    },
    {
      "code": "340406",
      "prov": "34",
      "city": "04",
      "dist": "06",
      "name": "潘集区",
      "level": 3
    },
    {
      "code": "340421",
      "prov": "34",
      "city": "04",
      "dist": "21",
      "name": "凤台县",
      "level": 3
    },
    {
      "code": "340500",
      "prov": "34",
      "city": "05",
      "dist": "00",
      "name": "马鞍山市",
      "level": 2
    },
    {
      "code": "340501",
      "prov": "34",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340503",
      "prov": "34",
      "city": "05",
      "dist": "03",
      "name": "花山区",
      "level": 3
    },
    {
      "code": "340504",
      "prov": "34",
      "city": "05",
      "dist": "04",
      "name": "雨山区",
      "level": 3
    },
    {
      "code": "340506",
      "prov": "34",
      "city": "05",
      "dist": "06",
      "name": "博望区",
      "level": 3
    },
    {
      "code": "340521",
      "prov": "34",
      "city": "05",
      "dist": "21",
      "name": "当涂县",
      "level": 3
    },
    {
      "code": "340522",
      "prov": "34",
      "city": "05",
      "dist": "22",
      "name": "含山县",
      "level": 3
    },
    {
      "code": "340523",
      "prov": "34",
      "city": "05",
      "dist": "23",
      "name": "和县",
      "level": 3
    },
    {
      "code": "340600",
      "prov": "34",
      "city": "06",
      "dist": "00",
      "name": "淮北市",
      "level": 2
    },
    {
      "code": "340601",
      "prov": "34",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340602",
      "prov": "34",
      "city": "06",
      "dist": "02",
      "name": "杜集区",
      "level": 3
    },
    {
      "code": "340603",
      "prov": "34",
      "city": "06",
      "dist": "03",
      "name": "相山区",
      "level": 3
    },
    {
      "code": "340604",
      "prov": "34",
      "city": "06",
      "dist": "04",
      "name": "烈山区",
      "level": 3
    },
    {
      "code": "340621",
      "prov": "34",
      "city": "06",
      "dist": "21",
      "name": "濉溪县",
      "level": 3
    },
    {
      "code": "340700",
      "prov": "34",
      "city": "07",
      "dist": "00",
      "name": "铜陵市",
      "level": 2
    },
    {
      "code": "340701",
      "prov": "34",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340702",
      "prov": "34",
      "city": "07",
      "dist": "02",
      "name": "铜官山区",
      "level": 3
    },
    {
      "code": "340703",
      "prov": "34",
      "city": "07",
      "dist": "03",
      "name": "狮子山区",
      "level": 3
    },
    {
      "code": "340711",
      "prov": "34",
      "city": "07",
      "dist": "11",
      "name": "郊区",
      "level": 3
    },
    {
      "code": "340721",
      "prov": "34",
      "city": "07",
      "dist": "21",
      "name": "铜陵县",
      "level": 3
    },
    {
      "code": "340800",
      "prov": "34",
      "city": "08",
      "dist": "00",
      "name": "安庆市",
      "level": 2
    },
    {
      "code": "340801",
      "prov": "34",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "340802",
      "prov": "34",
      "city": "08",
      "dist": "02",
      "name": "迎江区",
      "level": 3
    },
    {
      "code": "340803",
      "prov": "34",
      "city": "08",
      "dist": "03",
      "name": "大观区",
      "level": 3
    },
    {
      "code": "340811",
      "prov": "34",
      "city": "08",
      "dist": "11",
      "name": "宜秀区",
      "level": 3
    },
    {
      "code": "340822",
      "prov": "34",
      "city": "08",
      "dist": "22",
      "name": "怀宁县",
      "level": 3
    },
    {
      "code": "340823",
      "prov": "34",
      "city": "08",
      "dist": "23",
      "name": "枞阳县",
      "level": 3
    },
    {
      "code": "340824",
      "prov": "34",
      "city": "08",
      "dist": "24",
      "name": "潜山县",
      "level": 3
    },
    {
      "code": "340825",
      "prov": "34",
      "city": "08",
      "dist": "25",
      "name": "太湖县",
      "level": 3
    },
    {
      "code": "340826",
      "prov": "34",
      "city": "08",
      "dist": "26",
      "name": "宿松县",
      "level": 3
    },
    {
      "code": "340827",
      "prov": "34",
      "city": "08",
      "dist": "27",
      "name": "望江县",
      "level": 3
    },
    {
      "code": "340828",
      "prov": "34",
      "city": "08",
      "dist": "28",
      "name": "岳西县",
      "level": 3
    },
    {
      "code": "340881",
      "prov": "34",
      "city": "08",
      "dist": "81",
      "name": "桐城市",
      "level": 3
    },
    {
      "code": "341000",
      "prov": "34",
      "city": "10",
      "dist": "00",
      "name": "黄山市",
      "level": 2
    },
    {
      "code": "341001",
      "prov": "34",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341002",
      "prov": "34",
      "city": "10",
      "dist": "02",
      "name": "屯溪区",
      "level": 3
    },
    {
      "code": "341003",
      "prov": "34",
      "city": "10",
      "dist": "03",
      "name": "黄山区",
      "level": 3
    },
    {
      "code": "341004",
      "prov": "34",
      "city": "10",
      "dist": "04",
      "name": "徽州区",
      "level": 3
    },
    {
      "code": "341021",
      "prov": "34",
      "city": "10",
      "dist": "21",
      "name": "歙县",
      "level": 3
    },
    {
      "code": "341022",
      "prov": "34",
      "city": "10",
      "dist": "22",
      "name": "休宁县",
      "level": 3
    },
    {
      "code": "341023",
      "prov": "34",
      "city": "10",
      "dist": "23",
      "name": "黟县",
      "level": 3
    },
    {
      "code": "341024",
      "prov": "34",
      "city": "10",
      "dist": "24",
      "name": "祁门县",
      "level": 3
    },
    {
      "code": "341100",
      "prov": "34",
      "city": "11",
      "dist": "00",
      "name": "滁州市",
      "level": 2
    },
    {
      "code": "341101",
      "prov": "34",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341102",
      "prov": "34",
      "city": "11",
      "dist": "02",
      "name": "琅琊区",
      "level": 3
    },
    {
      "code": "341103",
      "prov": "34",
      "city": "11",
      "dist": "03",
      "name": "南谯区",
      "level": 3
    },
    {
      "code": "341122",
      "prov": "34",
      "city": "11",
      "dist": "22",
      "name": "来安县",
      "level": 3
    },
    {
      "code": "341124",
      "prov": "34",
      "city": "11",
      "dist": "24",
      "name": "全椒县",
      "level": 3
    },
    {
      "code": "341125",
      "prov": "34",
      "city": "11",
      "dist": "25",
      "name": "定远县",
      "level": 3
    },
    {
      "code": "341126",
      "prov": "34",
      "city": "11",
      "dist": "26",
      "name": "凤阳县",
      "level": 3
    },
    {
      "code": "341181",
      "prov": "34",
      "city": "11",
      "dist": "81",
      "name": "天长市",
      "level": 3
    },
    {
      "code": "341182",
      "prov": "34",
      "city": "11",
      "dist": "82",
      "name": "明光市",
      "level": 3
    },
    {
      "code": "341200",
      "prov": "34",
      "city": "12",
      "dist": "00",
      "name": "阜阳市",
      "level": 2
    },
    {
      "code": "341201",
      "prov": "34",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341202",
      "prov": "34",
      "city": "12",
      "dist": "02",
      "name": "颍州区",
      "level": 3
    },
    {
      "code": "341203",
      "prov": "34",
      "city": "12",
      "dist": "03",
      "name": "颍东区",
      "level": 3
    },
    {
      "code": "341204",
      "prov": "34",
      "city": "12",
      "dist": "04",
      "name": "颍泉区",
      "level": 3
    },
    {
      "code": "341221",
      "prov": "34",
      "city": "12",
      "dist": "21",
      "name": "临泉县",
      "level": 3
    },
    {
      "code": "341222",
      "prov": "34",
      "city": "12",
      "dist": "22",
      "name": "太和县",
      "level": 3
    },
    {
      "code": "341225",
      "prov": "34",
      "city": "12",
      "dist": "25",
      "name": "阜南县",
      "level": 3
    },
    {
      "code": "341226",
      "prov": "34",
      "city": "12",
      "dist": "26",
      "name": "颍上县",
      "level": 3
    },
    {
      "code": "341282",
      "prov": "34",
      "city": "12",
      "dist": "82",
      "name": "界首市",
      "level": 3
    },
    {
      "code": "341300",
      "prov": "34",
      "city": "13",
      "dist": "00",
      "name": "宿州市",
      "level": 2
    },
    {
      "code": "341301",
      "prov": "34",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341302",
      "prov": "34",
      "city": "13",
      "dist": "02",
      "name": "埇桥区",
      "level": 3
    },
    {
      "code": "341321",
      "prov": "34",
      "city": "13",
      "dist": "21",
      "name": "砀山县",
      "level": 3
    },
    {
      "code": "341322",
      "prov": "34",
      "city": "13",
      "dist": "22",
      "name": "萧县",
      "level": 3
    },
    {
      "code": "341323",
      "prov": "34",
      "city": "13",
      "dist": "23",
      "name": "灵璧县",
      "level": 3
    },
    {
      "code": "341324",
      "prov": "34",
      "city": "13",
      "dist": "24",
      "name": "泗县",
      "level": 3
    },
    {
      "code": "341500",
      "prov": "34",
      "city": "15",
      "dist": "00",
      "name": "六安市",
      "level": 2
    },
    {
      "code": "341501",
      "prov": "34",
      "city": "15",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341502",
      "prov": "34",
      "city": "15",
      "dist": "02",
      "name": "金安区",
      "level": 3
    },
    {
      "code": "341503",
      "prov": "34",
      "city": "15",
      "dist": "03",
      "name": "裕安区",
      "level": 3
    },
    {
      "code": "341521",
      "prov": "34",
      "city": "15",
      "dist": "21",
      "name": "寿县",
      "level": 3
    },
    {
      "code": "341522",
      "prov": "34",
      "city": "15",
      "dist": "22",
      "name": "霍邱县",
      "level": 3
    },
    {
      "code": "341523",
      "prov": "34",
      "city": "15",
      "dist": "23",
      "name": "舒城县",
      "level": 3
    },
    {
      "code": "341524",
      "prov": "34",
      "city": "15",
      "dist": "24",
      "name": "金寨县",
      "level": 3
    },
    {
      "code": "341525",
      "prov": "34",
      "city": "15",
      "dist": "25",
      "name": "霍山县",
      "level": 3
    },
    {
      "code": "341600",
      "prov": "34",
      "city": "16",
      "dist": "00",
      "name": "亳州市",
      "level": 2
    },
    {
      "code": "341601",
      "prov": "34",
      "city": "16",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341602",
      "prov": "34",
      "city": "16",
      "dist": "02",
      "name": "谯城区",
      "level": 3
    },
    {
      "code": "341621",
      "prov": "34",
      "city": "16",
      "dist": "21",
      "name": "涡阳县",
      "level": 3
    },
    {
      "code": "341622",
      "prov": "34",
      "city": "16",
      "dist": "22",
      "name": "蒙城县",
      "level": 3
    },
    {
      "code": "341623",
      "prov": "34",
      "city": "16",
      "dist": "23",
      "name": "利辛县",
      "level": 3
    },
    {
      "code": "341700",
      "prov": "34",
      "city": "17",
      "dist": "00",
      "name": "池州市",
      "level": 2
    },
    {
      "code": "341701",
      "prov": "34",
      "city": "17",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341702",
      "prov": "34",
      "city": "17",
      "dist": "02",
      "name": "贵池区",
      "level": 3
    },
    {
      "code": "341721",
      "prov": "34",
      "city": "17",
      "dist": "21",
      "name": "东至县",
      "level": 3
    },
    {
      "code": "341722",
      "prov": "34",
      "city": "17",
      "dist": "22",
      "name": "石台县",
      "level": 3
    },
    {
      "code": "341723",
      "prov": "34",
      "city": "17",
      "dist": "23",
      "name": "青阳县",
      "level": 3
    },
    {
      "code": "341800",
      "prov": "34",
      "city": "18",
      "dist": "00",
      "name": "宣城市",
      "level": 2
    },
    {
      "code": "341801",
      "prov": "34",
      "city": "18",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "341802",
      "prov": "34",
      "city": "18",
      "dist": "02",
      "name": "宣州区",
      "level": 3
    },
    {
      "code": "341821",
      "prov": "34",
      "city": "18",
      "dist": "21",
      "name": "郎溪县",
      "level": 3
    },
    {
      "code": "341822",
      "prov": "34",
      "city": "18",
      "dist": "22",
      "name": "广德县",
      "level": 3
    },
    {
      "code": "341823",
      "prov": "34",
      "city": "18",
      "dist": "23",
      "name": "泾县",
      "level": 3
    },
    {
      "code": "341824",
      "prov": "34",
      "city": "18",
      "dist": "24",
      "name": "绩溪县",
      "level": 3
    },
    {
      "code": "341825",
      "prov": "34",
      "city": "18",
      "dist": "25",
      "name": "旌德县",
      "level": 3
    },
    {
      "code": "341881",
      "prov": "34",
      "city": "18",
      "dist": "81",
      "name": "宁国市",
      "level": 3
    },
    {
      "code": "350000",
      "prov": "35",
      "city": "00",
      "dist": "00",
      "name": "福建省",
      "level": 1
    },
    {
      "code": "350100",
      "prov": "35",
      "city": "01",
      "dist": "00",
      "name": "福州市",
      "level": 2
    },
    {
      "code": "350101",
      "prov": "35",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350102",
      "prov": "35",
      "city": "01",
      "dist": "02",
      "name": "鼓楼区",
      "level": 3
    },
    {
      "code": "350103",
      "prov": "35",
      "city": "01",
      "dist": "03",
      "name": "台江区",
      "level": 3
    },
    {
      "code": "350104",
      "prov": "35",
      "city": "01",
      "dist": "04",
      "name": "仓山区",
      "level": 3
    },
    {
      "code": "350105",
      "prov": "35",
      "city": "01",
      "dist": "05",
      "name": "马尾区",
      "level": 3
    },
    {
      "code": "350111",
      "prov": "35",
      "city": "01",
      "dist": "11",
      "name": "晋安区",
      "level": 3
    },
    {
      "code": "350121",
      "prov": "35",
      "city": "01",
      "dist": "21",
      "name": "闽侯县",
      "level": 3
    },
    {
      "code": "350122",
      "prov": "35",
      "city": "01",
      "dist": "22",
      "name": "连江县",
      "level": 3
    },
    {
      "code": "350123",
      "prov": "35",
      "city": "01",
      "dist": "23",
      "name": "罗源县",
      "level": 3
    },
    {
      "code": "350124",
      "prov": "35",
      "city": "01",
      "dist": "24",
      "name": "闽清县",
      "level": 3
    },
    {
      "code": "350125",
      "prov": "35",
      "city": "01",
      "dist": "25",
      "name": "永泰县",
      "level": 3
    },
    {
      "code": "350128",
      "prov": "35",
      "city": "01",
      "dist": "28",
      "name": "平潭县",
      "level": 3
    },
    {
      "code": "350181",
      "prov": "35",
      "city": "01",
      "dist": "81",
      "name": "福清市",
      "level": 3
    },
    {
      "code": "350182",
      "prov": "35",
      "city": "01",
      "dist": "82",
      "name": "长乐市",
      "level": 3
    },
    {
      "code": "350200",
      "prov": "35",
      "city": "02",
      "dist": "00",
      "name": "厦门市",
      "level": 2
    },
    {
      "code": "350201",
      "prov": "35",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350203",
      "prov": "35",
      "city": "02",
      "dist": "03",
      "name": "思明区",
      "level": 3
    },
    {
      "code": "350205",
      "prov": "35",
      "city": "02",
      "dist": "05",
      "name": "海沧区",
      "level": 3
    },
    {
      "code": "350206",
      "prov": "35",
      "city": "02",
      "dist": "06",
      "name": "湖里区",
      "level": 3
    },
    {
      "code": "350211",
      "prov": "35",
      "city": "02",
      "dist": "11",
      "name": "集美区",
      "level": 3
    },
    {
      "code": "350212",
      "prov": "35",
      "city": "02",
      "dist": "12",
      "name": "同安区",
      "level": 3
    },
    {
      "code": "350213",
      "prov": "35",
      "city": "02",
      "dist": "13",
      "name": "翔安区",
      "level": 3
    },
    {
      "code": "350300",
      "prov": "35",
      "city": "03",
      "dist": "00",
      "name": "莆田市",
      "level": 2
    },
    {
      "code": "350301",
      "prov": "35",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350302",
      "prov": "35",
      "city": "03",
      "dist": "02",
      "name": "城厢区",
      "level": 3
    },
    {
      "code": "350303",
      "prov": "35",
      "city": "03",
      "dist": "03",
      "name": "涵江区",
      "level": 3
    },
    {
      "code": "350304",
      "prov": "35",
      "city": "03",
      "dist": "04",
      "name": "荔城区",
      "level": 3
    },
    {
      "code": "350305",
      "prov": "35",
      "city": "03",
      "dist": "05",
      "name": "秀屿区",
      "level": 3
    },
    {
      "code": "350322",
      "prov": "35",
      "city": "03",
      "dist": "22",
      "name": "仙游县",
      "level": 3
    },
    {
      "code": "350400",
      "prov": "35",
      "city": "04",
      "dist": "00",
      "name": "三明市",
      "level": 2
    },
    {
      "code": "350401",
      "prov": "35",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350402",
      "prov": "35",
      "city": "04",
      "dist": "02",
      "name": "梅列区",
      "level": 3
    },
    {
      "code": "350403",
      "prov": "35",
      "city": "04",
      "dist": "03",
      "name": "三元区",
      "level": 3
    },
    {
      "code": "350421",
      "prov": "35",
      "city": "04",
      "dist": "21",
      "name": "明溪县",
      "level": 3
    },
    {
      "code": "350423",
      "prov": "35",
      "city": "04",
      "dist": "23",
      "name": "清流县",
      "level": 3
    },
    {
      "code": "350424",
      "prov": "35",
      "city": "04",
      "dist": "24",
      "name": "宁化县",
      "level": 3
    },
    {
      "code": "350425",
      "prov": "35",
      "city": "04",
      "dist": "25",
      "name": "大田县",
      "level": 3
    },
    {
      "code": "350426",
      "prov": "35",
      "city": "04",
      "dist": "26",
      "name": "尤溪县",
      "level": 3
    },
    {
      "code": "350427",
      "prov": "35",
      "city": "04",
      "dist": "27",
      "name": "沙县",
      "level": 3
    },
    {
      "code": "350428",
      "prov": "35",
      "city": "04",
      "dist": "28",
      "name": "将乐县",
      "level": 3
    },
    {
      "code": "350429",
      "prov": "35",
      "city": "04",
      "dist": "29",
      "name": "泰宁县",
      "level": 3
    },
    {
      "code": "350430",
      "prov": "35",
      "city": "04",
      "dist": "30",
      "name": "建宁县",
      "level": 3
    },
    {
      "code": "350481",
      "prov": "35",
      "city": "04",
      "dist": "81",
      "name": "永安市",
      "level": 3
    },
    {
      "code": "350500",
      "prov": "35",
      "city": "05",
      "dist": "00",
      "name": "泉州市",
      "level": 2
    },
    {
      "code": "350501",
      "prov": "35",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350502",
      "prov": "35",
      "city": "05",
      "dist": "02",
      "name": "鲤城区",
      "level": 3
    },
    {
      "code": "350503",
      "prov": "35",
      "city": "05",
      "dist": "03",
      "name": "丰泽区",
      "level": 3
    },
    {
      "code": "350504",
      "prov": "35",
      "city": "05",
      "dist": "04",
      "name": "洛江区",
      "level": 3
    },
    {
      "code": "350505",
      "prov": "35",
      "city": "05",
      "dist": "05",
      "name": "泉港区",
      "level": 3
    },
    {
      "code": "350521",
      "prov": "35",
      "city": "05",
      "dist": "21",
      "name": "惠安县",
      "level": 3
    },
    {
      "code": "350524",
      "prov": "35",
      "city": "05",
      "dist": "24",
      "name": "安溪县",
      "level": 3
    },
    {
      "code": "350525",
      "prov": "35",
      "city": "05",
      "dist": "25",
      "name": "永春县",
      "level": 3
    },
    {
      "code": "350526",
      "prov": "35",
      "city": "05",
      "dist": "26",
      "name": "德化县",
      "level": 3
    },
    {
      "code": "350527",
      "prov": "35",
      "city": "05",
      "dist": "27",
      "name": "金门县",
      "level": 3
    },
    {
      "code": "350581",
      "prov": "35",
      "city": "05",
      "dist": "81",
      "name": "石狮市",
      "level": 3
    },
    {
      "code": "350582",
      "prov": "35",
      "city": "05",
      "dist": "82",
      "name": "晋江市",
      "level": 3
    },
    {
      "code": "350583",
      "prov": "35",
      "city": "05",
      "dist": "83",
      "name": "南安市",
      "level": 3
    },
    {
      "code": "350600",
      "prov": "35",
      "city": "06",
      "dist": "00",
      "name": "漳州市",
      "level": 2
    },
    {
      "code": "350601",
      "prov": "35",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350602",
      "prov": "35",
      "city": "06",
      "dist": "02",
      "name": "芗城区",
      "level": 3
    },
    {
      "code": "350603",
      "prov": "35",
      "city": "06",
      "dist": "03",
      "name": "龙文区",
      "level": 3
    },
    {
      "code": "350622",
      "prov": "35",
      "city": "06",
      "dist": "22",
      "name": "云霄县",
      "level": 3
    },
    {
      "code": "350623",
      "prov": "35",
      "city": "06",
      "dist": "23",
      "name": "漳浦县",
      "level": 3
    },
    {
      "code": "350624",
      "prov": "35",
      "city": "06",
      "dist": "24",
      "name": "诏安县",
      "level": 3
    },
    {
      "code": "350625",
      "prov": "35",
      "city": "06",
      "dist": "25",
      "name": "长泰县",
      "level": 3
    },
    {
      "code": "350626",
      "prov": "35",
      "city": "06",
      "dist": "26",
      "name": "东山县",
      "level": 3
    },
    {
      "code": "350627",
      "prov": "35",
      "city": "06",
      "dist": "27",
      "name": "南靖县",
      "level": 3
    },
    {
      "code": "350628",
      "prov": "35",
      "city": "06",
      "dist": "28",
      "name": "平和县",
      "level": 3
    },
    {
      "code": "350629",
      "prov": "35",
      "city": "06",
      "dist": "29",
      "name": "华安县",
      "level": 3
    },
    {
      "code": "350681",
      "prov": "35",
      "city": "06",
      "dist": "81",
      "name": "龙海市",
      "level": 3
    },
    {
      "code": "350700",
      "prov": "35",
      "city": "07",
      "dist": "00",
      "name": "南平市",
      "level": 2
    },
    {
      "code": "350701",
      "prov": "35",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350702",
      "prov": "35",
      "city": "07",
      "dist": "02",
      "name": "延平区",
      "level": 3
    },
    {
      "code": "350721",
      "prov": "35",
      "city": "07",
      "dist": "21",
      "name": "顺昌县",
      "level": 3
    },
    {
      "code": "350722",
      "prov": "35",
      "city": "07",
      "dist": "22",
      "name": "浦城县",
      "level": 3
    },
    {
      "code": "350723",
      "prov": "35",
      "city": "07",
      "dist": "23",
      "name": "光泽县",
      "level": 3
    },
    {
      "code": "350724",
      "prov": "35",
      "city": "07",
      "dist": "24",
      "name": "松溪县",
      "level": 3
    },
    {
      "code": "350725",
      "prov": "35",
      "city": "07",
      "dist": "25",
      "name": "政和县",
      "level": 3
    },
    {
      "code": "350781",
      "prov": "35",
      "city": "07",
      "dist": "81",
      "name": "邵武市",
      "level": 3
    },
    {
      "code": "350782",
      "prov": "35",
      "city": "07",
      "dist": "82",
      "name": "武夷山市",
      "level": 3
    },
    {
      "code": "350783",
      "prov": "35",
      "city": "07",
      "dist": "83",
      "name": "建瓯市",
      "level": 3
    },
    {
      "code": "350784",
      "prov": "35",
      "city": "07",
      "dist": "84",
      "name": "建阳市",
      "level": 3
    },
    {
      "code": "350800",
      "prov": "35",
      "city": "08",
      "dist": "00",
      "name": "龙岩市",
      "level": 2
    },
    {
      "code": "350801",
      "prov": "35",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350802",
      "prov": "35",
      "city": "08",
      "dist": "02",
      "name": "新罗区",
      "level": 3
    },
    {
      "code": "350821",
      "prov": "35",
      "city": "08",
      "dist": "21",
      "name": "长汀县",
      "level": 3
    },
    {
      "code": "350822",
      "prov": "35",
      "city": "08",
      "dist": "22",
      "name": "永定县",
      "level": 3
    },
    {
      "code": "350823",
      "prov": "35",
      "city": "08",
      "dist": "23",
      "name": "上杭县",
      "level": 3
    },
    {
      "code": "350824",
      "prov": "35",
      "city": "08",
      "dist": "24",
      "name": "武平县",
      "level": 3
    },
    {
      "code": "350825",
      "prov": "35",
      "city": "08",
      "dist": "25",
      "name": "连城县",
      "level": 3
    },
    {
      "code": "350881",
      "prov": "35",
      "city": "08",
      "dist": "81",
      "name": "漳平市",
      "level": 3
    },
    {
      "code": "350900",
      "prov": "35",
      "city": "09",
      "dist": "00",
      "name": "宁德市",
      "level": 2
    },
    {
      "code": "350901",
      "prov": "35",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "350902",
      "prov": "35",
      "city": "09",
      "dist": "02",
      "name": "蕉城区",
      "level": 3
    },
    {
      "code": "350921",
      "prov": "35",
      "city": "09",
      "dist": "21",
      "name": "霞浦县",
      "level": 3
    },
    {
      "code": "350922",
      "prov": "35",
      "city": "09",
      "dist": "22",
      "name": "古田县",
      "level": 3
    },
    {
      "code": "350923",
      "prov": "35",
      "city": "09",
      "dist": "23",
      "name": "屏南县",
      "level": 3
    },
    {
      "code": "350924",
      "prov": "35",
      "city": "09",
      "dist": "24",
      "name": "寿宁县",
      "level": 3
    },
    {
      "code": "350925",
      "prov": "35",
      "city": "09",
      "dist": "25",
      "name": "周宁县",
      "level": 3
    },
    {
      "code": "350926",
      "prov": "35",
      "city": "09",
      "dist": "26",
      "name": "柘荣县",
      "level": 3
    },
    {
      "code": "350981",
      "prov": "35",
      "city": "09",
      "dist": "81",
      "name": "福安市",
      "level": 3
    },
    {
      "code": "350982",
      "prov": "35",
      "city": "09",
      "dist": "82",
      "name": "福鼎市",
      "level": 3
    },
    {
      "code": "360000",
      "prov": "36",
      "city": "00",
      "dist": "00",
      "name": "江西省",
      "level": 1
    },
    {
      "code": "360100",
      "prov": "36",
      "city": "01",
      "dist": "00",
      "name": "南昌市",
      "level": 2
    },
    {
      "code": "360101",
      "prov": "36",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360102",
      "prov": "36",
      "city": "01",
      "dist": "02",
      "name": "东湖区",
      "level": 3
    },
    {
      "code": "360103",
      "prov": "36",
      "city": "01",
      "dist": "03",
      "name": "西湖区",
      "level": 3
    },
    {
      "code": "360104",
      "prov": "36",
      "city": "01",
      "dist": "04",
      "name": "青云谱区",
      "level": 3
    },
    {
      "code": "360105",
      "prov": "36",
      "city": "01",
      "dist": "05",
      "name": "湾里区",
      "level": 3
    },
    {
      "code": "360111",
      "prov": "36",
      "city": "01",
      "dist": "11",
      "name": "青山湖区",
      "level": 3
    },
    {
      "code": "360121",
      "prov": "36",
      "city": "01",
      "dist": "21",
      "name": "南昌县",
      "level": 3
    },
    {
      "code": "360122",
      "prov": "36",
      "city": "01",
      "dist": "22",
      "name": "新建县",
      "level": 3
    },
    {
      "code": "360123",
      "prov": "36",
      "city": "01",
      "dist": "23",
      "name": "安义县",
      "level": 3
    },
    {
      "code": "360124",
      "prov": "36",
      "city": "01",
      "dist": "24",
      "name": "进贤县",
      "level": 3
    },
    {
      "code": "360200",
      "prov": "36",
      "city": "02",
      "dist": "00",
      "name": "景德镇市",
      "level": 2
    },
    {
      "code": "360201",
      "prov": "36",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360202",
      "prov": "36",
      "city": "02",
      "dist": "02",
      "name": "昌江区",
      "level": 3
    },
    {
      "code": "360203",
      "prov": "36",
      "city": "02",
      "dist": "03",
      "name": "珠山区",
      "level": 3
    },
    {
      "code": "360222",
      "prov": "36",
      "city": "02",
      "dist": "22",
      "name": "浮梁县",
      "level": 3
    },
    {
      "code": "360281",
      "prov": "36",
      "city": "02",
      "dist": "81",
      "name": "乐平市",
      "level": 3
    },
    {
      "code": "360300",
      "prov": "36",
      "city": "03",
      "dist": "00",
      "name": "萍乡市",
      "level": 2
    },
    {
      "code": "360301",
      "prov": "36",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360302",
      "prov": "36",
      "city": "03",
      "dist": "02",
      "name": "安源区",
      "level": 3
    },
    {
      "code": "360313",
      "prov": "36",
      "city": "03",
      "dist": "13",
      "name": "湘东区",
      "level": 3
    },
    {
      "code": "360321",
      "prov": "36",
      "city": "03",
      "dist": "21",
      "name": "莲花县",
      "level": 3
    },
    {
      "code": "360322",
      "prov": "36",
      "city": "03",
      "dist": "22",
      "name": "上栗县",
      "level": 3
    },
    {
      "code": "360323",
      "prov": "36",
      "city": "03",
      "dist": "23",
      "name": "芦溪县",
      "level": 3
    },
    {
      "code": "360400",
      "prov": "36",
      "city": "04",
      "dist": "00",
      "name": "九江市",
      "level": 2
    },
    {
      "code": "360401",
      "prov": "36",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360402",
      "prov": "36",
      "city": "04",
      "dist": "02",
      "name": "庐山区",
      "level": 3
    },
    {
      "code": "360403",
      "prov": "36",
      "city": "04",
      "dist": "03",
      "name": "浔阳区",
      "level": 3
    },
    {
      "code": "360421",
      "prov": "36",
      "city": "04",
      "dist": "21",
      "name": "九江县",
      "level": 3
    },
    {
      "code": "360423",
      "prov": "36",
      "city": "04",
      "dist": "23",
      "name": "武宁县",
      "level": 3
    },
    {
      "code": "360424",
      "prov": "36",
      "city": "04",
      "dist": "24",
      "name": "修水县",
      "level": 3
    },
    {
      "code": "360425",
      "prov": "36",
      "city": "04",
      "dist": "25",
      "name": "永修县",
      "level": 3
    },
    {
      "code": "360426",
      "prov": "36",
      "city": "04",
      "dist": "26",
      "name": "德安县",
      "level": 3
    },
    {
      "code": "360427",
      "prov": "36",
      "city": "04",
      "dist": "27",
      "name": "星子县",
      "level": 3
    },
    {
      "code": "360428",
      "prov": "36",
      "city": "04",
      "dist": "28",
      "name": "都昌县",
      "level": 3
    },
    {
      "code": "360429",
      "prov": "36",
      "city": "04",
      "dist": "29",
      "name": "湖口县",
      "level": 3
    },
    {
      "code": "360430",
      "prov": "36",
      "city": "04",
      "dist": "30",
      "name": "彭泽县",
      "level": 3
    },
    {
      "code": "360481",
      "prov": "36",
      "city": "04",
      "dist": "81",
      "name": "瑞昌市",
      "level": 3
    },
    {
      "code": "360482",
      "prov": "36",
      "city": "04",
      "dist": "82",
      "name": "共青城市",
      "level": 3
    },
    {
      "code": "360500",
      "prov": "36",
      "city": "05",
      "dist": "00",
      "name": "新余市",
      "level": 2
    },
    {
      "code": "360501",
      "prov": "36",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360502",
      "prov": "36",
      "city": "05",
      "dist": "02",
      "name": "渝水区",
      "level": 3
    },
    {
      "code": "360521",
      "prov": "36",
      "city": "05",
      "dist": "21",
      "name": "分宜县",
      "level": 3
    },
    {
      "code": "360600",
      "prov": "36",
      "city": "06",
      "dist": "00",
      "name": "鹰潭市",
      "level": 2
    },
    {
      "code": "360601",
      "prov": "36",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360602",
      "prov": "36",
      "city": "06",
      "dist": "02",
      "name": "月湖区",
      "level": 3
    },
    {
      "code": "360622",
      "prov": "36",
      "city": "06",
      "dist": "22",
      "name": "余江县",
      "level": 3
    },
    {
      "code": "360681",
      "prov": "36",
      "city": "06",
      "dist": "81",
      "name": "贵溪市",
      "level": 3
    },
    {
      "code": "360700",
      "prov": "36",
      "city": "07",
      "dist": "00",
      "name": "赣州市",
      "level": 2
    },
    {
      "code": "360701",
      "prov": "36",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360702",
      "prov": "36",
      "city": "07",
      "dist": "02",
      "name": "章贡区",
      "level": 3
    },
    {
      "code": "360703",
      "prov": "36",
      "city": "07",
      "dist": "03",
      "name": "南康区",
      "level": 3
    },
    {
      "code": "360721",
      "prov": "36",
      "city": "07",
      "dist": "21",
      "name": "赣县",
      "level": 3
    },
    {
      "code": "360722",
      "prov": "36",
      "city": "07",
      "dist": "22",
      "name": "信丰县",
      "level": 3
    },
    {
      "code": "360723",
      "prov": "36",
      "city": "07",
      "dist": "23",
      "name": "大余县",
      "level": 3
    },
    {
      "code": "360724",
      "prov": "36",
      "city": "07",
      "dist": "24",
      "name": "上犹县",
      "level": 3
    },
    {
      "code": "360725",
      "prov": "36",
      "city": "07",
      "dist": "25",
      "name": "崇义县",
      "level": 3
    },
    {
      "code": "360726",
      "prov": "36",
      "city": "07",
      "dist": "26",
      "name": "安远县",
      "level": 3
    },
    {
      "code": "360727",
      "prov": "36",
      "city": "07",
      "dist": "27",
      "name": "龙南县",
      "level": 3
    },
    {
      "code": "360728",
      "prov": "36",
      "city": "07",
      "dist": "28",
      "name": "定南县",
      "level": 3
    },
    {
      "code": "360729",
      "prov": "36",
      "city": "07",
      "dist": "29",
      "name": "全南县",
      "level": 3
    },
    {
      "code": "360730",
      "prov": "36",
      "city": "07",
      "dist": "30",
      "name": "宁都县",
      "level": 3
    },
    {
      "code": "360731",
      "prov": "36",
      "city": "07",
      "dist": "31",
      "name": "于都县",
      "level": 3
    },
    {
      "code": "360732",
      "prov": "36",
      "city": "07",
      "dist": "32",
      "name": "兴国县",
      "level": 3
    },
    {
      "code": "360733",
      "prov": "36",
      "city": "07",
      "dist": "33",
      "name": "会昌县",
      "level": 3
    },
    {
      "code": "360734",
      "prov": "36",
      "city": "07",
      "dist": "34",
      "name": "寻乌县",
      "level": 3
    },
    {
      "code": "360735",
      "prov": "36",
      "city": "07",
      "dist": "35",
      "name": "石城县",
      "level": 3
    },
    {
      "code": "360781",
      "prov": "36",
      "city": "07",
      "dist": "81",
      "name": "瑞金市",
      "level": 3
    },
    {
      "code": "360800",
      "prov": "36",
      "city": "08",
      "dist": "00",
      "name": "吉安市",
      "level": 2
    },
    {
      "code": "360801",
      "prov": "36",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360802",
      "prov": "36",
      "city": "08",
      "dist": "02",
      "name": "吉州区",
      "level": 3
    },
    {
      "code": "360803",
      "prov": "36",
      "city": "08",
      "dist": "03",
      "name": "青原区",
      "level": 3
    },
    {
      "code": "360821",
      "prov": "36",
      "city": "08",
      "dist": "21",
      "name": "吉安县",
      "level": 3
    },
    {
      "code": "360822",
      "prov": "36",
      "city": "08",
      "dist": "22",
      "name": "吉水县",
      "level": 3
    },
    {
      "code": "360823",
      "prov": "36",
      "city": "08",
      "dist": "23",
      "name": "峡江县",
      "level": 3
    },
    {
      "code": "360824",
      "prov": "36",
      "city": "08",
      "dist": "24",
      "name": "新干县",
      "level": 3
    },
    {
      "code": "360825",
      "prov": "36",
      "city": "08",
      "dist": "25",
      "name": "永丰县",
      "level": 3
    },
    {
      "code": "360826",
      "prov": "36",
      "city": "08",
      "dist": "26",
      "name": "泰和县",
      "level": 3
    },
    {
      "code": "360827",
      "prov": "36",
      "city": "08",
      "dist": "27",
      "name": "遂川县",
      "level": 3
    },
    {
      "code": "360828",
      "prov": "36",
      "city": "08",
      "dist": "28",
      "name": "万安县",
      "level": 3
    },
    {
      "code": "360829",
      "prov": "36",
      "city": "08",
      "dist": "29",
      "name": "安福县",
      "level": 3
    },
    {
      "code": "360830",
      "prov": "36",
      "city": "08",
      "dist": "30",
      "name": "永新县",
      "level": 3
    },
    {
      "code": "360881",
      "prov": "36",
      "city": "08",
      "dist": "81",
      "name": "井冈山市",
      "level": 3
    },
    {
      "code": "360900",
      "prov": "36",
      "city": "09",
      "dist": "00",
      "name": "宜春市",
      "level": 2
    },
    {
      "code": "360901",
      "prov": "36",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "360902",
      "prov": "36",
      "city": "09",
      "dist": "02",
      "name": "袁州区",
      "level": 3
    },
    {
      "code": "360921",
      "prov": "36",
      "city": "09",
      "dist": "21",
      "name": "奉新县",
      "level": 3
    },
    {
      "code": "360922",
      "prov": "36",
      "city": "09",
      "dist": "22",
      "name": "万载县",
      "level": 3
    },
    {
      "code": "360923",
      "prov": "36",
      "city": "09",
      "dist": "23",
      "name": "上高县",
      "level": 3
    },
    {
      "code": "360924",
      "prov": "36",
      "city": "09",
      "dist": "24",
      "name": "宜丰县",
      "level": 3
    },
    {
      "code": "360925",
      "prov": "36",
      "city": "09",
      "dist": "25",
      "name": "靖安县",
      "level": 3
    },
    {
      "code": "360926",
      "prov": "36",
      "city": "09",
      "dist": "26",
      "name": "铜鼓县",
      "level": 3
    },
    {
      "code": "360981",
      "prov": "36",
      "city": "09",
      "dist": "81",
      "name": "丰城市",
      "level": 3
    },
    {
      "code": "360982",
      "prov": "36",
      "city": "09",
      "dist": "82",
      "name": "樟树市",
      "level": 3
    },
    {
      "code": "360983",
      "prov": "36",
      "city": "09",
      "dist": "83",
      "name": "高安市",
      "level": 3
    },
    {
      "code": "361000",
      "prov": "36",
      "city": "10",
      "dist": "00",
      "name": "抚州市",
      "level": 2
    },
    {
      "code": "361001",
      "prov": "36",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "361002",
      "prov": "36",
      "city": "10",
      "dist": "02",
      "name": "临川区",
      "level": 3
    },
    {
      "code": "361021",
      "prov": "36",
      "city": "10",
      "dist": "21",
      "name": "南城县",
      "level": 3
    },
    {
      "code": "361022",
      "prov": "36",
      "city": "10",
      "dist": "22",
      "name": "黎川县",
      "level": 3
    },
    {
      "code": "361023",
      "prov": "36",
      "city": "10",
      "dist": "23",
      "name": "南丰县",
      "level": 3
    },
    {
      "code": "361024",
      "prov": "36",
      "city": "10",
      "dist": "24",
      "name": "崇仁县",
      "level": 3
    },
    {
      "code": "361025",
      "prov": "36",
      "city": "10",
      "dist": "25",
      "name": "乐安县",
      "level": 3
    },
    {
      "code": "361026",
      "prov": "36",
      "city": "10",
      "dist": "26",
      "name": "宜黄县",
      "level": 3
    },
    {
      "code": "361027",
      "prov": "36",
      "city": "10",
      "dist": "27",
      "name": "金溪县",
      "level": 3
    },
    {
      "code": "361028",
      "prov": "36",
      "city": "10",
      "dist": "28",
      "name": "资溪县",
      "level": 3
    },
    {
      "code": "361029",
      "prov": "36",
      "city": "10",
      "dist": "29",
      "name": "东乡县",
      "level": 3
    },
    {
      "code": "361030",
      "prov": "36",
      "city": "10",
      "dist": "30",
      "name": "广昌县",
      "level": 3
    },
    {
      "code": "361100",
      "prov": "36",
      "city": "11",
      "dist": "00",
      "name": "上饶市",
      "level": 2
    },
    {
      "code": "361101",
      "prov": "36",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "361102",
      "prov": "36",
      "city": "11",
      "dist": "02",
      "name": "信州区",
      "level": 3
    },
    {
      "code": "361121",
      "prov": "36",
      "city": "11",
      "dist": "21",
      "name": "上饶县",
      "level": 3
    },
    {
      "code": "361122",
      "prov": "36",
      "city": "11",
      "dist": "22",
      "name": "广丰县",
      "level": 3
    },
    {
      "code": "361123",
      "prov": "36",
      "city": "11",
      "dist": "23",
      "name": "玉山县",
      "level": 3
    },
    {
      "code": "361124",
      "prov": "36",
      "city": "11",
      "dist": "24",
      "name": "铅山县",
      "level": 3
    },
    {
      "code": "361125",
      "prov": "36",
      "city": "11",
      "dist": "25",
      "name": "横峰县",
      "level": 3
    },
    {
      "code": "361126",
      "prov": "36",
      "city": "11",
      "dist": "26",
      "name": "弋阳县",
      "level": 3
    },
    {
      "code": "361127",
      "prov": "36",
      "city": "11",
      "dist": "27",
      "name": "余干县",
      "level": 3
    },
    {
      "code": "361128",
      "prov": "36",
      "city": "11",
      "dist": "28",
      "name": "鄱阳县",
      "level": 3
    },
    {
      "code": "361129",
      "prov": "36",
      "city": "11",
      "dist": "29",
      "name": "万年县",
      "level": 3
    },
    {
      "code": "361130",
      "prov": "36",
      "city": "11",
      "dist": "30",
      "name": "婺源县",
      "level": 3
    },
    {
      "code": "361181",
      "prov": "36",
      "city": "11",
      "dist": "81",
      "name": "德兴市",
      "level": 3
    },
    {
      "code": "370000",
      "prov": "37",
      "city": "00",
      "dist": "00",
      "name": "山东省",
      "level": 1
    },
    {
      "code": "370100",
      "prov": "37",
      "city": "01",
      "dist": "00",
      "name": "济南市",
      "level": 2
    },
    {
      "code": "370101",
      "prov": "37",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370102",
      "prov": "37",
      "city": "01",
      "dist": "02",
      "name": "历下区",
      "level": 3
    },
    {
      "code": "370103",
      "prov": "37",
      "city": "01",
      "dist": "03",
      "name": "市中区",
      "level": 3
    },
    {
      "code": "370104",
      "prov": "37",
      "city": "01",
      "dist": "04",
      "name": "槐荫区",
      "level": 3
    },
    {
      "code": "370105",
      "prov": "37",
      "city": "01",
      "dist": "05",
      "name": "天桥区",
      "level": 3
    },
    {
      "code": "370112",
      "prov": "37",
      "city": "01",
      "dist": "12",
      "name": "历城区",
      "level": 3
    },
    {
      "code": "370113",
      "prov": "37",
      "city": "01",
      "dist": "13",
      "name": "长清区",
      "level": 3
    },
    {
      "code": "370124",
      "prov": "37",
      "city": "01",
      "dist": "24",
      "name": "平阴县",
      "level": 3
    },
    {
      "code": "370125",
      "prov": "37",
      "city": "01",
      "dist": "25",
      "name": "济阳县",
      "level": 3
    },
    {
      "code": "370126",
      "prov": "37",
      "city": "01",
      "dist": "26",
      "name": "商河县",
      "level": 3
    },
    {
      "code": "370181",
      "prov": "37",
      "city": "01",
      "dist": "81",
      "name": "章丘市",
      "level": 3
    },
    {
      "code": "370200",
      "prov": "37",
      "city": "02",
      "dist": "00",
      "name": "青岛市",
      "level": 2
    },
    {
      "code": "370201",
      "prov": "37",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370202",
      "prov": "37",
      "city": "02",
      "dist": "02",
      "name": "市南区",
      "level": 3
    },
    {
      "code": "370203",
      "prov": "37",
      "city": "02",
      "dist": "03",
      "name": "市北区",
      "level": 3
    },
    {
      "code": "370211",
      "prov": "37",
      "city": "02",
      "dist": "11",
      "name": "黄岛区",
      "level": 3
    },
    {
      "code": "370212",
      "prov": "37",
      "city": "02",
      "dist": "12",
      "name": "崂山区",
      "level": 3
    },
    {
      "code": "370213",
      "prov": "37",
      "city": "02",
      "dist": "13",
      "name": "李沧区",
      "level": 3
    },
    {
      "code": "370214",
      "prov": "37",
      "city": "02",
      "dist": "14",
      "name": "城阳区",
      "level": 3
    },
    {
      "code": "370281",
      "prov": "37",
      "city": "02",
      "dist": "81",
      "name": "胶州市",
      "level": 3
    },
    {
      "code": "370282",
      "prov": "37",
      "city": "02",
      "dist": "82",
      "name": "即墨市",
      "level": 3
    },
    {
      "code": "370283",
      "prov": "37",
      "city": "02",
      "dist": "83",
      "name": "平度市",
      "level": 3
    },
    {
      "code": "370285",
      "prov": "37",
      "city": "02",
      "dist": "85",
      "name": "莱西市",
      "level": 3
    },
    {
      "code": "370300",
      "prov": "37",
      "city": "03",
      "dist": "00",
      "name": "淄博市",
      "level": 2
    },
    {
      "code": "370301",
      "prov": "37",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370302",
      "prov": "37",
      "city": "03",
      "dist": "02",
      "name": "淄川区",
      "level": 3
    },
    {
      "code": "370303",
      "prov": "37",
      "city": "03",
      "dist": "03",
      "name": "张店区",
      "level": 3
    },
    {
      "code": "370304",
      "prov": "37",
      "city": "03",
      "dist": "04",
      "name": "博山区",
      "level": 3
    },
    {
      "code": "370305",
      "prov": "37",
      "city": "03",
      "dist": "05",
      "name": "临淄区",
      "level": 3
    },
    {
      "code": "370306",
      "prov": "37",
      "city": "03",
      "dist": "06",
      "name": "周村区",
      "level": 3
    },
    {
      "code": "370321",
      "prov": "37",
      "city": "03",
      "dist": "21",
      "name": "桓台县",
      "level": 3
    },
    {
      "code": "370322",
      "prov": "37",
      "city": "03",
      "dist": "22",
      "name": "高青县",
      "level": 3
    },
    {
      "code": "370323",
      "prov": "37",
      "city": "03",
      "dist": "23",
      "name": "沂源县",
      "level": 3
    },
    {
      "code": "370400",
      "prov": "37",
      "city": "04",
      "dist": "00",
      "name": "枣庄市",
      "level": 2
    },
    {
      "code": "370401",
      "prov": "37",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370402",
      "prov": "37",
      "city": "04",
      "dist": "02",
      "name": "市中区",
      "level": 3
    },
    {
      "code": "370403",
      "prov": "37",
      "city": "04",
      "dist": "03",
      "name": "薛城区",
      "level": 3
    },
    {
      "code": "370404",
      "prov": "37",
      "city": "04",
      "dist": "04",
      "name": "峄城区",
      "level": 3
    },
    {
      "code": "370405",
      "prov": "37",
      "city": "04",
      "dist": "05",
      "name": "台儿庄区",
      "level": 3
    },
    {
      "code": "370406",
      "prov": "37",
      "city": "04",
      "dist": "06",
      "name": "山亭区",
      "level": 3
    },
    {
      "code": "370481",
      "prov": "37",
      "city": "04",
      "dist": "81",
      "name": "滕州市",
      "level": 3
    },
    {
      "code": "370500",
      "prov": "37",
      "city": "05",
      "dist": "00",
      "name": "东营市",
      "level": 2
    },
    {
      "code": "370501",
      "prov": "37",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370502",
      "prov": "37",
      "city": "05",
      "dist": "02",
      "name": "东营区",
      "level": 3
    },
    {
      "code": "370503",
      "prov": "37",
      "city": "05",
      "dist": "03",
      "name": "河口区",
      "level": 3
    },
    {
      "code": "370521",
      "prov": "37",
      "city": "05",
      "dist": "21",
      "name": "垦利县",
      "level": 3
    },
    {
      "code": "370522",
      "prov": "37",
      "city": "05",
      "dist": "22",
      "name": "利津县",
      "level": 3
    },
    {
      "code": "370523",
      "prov": "37",
      "city": "05",
      "dist": "23",
      "name": "广饶县",
      "level": 3
    },
    {
      "code": "370600",
      "prov": "37",
      "city": "06",
      "dist": "00",
      "name": "烟台市",
      "level": 2
    },
    {
      "code": "370601",
      "prov": "37",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370602",
      "prov": "37",
      "city": "06",
      "dist": "02",
      "name": "芝罘区",
      "level": 3
    },
    {
      "code": "370611",
      "prov": "37",
      "city": "06",
      "dist": "11",
      "name": "福山区",
      "level": 3
    },
    {
      "code": "370612",
      "prov": "37",
      "city": "06",
      "dist": "12",
      "name": "牟平区",
      "level": 3
    },
    {
      "code": "370613",
      "prov": "37",
      "city": "06",
      "dist": "13",
      "name": "莱山区",
      "level": 3
    },
    {
      "code": "370634",
      "prov": "37",
      "city": "06",
      "dist": "34",
      "name": "长岛县",
      "level": 3
    },
    {
      "code": "370681",
      "prov": "37",
      "city": "06",
      "dist": "81",
      "name": "龙口市",
      "level": 3
    },
    {
      "code": "370682",
      "prov": "37",
      "city": "06",
      "dist": "82",
      "name": "莱阳市",
      "level": 3
    },
    {
      "code": "370683",
      "prov": "37",
      "city": "06",
      "dist": "83",
      "name": "莱州市",
      "level": 3
    },
    {
      "code": "370684",
      "prov": "37",
      "city": "06",
      "dist": "84",
      "name": "蓬莱市",
      "level": 3
    },
    {
      "code": "370685",
      "prov": "37",
      "city": "06",
      "dist": "85",
      "name": "招远市",
      "level": 3
    },
    {
      "code": "370686",
      "prov": "37",
      "city": "06",
      "dist": "86",
      "name": "栖霞市",
      "level": 3
    },
    {
      "code": "370687",
      "prov": "37",
      "city": "06",
      "dist": "87",
      "name": "海阳市",
      "level": 3
    },
    {
      "code": "370700",
      "prov": "37",
      "city": "07",
      "dist": "00",
      "name": "潍坊市",
      "level": 2
    },
    {
      "code": "370701",
      "prov": "37",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370702",
      "prov": "37",
      "city": "07",
      "dist": "02",
      "name": "潍城区",
      "level": 3
    },
    {
      "code": "370703",
      "prov": "37",
      "city": "07",
      "dist": "03",
      "name": "寒亭区",
      "level": 3
    },
    {
      "code": "370704",
      "prov": "37",
      "city": "07",
      "dist": "04",
      "name": "坊子区",
      "level": 3
    },
    {
      "code": "370705",
      "prov": "37",
      "city": "07",
      "dist": "05",
      "name": "奎文区",
      "level": 3
    },
    {
      "code": "370724",
      "prov": "37",
      "city": "07",
      "dist": "24",
      "name": "临朐县",
      "level": 3
    },
    {
      "code": "370725",
      "prov": "37",
      "city": "07",
      "dist": "25",
      "name": "昌乐县",
      "level": 3
    },
    {
      "code": "370781",
      "prov": "37",
      "city": "07",
      "dist": "81",
      "name": "青州市",
      "level": 3
    },
    {
      "code": "370782",
      "prov": "37",
      "city": "07",
      "dist": "82",
      "name": "诸城市",
      "level": 3
    },
    {
      "code": "370783",
      "prov": "37",
      "city": "07",
      "dist": "83",
      "name": "寿光市",
      "level": 3
    },
    {
      "code": "370784",
      "prov": "37",
      "city": "07",
      "dist": "84",
      "name": "安丘市",
      "level": 3
    },
    {
      "code": "370785",
      "prov": "37",
      "city": "07",
      "dist": "85",
      "name": "高密市",
      "level": 3
    },
    {
      "code": "370786",
      "prov": "37",
      "city": "07",
      "dist": "86",
      "name": "昌邑市",
      "level": 3
    },
    {
      "code": "370800",
      "prov": "37",
      "city": "08",
      "dist": "00",
      "name": "济宁市",
      "level": 2
    },
    {
      "code": "370801",
      "prov": "37",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370811",
      "prov": "37",
      "city": "08",
      "dist": "11",
      "name": "任城区",
      "level": 3
    },
    {
      "code": "370812",
      "prov": "37",
      "city": "08",
      "dist": "12",
      "name": "兖州区",
      "level": 3
    },
    {
      "code": "370826",
      "prov": "37",
      "city": "08",
      "dist": "26",
      "name": "微山县",
      "level": 3
    },
    {
      "code": "370827",
      "prov": "37",
      "city": "08",
      "dist": "27",
      "name": "鱼台县",
      "level": 3
    },
    {
      "code": "370828",
      "prov": "37",
      "city": "08",
      "dist": "28",
      "name": "金乡县",
      "level": 3
    },
    {
      "code": "370829",
      "prov": "37",
      "city": "08",
      "dist": "29",
      "name": "嘉祥县",
      "level": 3
    },
    {
      "code": "370830",
      "prov": "37",
      "city": "08",
      "dist": "30",
      "name": "汶上县",
      "level": 3
    },
    {
      "code": "370831",
      "prov": "37",
      "city": "08",
      "dist": "31",
      "name": "泗水县",
      "level": 3
    },
    {
      "code": "370832",
      "prov": "37",
      "city": "08",
      "dist": "32",
      "name": "梁山县",
      "level": 3
    },
    {
      "code": "370881",
      "prov": "37",
      "city": "08",
      "dist": "81",
      "name": "曲阜市",
      "level": 3
    },
    {
      "code": "370883",
      "prov": "37",
      "city": "08",
      "dist": "83",
      "name": "邹城市",
      "level": 3
    },
    {
      "code": "370900",
      "prov": "37",
      "city": "09",
      "dist": "00",
      "name": "泰安市",
      "level": 2
    },
    {
      "code": "370901",
      "prov": "37",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "370902",
      "prov": "37",
      "city": "09",
      "dist": "02",
      "name": "泰山区",
      "level": 3
    },
    {
      "code": "370911",
      "prov": "37",
      "city": "09",
      "dist": "11",
      "name": "岱岳区",
      "level": 3
    },
    {
      "code": "370921",
      "prov": "37",
      "city": "09",
      "dist": "21",
      "name": "宁阳县",
      "level": 3
    },
    {
      "code": "370923",
      "prov": "37",
      "city": "09",
      "dist": "23",
      "name": "东平县",
      "level": 3
    },
    {
      "code": "370982",
      "prov": "37",
      "city": "09",
      "dist": "82",
      "name": "新泰市",
      "level": 3
    },
    {
      "code": "370983",
      "prov": "37",
      "city": "09",
      "dist": "83",
      "name": "肥城市",
      "level": 3
    },
    {
      "code": "371000",
      "prov": "37",
      "city": "10",
      "dist": "00",
      "name": "威海市",
      "level": 2
    },
    {
      "code": "371001",
      "prov": "37",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371002",
      "prov": "37",
      "city": "10",
      "dist": "02",
      "name": "环翠区",
      "level": 3
    },
    {
      "code": "371003",
      "prov": "37",
      "city": "10",
      "dist": "03",
      "name": "文登区",
      "level": 3
    },
    {
      "code": "371082",
      "prov": "37",
      "city": "10",
      "dist": "82",
      "name": "荣成市",
      "level": 3
    },
    {
      "code": "371083",
      "prov": "37",
      "city": "10",
      "dist": "83",
      "name": "乳山市",
      "level": 3
    },
    {
      "code": "371100",
      "prov": "37",
      "city": "11",
      "dist": "00",
      "name": "日照市",
      "level": 2
    },
    {
      "code": "371101",
      "prov": "37",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371102",
      "prov": "37",
      "city": "11",
      "dist": "02",
      "name": "东港区",
      "level": 3
    },
    {
      "code": "371103",
      "prov": "37",
      "city": "11",
      "dist": "03",
      "name": "岚山区",
      "level": 3
    },
    {
      "code": "371121",
      "prov": "37",
      "city": "11",
      "dist": "21",
      "name": "五莲县",
      "level": 3
    },
    {
      "code": "371122",
      "prov": "37",
      "city": "11",
      "dist": "22",
      "name": "莒县",
      "level": 3
    },
    {
      "code": "371200",
      "prov": "37",
      "city": "12",
      "dist": "00",
      "name": "莱芜市",
      "level": 2
    },
    {
      "code": "371201",
      "prov": "37",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371202",
      "prov": "37",
      "city": "12",
      "dist": "02",
      "name": "莱城区",
      "level": 3
    },
    {
      "code": "371203",
      "prov": "37",
      "city": "12",
      "dist": "03",
      "name": "钢城区",
      "level": 3
    },
    {
      "code": "371300",
      "prov": "37",
      "city": "13",
      "dist": "00",
      "name": "临沂市",
      "level": 2
    },
    {
      "code": "371301",
      "prov": "37",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371302",
      "prov": "37",
      "city": "13",
      "dist": "02",
      "name": "兰山区",
      "level": 3
    },
    {
      "code": "371311",
      "prov": "37",
      "city": "13",
      "dist": "11",
      "name": "罗庄区",
      "level": 3
    },
    {
      "code": "371312",
      "prov": "37",
      "city": "13",
      "dist": "12",
      "name": "河东区",
      "level": 3
    },
    {
      "code": "371321",
      "prov": "37",
      "city": "13",
      "dist": "21",
      "name": "沂南县",
      "level": 3
    },
    {
      "code": "371322",
      "prov": "37",
      "city": "13",
      "dist": "22",
      "name": "郯城县",
      "level": 3
    },
    {
      "code": "371323",
      "prov": "37",
      "city": "13",
      "dist": "23",
      "name": "沂水县",
      "level": 3
    },
    {
      "code": "371324",
      "prov": "37",
      "city": "13",
      "dist": "24",
      "name": "兰陵县",
      "level": 3
    },
    {
      "code": "371325",
      "prov": "37",
      "city": "13",
      "dist": "25",
      "name": "费县",
      "level": 3
    },
    {
      "code": "371326",
      "prov": "37",
      "city": "13",
      "dist": "26",
      "name": "平邑县",
      "level": 3
    },
    {
      "code": "371327",
      "prov": "37",
      "city": "13",
      "dist": "27",
      "name": "莒南县",
      "level": 3
    },
    {
      "code": "371328",
      "prov": "37",
      "city": "13",
      "dist": "28",
      "name": "蒙阴县",
      "level": 3
    },
    {
      "code": "371329",
      "prov": "37",
      "city": "13",
      "dist": "29",
      "name": "临沭县",
      "level": 3
    },
    {
      "code": "371400",
      "prov": "37",
      "city": "14",
      "dist": "00",
      "name": "德州市",
      "level": 2
    },
    {
      "code": "371401",
      "prov": "37",
      "city": "14",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371402",
      "prov": "37",
      "city": "14",
      "dist": "02",
      "name": "德城区",
      "level": 3
    },
    {
      "code": "371403",
      "prov": "37",
      "city": "14",
      "dist": "03",
      "name": "陵城区",
      "level": 3
    },
    {
      "code": "371422",
      "prov": "37",
      "city": "14",
      "dist": "22",
      "name": "宁津县",
      "level": 3
    },
    {
      "code": "371423",
      "prov": "37",
      "city": "14",
      "dist": "23",
      "name": "庆云县",
      "level": 3
    },
    {
      "code": "371424",
      "prov": "37",
      "city": "14",
      "dist": "24",
      "name": "临邑县",
      "level": 3
    },
    {
      "code": "371425",
      "prov": "37",
      "city": "14",
      "dist": "25",
      "name": "齐河县",
      "level": 3
    },
    {
      "code": "371426",
      "prov": "37",
      "city": "14",
      "dist": "26",
      "name": "平原县",
      "level": 3
    },
    {
      "code": "371427",
      "prov": "37",
      "city": "14",
      "dist": "27",
      "name": "夏津县",
      "level": 3
    },
    {
      "code": "371428",
      "prov": "37",
      "city": "14",
      "dist": "28",
      "name": "武城县",
      "level": 3
    },
    {
      "code": "371481",
      "prov": "37",
      "city": "14",
      "dist": "81",
      "name": "乐陵市",
      "level": 3
    },
    {
      "code": "371482",
      "prov": "37",
      "city": "14",
      "dist": "82",
      "name": "禹城市",
      "level": 3
    },
    {
      "code": "371500",
      "prov": "37",
      "city": "15",
      "dist": "00",
      "name": "聊城市",
      "level": 2
    },
    {
      "code": "371501",
      "prov": "37",
      "city": "15",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371502",
      "prov": "37",
      "city": "15",
      "dist": "02",
      "name": "东昌府区",
      "level": 3
    },
    {
      "code": "371521",
      "prov": "37",
      "city": "15",
      "dist": "21",
      "name": "阳谷县",
      "level": 3
    },
    {
      "code": "371522",
      "prov": "37",
      "city": "15",
      "dist": "22",
      "name": "莘县",
      "level": 3
    },
    {
      "code": "371523",
      "prov": "37",
      "city": "15",
      "dist": "23",
      "name": "茌平县",
      "level": 3
    },
    {
      "code": "371524",
      "prov": "37",
      "city": "15",
      "dist": "24",
      "name": "东阿县",
      "level": 3
    },
    {
      "code": "371525",
      "prov": "37",
      "city": "15",
      "dist": "25",
      "name": "冠县",
      "level": 3
    },
    {
      "code": "371526",
      "prov": "37",
      "city": "15",
      "dist": "26",
      "name": "高唐县",
      "level": 3
    },
    {
      "code": "371581",
      "prov": "37",
      "city": "15",
      "dist": "81",
      "name": "临清市",
      "level": 3
    },
    {
      "code": "371600",
      "prov": "37",
      "city": "16",
      "dist": "00",
      "name": "滨州市",
      "level": 2
    },
    {
      "code": "371601",
      "prov": "37",
      "city": "16",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371602",
      "prov": "37",
      "city": "16",
      "dist": "02",
      "name": "滨城区",
      "level": 3
    },
    {
      "code": "371603",
      "prov": "37",
      "city": "16",
      "dist": "03",
      "name": "沾化区",
      "level": 3
    },
    {
      "code": "371621",
      "prov": "37",
      "city": "16",
      "dist": "21",
      "name": "惠民县",
      "level": 3
    },
    {
      "code": "371622",
      "prov": "37",
      "city": "16",
      "dist": "22",
      "name": "阳信县",
      "level": 3
    },
    {
      "code": "371623",
      "prov": "37",
      "city": "16",
      "dist": "23",
      "name": "无棣县",
      "level": 3
    },
    {
      "code": "371625",
      "prov": "37",
      "city": "16",
      "dist": "25",
      "name": "博兴县",
      "level": 3
    },
    {
      "code": "371626",
      "prov": "37",
      "city": "16",
      "dist": "26",
      "name": "邹平县",
      "level": 3
    },
    {
      "code": "371700",
      "prov": "37",
      "city": "17",
      "dist": "00",
      "name": "菏泽市",
      "level": 2
    },
    {
      "code": "371701",
      "prov": "37",
      "city": "17",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "371702",
      "prov": "37",
      "city": "17",
      "dist": "02",
      "name": "牡丹区",
      "level": 3
    },
    {
      "code": "371721",
      "prov": "37",
      "city": "17",
      "dist": "21",
      "name": "曹县",
      "level": 3
    },
    {
      "code": "371722",
      "prov": "37",
      "city": "17",
      "dist": "22",
      "name": "单县",
      "level": 3
    },
    {
      "code": "371723",
      "prov": "37",
      "city": "17",
      "dist": "23",
      "name": "成武县",
      "level": 3
    },
    {
      "code": "371724",
      "prov": "37",
      "city": "17",
      "dist": "24",
      "name": "巨野县",
      "level": 3
    },
    {
      "code": "371725",
      "prov": "37",
      "city": "17",
      "dist": "25",
      "name": "郓城县",
      "level": 3
    },
    {
      "code": "371726",
      "prov": "37",
      "city": "17",
      "dist": "26",
      "name": "鄄城县",
      "level": 3
    },
    {
      "code": "371727",
      "prov": "37",
      "city": "17",
      "dist": "27",
      "name": "定陶县",
      "level": 3
    },
    {
      "code": "371728",
      "prov": "37",
      "city": "17",
      "dist": "28",
      "name": "东明县",
      "level": 3
    },
    {
      "code": "410000",
      "prov": "41",
      "city": "00",
      "dist": "00",
      "name": "河南省",
      "level": 1
    },
    {
      "code": "410100",
      "prov": "41",
      "city": "01",
      "dist": "00",
      "name": "郑州市",
      "level": 2
    },
    {
      "code": "410101",
      "prov": "41",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410102",
      "prov": "41",
      "city": "01",
      "dist": "02",
      "name": "中原区",
      "level": 3
    },
    {
      "code": "410103",
      "prov": "41",
      "city": "01",
      "dist": "03",
      "name": "二七区",
      "level": 3
    },
    {
      "code": "410104",
      "prov": "41",
      "city": "01",
      "dist": "04",
      "name": "管城回族区",
      "level": 3
    },
    {
      "code": "410105",
      "prov": "41",
      "city": "01",
      "dist": "05",
      "name": "金水区",
      "level": 3
    },
    {
      "code": "410106",
      "prov": "41",
      "city": "01",
      "dist": "06",
      "name": "上街区",
      "level": 3
    },
    {
      "code": "410108",
      "prov": "41",
      "city": "01",
      "dist": "08",
      "name": "惠济区",
      "level": 3
    },
    {
      "code": "410122",
      "prov": "41",
      "city": "01",
      "dist": "22",
      "name": "中牟县",
      "level": 3
    },
    {
      "code": "410181",
      "prov": "41",
      "city": "01",
      "dist": "81",
      "name": "巩义市",
      "level": 3
    },
    {
      "code": "410182",
      "prov": "41",
      "city": "01",
      "dist": "82",
      "name": "荥阳市",
      "level": 3
    },
    {
      "code": "410183",
      "prov": "41",
      "city": "01",
      "dist": "83",
      "name": "新密市",
      "level": 3
    },
    {
      "code": "410184",
      "prov": "41",
      "city": "01",
      "dist": "84",
      "name": "新郑市",
      "level": 3
    },
    {
      "code": "410185",
      "prov": "41",
      "city": "01",
      "dist": "85",
      "name": "登封市",
      "level": 3
    },
    {
      "code": "410200",
      "prov": "41",
      "city": "02",
      "dist": "00",
      "name": "开封市",
      "level": 2
    },
    {
      "code": "410201",
      "prov": "41",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410202",
      "prov": "41",
      "city": "02",
      "dist": "02",
      "name": "龙亭区",
      "level": 3
    },
    {
      "code": "410203",
      "prov": "41",
      "city": "02",
      "dist": "03",
      "name": "顺河回族区",
      "level": 3
    },
    {
      "code": "410204",
      "prov": "41",
      "city": "02",
      "dist": "04",
      "name": "鼓楼区",
      "level": 3
    },
    {
      "code": "410205",
      "prov": "41",
      "city": "02",
      "dist": "05",
      "name": "禹王台区",
      "level": 3
    },
    {
      "code": "410211",
      "prov": "41",
      "city": "02",
      "dist": "11",
      "name": "金明区",
      "level": 3
    },
    {
      "code": "410221",
      "prov": "41",
      "city": "02",
      "dist": "21",
      "name": "杞县",
      "level": 3
    },
    {
      "code": "410222",
      "prov": "41",
      "city": "02",
      "dist": "22",
      "name": "通许县",
      "level": 3
    },
    {
      "code": "410223",
      "prov": "41",
      "city": "02",
      "dist": "23",
      "name": "尉氏县",
      "level": 3
    },
    {
      "code": "410224",
      "prov": "41",
      "city": "02",
      "dist": "24",
      "name": "开封县",
      "level": 3
    },
    {
      "code": "410225",
      "prov": "41",
      "city": "02",
      "dist": "25",
      "name": "兰考县",
      "level": 3
    },
    {
      "code": "410300",
      "prov": "41",
      "city": "03",
      "dist": "00",
      "name": "洛阳市",
      "level": 2
    },
    {
      "code": "410301",
      "prov": "41",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410302",
      "prov": "41",
      "city": "03",
      "dist": "02",
      "name": "老城区",
      "level": 3
    },
    {
      "code": "410303",
      "prov": "41",
      "city": "03",
      "dist": "03",
      "name": "西工区",
      "level": 3
    },
    {
      "code": "410304",
      "prov": "41",
      "city": "03",
      "dist": "04",
      "name": "瀍河回族区",
      "level": 3
    },
    {
      "code": "410305",
      "prov": "41",
      "city": "03",
      "dist": "05",
      "name": "涧西区",
      "level": 3
    },
    {
      "code": "410306",
      "prov": "41",
      "city": "03",
      "dist": "06",
      "name": "吉利区",
      "level": 3
    },
    {
      "code": "410311",
      "prov": "41",
      "city": "03",
      "dist": "11",
      "name": "洛龙区",
      "level": 3
    },
    {
      "code": "410322",
      "prov": "41",
      "city": "03",
      "dist": "22",
      "name": "孟津县",
      "level": 3
    },
    {
      "code": "410323",
      "prov": "41",
      "city": "03",
      "dist": "23",
      "name": "新安县",
      "level": 3
    },
    {
      "code": "410324",
      "prov": "41",
      "city": "03",
      "dist": "24",
      "name": "栾川县",
      "level": 3
    },
    {
      "code": "410325",
      "prov": "41",
      "city": "03",
      "dist": "25",
      "name": "嵩县",
      "level": 3
    },
    {
      "code": "410326",
      "prov": "41",
      "city": "03",
      "dist": "26",
      "name": "汝阳县",
      "level": 3
    },
    {
      "code": "410327",
      "prov": "41",
      "city": "03",
      "dist": "27",
      "name": "宜阳县",
      "level": 3
    },
    {
      "code": "410328",
      "prov": "41",
      "city": "03",
      "dist": "28",
      "name": "洛宁县",
      "level": 3
    },
    {
      "code": "410329",
      "prov": "41",
      "city": "03",
      "dist": "29",
      "name": "伊川县",
      "level": 3
    },
    {
      "code": "410381",
      "prov": "41",
      "city": "03",
      "dist": "81",
      "name": "偃师市",
      "level": 3
    },
    {
      "code": "410400",
      "prov": "41",
      "city": "04",
      "dist": "00",
      "name": "平顶山市",
      "level": 2
    },
    {
      "code": "410401",
      "prov": "41",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410402",
      "prov": "41",
      "city": "04",
      "dist": "02",
      "name": "新华区",
      "level": 3
    },
    {
      "code": "410403",
      "prov": "41",
      "city": "04",
      "dist": "03",
      "name": "卫东区",
      "level": 3
    },
    {
      "code": "410404",
      "prov": "41",
      "city": "04",
      "dist": "04",
      "name": "石龙区",
      "level": 3
    },
    {
      "code": "410411",
      "prov": "41",
      "city": "04",
      "dist": "11",
      "name": "湛河区",
      "level": 3
    },
    {
      "code": "410421",
      "prov": "41",
      "city": "04",
      "dist": "21",
      "name": "宝丰县",
      "level": 3
    },
    {
      "code": "410422",
      "prov": "41",
      "city": "04",
      "dist": "22",
      "name": "叶县",
      "level": 3
    },
    {
      "code": "410423",
      "prov": "41",
      "city": "04",
      "dist": "23",
      "name": "鲁山县",
      "level": 3
    },
    {
      "code": "410425",
      "prov": "41",
      "city": "04",
      "dist": "25",
      "name": "郏县",
      "level": 3
    },
    {
      "code": "410481",
      "prov": "41",
      "city": "04",
      "dist": "81",
      "name": "舞钢市",
      "level": 3
    },
    {
      "code": "410482",
      "prov": "41",
      "city": "04",
      "dist": "82",
      "name": "汝州市",
      "level": 3
    },
    {
      "code": "410500",
      "prov": "41",
      "city": "05",
      "dist": "00",
      "name": "安阳市",
      "level": 2
    },
    {
      "code": "410501",
      "prov": "41",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410502",
      "prov": "41",
      "city": "05",
      "dist": "02",
      "name": "文峰区",
      "level": 3
    },
    {
      "code": "410503",
      "prov": "41",
      "city": "05",
      "dist": "03",
      "name": "北关区",
      "level": 3
    },
    {
      "code": "410505",
      "prov": "41",
      "city": "05",
      "dist": "05",
      "name": "殷都区",
      "level": 3
    },
    {
      "code": "410506",
      "prov": "41",
      "city": "05",
      "dist": "06",
      "name": "龙安区",
      "level": 3
    },
    {
      "code": "410522",
      "prov": "41",
      "city": "05",
      "dist": "22",
      "name": "安阳县",
      "level": 3
    },
    {
      "code": "410523",
      "prov": "41",
      "city": "05",
      "dist": "23",
      "name": "汤阴县",
      "level": 3
    },
    {
      "code": "410526",
      "prov": "41",
      "city": "05",
      "dist": "26",
      "name": "滑县",
      "level": 3
    },
    {
      "code": "410527",
      "prov": "41",
      "city": "05",
      "dist": "27",
      "name": "内黄县",
      "level": 3
    },
    {
      "code": "410581",
      "prov": "41",
      "city": "05",
      "dist": "81",
      "name": "林州市",
      "level": 3
    },
    {
      "code": "410600",
      "prov": "41",
      "city": "06",
      "dist": "00",
      "name": "鹤壁市",
      "level": 2
    },
    {
      "code": "410601",
      "prov": "41",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410602",
      "prov": "41",
      "city": "06",
      "dist": "02",
      "name": "鹤山区",
      "level": 3
    },
    {
      "code": "410603",
      "prov": "41",
      "city": "06",
      "dist": "03",
      "name": "山城区",
      "level": 3
    },
    {
      "code": "410611",
      "prov": "41",
      "city": "06",
      "dist": "11",
      "name": "淇滨区",
      "level": 3
    },
    {
      "code": "410621",
      "prov": "41",
      "city": "06",
      "dist": "21",
      "name": "浚县",
      "level": 3
    },
    {
      "code": "410622",
      "prov": "41",
      "city": "06",
      "dist": "22",
      "name": "淇县",
      "level": 3
    },
    {
      "code": "410700",
      "prov": "41",
      "city": "07",
      "dist": "00",
      "name": "新乡市",
      "level": 2
    },
    {
      "code": "410701",
      "prov": "41",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410702",
      "prov": "41",
      "city": "07",
      "dist": "02",
      "name": "红旗区",
      "level": 3
    },
    {
      "code": "410703",
      "prov": "41",
      "city": "07",
      "dist": "03",
      "name": "卫滨区",
      "level": 3
    },
    {
      "code": "410704",
      "prov": "41",
      "city": "07",
      "dist": "04",
      "name": "凤泉区",
      "level": 3
    },
    {
      "code": "410711",
      "prov": "41",
      "city": "07",
      "dist": "11",
      "name": "牧野区",
      "level": 3
    },
    {
      "code": "410721",
      "prov": "41",
      "city": "07",
      "dist": "21",
      "name": "新乡县",
      "level": 3
    },
    {
      "code": "410724",
      "prov": "41",
      "city": "07",
      "dist": "24",
      "name": "获嘉县",
      "level": 3
    },
    {
      "code": "410725",
      "prov": "41",
      "city": "07",
      "dist": "25",
      "name": "原阳县",
      "level": 3
    },
    {
      "code": "410726",
      "prov": "41",
      "city": "07",
      "dist": "26",
      "name": "延津县",
      "level": 3
    },
    {
      "code": "410727",
      "prov": "41",
      "city": "07",
      "dist": "27",
      "name": "封丘县",
      "level": 3
    },
    {
      "code": "410728",
      "prov": "41",
      "city": "07",
      "dist": "28",
      "name": "长垣县",
      "level": 3
    },
    {
      "code": "410781",
      "prov": "41",
      "city": "07",
      "dist": "81",
      "name": "卫辉市",
      "level": 3
    },
    {
      "code": "410782",
      "prov": "41",
      "city": "07",
      "dist": "82",
      "name": "辉县市",
      "level": 3
    },
    {
      "code": "410800",
      "prov": "41",
      "city": "08",
      "dist": "00",
      "name": "焦作市",
      "level": 2
    },
    {
      "code": "410801",
      "prov": "41",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410802",
      "prov": "41",
      "city": "08",
      "dist": "02",
      "name": "解放区",
      "level": 3
    },
    {
      "code": "410803",
      "prov": "41",
      "city": "08",
      "dist": "03",
      "name": "中站区",
      "level": 3
    },
    {
      "code": "410804",
      "prov": "41",
      "city": "08",
      "dist": "04",
      "name": "马村区",
      "level": 3
    },
    {
      "code": "410811",
      "prov": "41",
      "city": "08",
      "dist": "11",
      "name": "山阳区",
      "level": 3
    },
    {
      "code": "410821",
      "prov": "41",
      "city": "08",
      "dist": "21",
      "name": "修武县",
      "level": 3
    },
    {
      "code": "410822",
      "prov": "41",
      "city": "08",
      "dist": "22",
      "name": "博爱县",
      "level": 3
    },
    {
      "code": "410823",
      "prov": "41",
      "city": "08",
      "dist": "23",
      "name": "武陟县",
      "level": 3
    },
    {
      "code": "410825",
      "prov": "41",
      "city": "08",
      "dist": "25",
      "name": "温县",
      "level": 3
    },
    {
      "code": "410882",
      "prov": "41",
      "city": "08",
      "dist": "82",
      "name": "沁阳市",
      "level": 3
    },
    {
      "code": "410883",
      "prov": "41",
      "city": "08",
      "dist": "83",
      "name": "孟州市",
      "level": 3
    },
    {
      "code": "410900",
      "prov": "41",
      "city": "09",
      "dist": "00",
      "name": "濮阳市",
      "level": 2
    },
    {
      "code": "410901",
      "prov": "41",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "410902",
      "prov": "41",
      "city": "09",
      "dist": "02",
      "name": "华龙区",
      "level": 3
    },
    {
      "code": "410922",
      "prov": "41",
      "city": "09",
      "dist": "22",
      "name": "清丰县",
      "level": 3
    },
    {
      "code": "410923",
      "prov": "41",
      "city": "09",
      "dist": "23",
      "name": "南乐县",
      "level": 3
    },
    {
      "code": "410926",
      "prov": "41",
      "city": "09",
      "dist": "26",
      "name": "范县",
      "level": 3
    },
    {
      "code": "410927",
      "prov": "41",
      "city": "09",
      "dist": "27",
      "name": "台前县",
      "level": 3
    },
    {
      "code": "410928",
      "prov": "41",
      "city": "09",
      "dist": "28",
      "name": "濮阳县",
      "level": 3
    },
    {
      "code": "411000",
      "prov": "41",
      "city": "10",
      "dist": "00",
      "name": "许昌市",
      "level": 2
    },
    {
      "code": "411001",
      "prov": "41",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411002",
      "prov": "41",
      "city": "10",
      "dist": "02",
      "name": "魏都区",
      "level": 3
    },
    {
      "code": "411023",
      "prov": "41",
      "city": "10",
      "dist": "23",
      "name": "许昌县",
      "level": 3
    },
    {
      "code": "411024",
      "prov": "41",
      "city": "10",
      "dist": "24",
      "name": "鄢陵县",
      "level": 3
    },
    {
      "code": "411025",
      "prov": "41",
      "city": "10",
      "dist": "25",
      "name": "襄城县",
      "level": 3
    },
    {
      "code": "411081",
      "prov": "41",
      "city": "10",
      "dist": "81",
      "name": "禹州市",
      "level": 3
    },
    {
      "code": "411082",
      "prov": "41",
      "city": "10",
      "dist": "82",
      "name": "长葛市",
      "level": 3
    },
    {
      "code": "411100",
      "prov": "41",
      "city": "11",
      "dist": "00",
      "name": "漯河市",
      "level": 2
    },
    {
      "code": "411101",
      "prov": "41",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411102",
      "prov": "41",
      "city": "11",
      "dist": "02",
      "name": "源汇区",
      "level": 3
    },
    {
      "code": "411103",
      "prov": "41",
      "city": "11",
      "dist": "03",
      "name": "郾城区",
      "level": 3
    },
    {
      "code": "411104",
      "prov": "41",
      "city": "11",
      "dist": "04",
      "name": "召陵区",
      "level": 3
    },
    {
      "code": "411121",
      "prov": "41",
      "city": "11",
      "dist": "21",
      "name": "舞阳县",
      "level": 3
    },
    {
      "code": "411122",
      "prov": "41",
      "city": "11",
      "dist": "22",
      "name": "临颍县",
      "level": 3
    },
    {
      "code": "411200",
      "prov": "41",
      "city": "12",
      "dist": "00",
      "name": "三门峡市",
      "level": 2
    },
    {
      "code": "411201",
      "prov": "41",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411202",
      "prov": "41",
      "city": "12",
      "dist": "02",
      "name": "湖滨区",
      "level": 3
    },
    {
      "code": "411221",
      "prov": "41",
      "city": "12",
      "dist": "21",
      "name": "渑池县",
      "level": 3
    },
    {
      "code": "411222",
      "prov": "41",
      "city": "12",
      "dist": "22",
      "name": "陕县",
      "level": 3
    },
    {
      "code": "411224",
      "prov": "41",
      "city": "12",
      "dist": "24",
      "name": "卢氏县",
      "level": 3
    },
    {
      "code": "411281",
      "prov": "41",
      "city": "12",
      "dist": "81",
      "name": "义马市",
      "level": 3
    },
    {
      "code": "411282",
      "prov": "41",
      "city": "12",
      "dist": "82",
      "name": "灵宝市",
      "level": 3
    },
    {
      "code": "411300",
      "prov": "41",
      "city": "13",
      "dist": "00",
      "name": "南阳市",
      "level": 2
    },
    {
      "code": "411301",
      "prov": "41",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411302",
      "prov": "41",
      "city": "13",
      "dist": "02",
      "name": "宛城区",
      "level": 3
    },
    {
      "code": "411303",
      "prov": "41",
      "city": "13",
      "dist": "03",
      "name": "卧龙区",
      "level": 3
    },
    {
      "code": "411321",
      "prov": "41",
      "city": "13",
      "dist": "21",
      "name": "南召县",
      "level": 3
    },
    {
      "code": "411322",
      "prov": "41",
      "city": "13",
      "dist": "22",
      "name": "方城县",
      "level": 3
    },
    {
      "code": "411323",
      "prov": "41",
      "city": "13",
      "dist": "23",
      "name": "西峡县",
      "level": 3
    },
    {
      "code": "411324",
      "prov": "41",
      "city": "13",
      "dist": "24",
      "name": "镇平县",
      "level": 3
    },
    {
      "code": "411325",
      "prov": "41",
      "city": "13",
      "dist": "25",
      "name": "内乡县",
      "level": 3
    },
    {
      "code": "411326",
      "prov": "41",
      "city": "13",
      "dist": "26",
      "name": "淅川县",
      "level": 3
    },
    {
      "code": "411327",
      "prov": "41",
      "city": "13",
      "dist": "27",
      "name": "社旗县",
      "level": 3
    },
    {
      "code": "411328",
      "prov": "41",
      "city": "13",
      "dist": "28",
      "name": "唐河县",
      "level": 3
    },
    {
      "code": "411329",
      "prov": "41",
      "city": "13",
      "dist": "29",
      "name": "新野县",
      "level": 3
    },
    {
      "code": "411330",
      "prov": "41",
      "city": "13",
      "dist": "30",
      "name": "桐柏县",
      "level": 3
    },
    {
      "code": "411381",
      "prov": "41",
      "city": "13",
      "dist": "81",
      "name": "邓州市",
      "level": 3
    },
    {
      "code": "411400",
      "prov": "41",
      "city": "14",
      "dist": "00",
      "name": "商丘市",
      "level": 2
    },
    {
      "code": "411401",
      "prov": "41",
      "city": "14",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411402",
      "prov": "41",
      "city": "14",
      "dist": "02",
      "name": "梁园区",
      "level": 3
    },
    {
      "code": "411403",
      "prov": "41",
      "city": "14",
      "dist": "03",
      "name": "睢阳区",
      "level": 3
    },
    {
      "code": "411421",
      "prov": "41",
      "city": "14",
      "dist": "21",
      "name": "民权县",
      "level": 3
    },
    {
      "code": "411422",
      "prov": "41",
      "city": "14",
      "dist": "22",
      "name": "睢县",
      "level": 3
    },
    {
      "code": "411423",
      "prov": "41",
      "city": "14",
      "dist": "23",
      "name": "宁陵县",
      "level": 3
    },
    {
      "code": "411424",
      "prov": "41",
      "city": "14",
      "dist": "24",
      "name": "柘城县",
      "level": 3
    },
    {
      "code": "411425",
      "prov": "41",
      "city": "14",
      "dist": "25",
      "name": "虞城县",
      "level": 3
    },
    {
      "code": "411426",
      "prov": "41",
      "city": "14",
      "dist": "26",
      "name": "夏邑县",
      "level": 3
    },
    {
      "code": "411481",
      "prov": "41",
      "city": "14",
      "dist": "81",
      "name": "永城市",
      "level": 3
    },
    {
      "code": "411500",
      "prov": "41",
      "city": "15",
      "dist": "00",
      "name": "信阳市",
      "level": 2
    },
    {
      "code": "411501",
      "prov": "41",
      "city": "15",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411502",
      "prov": "41",
      "city": "15",
      "dist": "02",
      "name": "浉河区",
      "level": 3
    },
    {
      "code": "411503",
      "prov": "41",
      "city": "15",
      "dist": "03",
      "name": "平桥区",
      "level": 3
    },
    {
      "code": "411521",
      "prov": "41",
      "city": "15",
      "dist": "21",
      "name": "罗山县",
      "level": 3
    },
    {
      "code": "411522",
      "prov": "41",
      "city": "15",
      "dist": "22",
      "name": "光山县",
      "level": 3
    },
    {
      "code": "411523",
      "prov": "41",
      "city": "15",
      "dist": "23",
      "name": "新县",
      "level": 3
    },
    {
      "code": "411524",
      "prov": "41",
      "city": "15",
      "dist": "24",
      "name": "商城县",
      "level": 3
    },
    {
      "code": "411525",
      "prov": "41",
      "city": "15",
      "dist": "25",
      "name": "固始县",
      "level": 3
    },
    {
      "code": "411526",
      "prov": "41",
      "city": "15",
      "dist": "26",
      "name": "潢川县",
      "level": 3
    },
    {
      "code": "411527",
      "prov": "41",
      "city": "15",
      "dist": "27",
      "name": "淮滨县",
      "level": 3
    },
    {
      "code": "411528",
      "prov": "41",
      "city": "15",
      "dist": "28",
      "name": "息县",
      "level": 3
    },
    {
      "code": "411600",
      "prov": "41",
      "city": "16",
      "dist": "00",
      "name": "周口市",
      "level": 2
    },
    {
      "code": "411601",
      "prov": "41",
      "city": "16",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411602",
      "prov": "41",
      "city": "16",
      "dist": "02",
      "name": "川汇区",
      "level": 3
    },
    {
      "code": "411621",
      "prov": "41",
      "city": "16",
      "dist": "21",
      "name": "扶沟县",
      "level": 3
    },
    {
      "code": "411622",
      "prov": "41",
      "city": "16",
      "dist": "22",
      "name": "西华县",
      "level": 3
    },
    {
      "code": "411623",
      "prov": "41",
      "city": "16",
      "dist": "23",
      "name": "商水县",
      "level": 3
    },
    {
      "code": "411624",
      "prov": "41",
      "city": "16",
      "dist": "24",
      "name": "沈丘县",
      "level": 3
    },
    {
      "code": "411625",
      "prov": "41",
      "city": "16",
      "dist": "25",
      "name": "郸城县",
      "level": 3
    },
    {
      "code": "411626",
      "prov": "41",
      "city": "16",
      "dist": "26",
      "name": "淮阳县",
      "level": 3
    },
    {
      "code": "411627",
      "prov": "41",
      "city": "16",
      "dist": "27",
      "name": "太康县",
      "level": 3
    },
    {
      "code": "411628",
      "prov": "41",
      "city": "16",
      "dist": "28",
      "name": "鹿邑县",
      "level": 3
    },
    {
      "code": "411681",
      "prov": "41",
      "city": "16",
      "dist": "81",
      "name": "项城市",
      "level": 3
    },
    {
      "code": "411700",
      "prov": "41",
      "city": "17",
      "dist": "00",
      "name": "驻马店市",
      "level": 2
    },
    {
      "code": "411701",
      "prov": "41",
      "city": "17",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "411702",
      "prov": "41",
      "city": "17",
      "dist": "02",
      "name": "驿城区",
      "level": 3
    },
    {
      "code": "411721",
      "prov": "41",
      "city": "17",
      "dist": "21",
      "name": "西平县",
      "level": 3
    },
    {
      "code": "411722",
      "prov": "41",
      "city": "17",
      "dist": "22",
      "name": "上蔡县",
      "level": 3
    },
    {
      "code": "411723",
      "prov": "41",
      "city": "17",
      "dist": "23",
      "name": "平舆县",
      "level": 3
    },
    {
      "code": "411724",
      "prov": "41",
      "city": "17",
      "dist": "24",
      "name": "正阳县",
      "level": 3
    },
    {
      "code": "411725",
      "prov": "41",
      "city": "17",
      "dist": "25",
      "name": "确山县",
      "level": 3
    },
    {
      "code": "411726",
      "prov": "41",
      "city": "17",
      "dist": "26",
      "name": "泌阳县",
      "level": 3
    },
    {
      "code": "411727",
      "prov": "41",
      "city": "17",
      "dist": "27",
      "name": "汝南县",
      "level": 3
    },
    {
      "code": "411728",
      "prov": "41",
      "city": "17",
      "dist": "28",
      "name": "遂平县",
      "level": 3
    },
    {
      "code": "411729",
      "prov": "41",
      "city": "17",
      "dist": "29",
      "name": "新蔡县",
      "level": 3
    },
    {
      "code": "419000",
      "prov": "41",
      "city": "90",
      "dist": "00",
      "name": "省直辖县级行政区划",
      "level": 2
    },
    {
      "code": "419001",
      "prov": "41",
      "city": "90",
      "dist": "01",
      "name": "济源市",
      "level": 3
    },
    {
      "code": "420000",
      "prov": "42",
      "city": "00",
      "dist": "00",
      "name": "湖北省",
      "level": 1
    },
    {
      "code": "420100",
      "prov": "42",
      "city": "01",
      "dist": "00",
      "name": "武汉市",
      "level": 2
    },
    {
      "code": "420101",
      "prov": "42",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420102",
      "prov": "42",
      "city": "01",
      "dist": "02",
      "name": "江岸区",
      "level": 3
    },
    {
      "code": "420103",
      "prov": "42",
      "city": "01",
      "dist": "03",
      "name": "江汉区",
      "level": 3
    },
    {
      "code": "420104",
      "prov": "42",
      "city": "01",
      "dist": "04",
      "name": "硚口区",
      "level": 3
    },
    {
      "code": "420105",
      "prov": "42",
      "city": "01",
      "dist": "05",
      "name": "汉阳区",
      "level": 3
    },
    {
      "code": "420106",
      "prov": "42",
      "city": "01",
      "dist": "06",
      "name": "武昌区",
      "level": 3
    },
    {
      "code": "420107",
      "prov": "42",
      "city": "01",
      "dist": "07",
      "name": "青山区",
      "level": 3
    },
    {
      "code": "420111",
      "prov": "42",
      "city": "01",
      "dist": "11",
      "name": "洪山区",
      "level": 3
    },
    {
      "code": "420112",
      "prov": "42",
      "city": "01",
      "dist": "12",
      "name": "东西湖区",
      "level": 3
    },
    {
      "code": "420113",
      "prov": "42",
      "city": "01",
      "dist": "13",
      "name": "汉南区",
      "level": 3
    },
    {
      "code": "420114",
      "prov": "42",
      "city": "01",
      "dist": "14",
      "name": "蔡甸区",
      "level": 3
    },
    {
      "code": "420115",
      "prov": "42",
      "city": "01",
      "dist": "15",
      "name": "江夏区",
      "level": 3
    },
    {
      "code": "420116",
      "prov": "42",
      "city": "01",
      "dist": "16",
      "name": "黄陂区",
      "level": 3
    },
    {
      "code": "420117",
      "prov": "42",
      "city": "01",
      "dist": "17",
      "name": "新洲区",
      "level": 3
    },
    {
      "code": "420200",
      "prov": "42",
      "city": "02",
      "dist": "00",
      "name": "黄石市",
      "level": 2
    },
    {
      "code": "420201",
      "prov": "42",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420202",
      "prov": "42",
      "city": "02",
      "dist": "02",
      "name": "黄石港区",
      "level": 3
    },
    {
      "code": "420203",
      "prov": "42",
      "city": "02",
      "dist": "03",
      "name": "西塞山区",
      "level": 3
    },
    {
      "code": "420204",
      "prov": "42",
      "city": "02",
      "dist": "04",
      "name": "下陆区",
      "level": 3
    },
    {
      "code": "420205",
      "prov": "42",
      "city": "02",
      "dist": "05",
      "name": "铁山区",
      "level": 3
    },
    {
      "code": "420222",
      "prov": "42",
      "city": "02",
      "dist": "22",
      "name": "阳新县",
      "level": 3
    },
    {
      "code": "420281",
      "prov": "42",
      "city": "02",
      "dist": "81",
      "name": "大冶市",
      "level": 3
    },
    {
      "code": "420300",
      "prov": "42",
      "city": "03",
      "dist": "00",
      "name": "十堰市",
      "level": 2
    },
    {
      "code": "420301",
      "prov": "42",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420302",
      "prov": "42",
      "city": "03",
      "dist": "02",
      "name": "茅箭区",
      "level": 3
    },
    {
      "code": "420303",
      "prov": "42",
      "city": "03",
      "dist": "03",
      "name": "张湾区",
      "level": 3
    },
    {
      "code": "420304",
      "prov": "42",
      "city": "03",
      "dist": "04",
      "name": "郧阳区",
      "level": 3
    },
    {
      "code": "420322",
      "prov": "42",
      "city": "03",
      "dist": "22",
      "name": "郧西县",
      "level": 3
    },
    {
      "code": "420323",
      "prov": "42",
      "city": "03",
      "dist": "23",
      "name": "竹山县",
      "level": 3
    },
    {
      "code": "420324",
      "prov": "42",
      "city": "03",
      "dist": "24",
      "name": "竹溪县",
      "level": 3
    },
    {
      "code": "420325",
      "prov": "42",
      "city": "03",
      "dist": "25",
      "name": "房县",
      "level": 3
    },
    {
      "code": "420381",
      "prov": "42",
      "city": "03",
      "dist": "81",
      "name": "丹江口市",
      "level": 3
    },
    {
      "code": "420500",
      "prov": "42",
      "city": "05",
      "dist": "00",
      "name": "宜昌市",
      "level": 2
    },
    {
      "code": "420501",
      "prov": "42",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420502",
      "prov": "42",
      "city": "05",
      "dist": "02",
      "name": "西陵区",
      "level": 3
    },
    {
      "code": "420503",
      "prov": "42",
      "city": "05",
      "dist": "03",
      "name": "伍家岗区",
      "level": 3
    },
    {
      "code": "420504",
      "prov": "42",
      "city": "05",
      "dist": "04",
      "name": "点军区",
      "level": 3
    },
    {
      "code": "420505",
      "prov": "42",
      "city": "05",
      "dist": "05",
      "name": "猇亭区",
      "level": 3
    },
    {
      "code": "420506",
      "prov": "42",
      "city": "05",
      "dist": "06",
      "name": "夷陵区",
      "level": 3
    },
    {
      "code": "420525",
      "prov": "42",
      "city": "05",
      "dist": "25",
      "name": "远安县",
      "level": 3
    },
    {
      "code": "420526",
      "prov": "42",
      "city": "05",
      "dist": "26",
      "name": "兴山县",
      "level": 3
    },
    {
      "code": "420527",
      "prov": "42",
      "city": "05",
      "dist": "27",
      "name": "秭归县",
      "level": 3
    },
    {
      "code": "420528",
      "prov": "42",
      "city": "05",
      "dist": "28",
      "name": "长阳土家族自治县",
      "level": 3
    },
    {
      "code": "420529",
      "prov": "42",
      "city": "05",
      "dist": "29",
      "name": "五峰土家族自治县",
      "level": 3
    },
    {
      "code": "420581",
      "prov": "42",
      "city": "05",
      "dist": "81",
      "name": "宜都市",
      "level": 3
    },
    {
      "code": "420582",
      "prov": "42",
      "city": "05",
      "dist": "82",
      "name": "当阳市",
      "level": 3
    },
    {
      "code": "420583",
      "prov": "42",
      "city": "05",
      "dist": "83",
      "name": "枝江市",
      "level": 3
    },
    {
      "code": "420600",
      "prov": "42",
      "city": "06",
      "dist": "00",
      "name": "襄阳市",
      "level": 2
    },
    {
      "code": "420601",
      "prov": "42",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420602",
      "prov": "42",
      "city": "06",
      "dist": "02",
      "name": "襄城区",
      "level": 3
    },
    {
      "code": "420606",
      "prov": "42",
      "city": "06",
      "dist": "06",
      "name": "樊城区",
      "level": 3
    },
    {
      "code": "420607",
      "prov": "42",
      "city": "06",
      "dist": "07",
      "name": "襄州区",
      "level": 3
    },
    {
      "code": "420624",
      "prov": "42",
      "city": "06",
      "dist": "24",
      "name": "南漳县",
      "level": 3
    },
    {
      "code": "420625",
      "prov": "42",
      "city": "06",
      "dist": "25",
      "name": "谷城县",
      "level": 3
    },
    {
      "code": "420626",
      "prov": "42",
      "city": "06",
      "dist": "26",
      "name": "保康县",
      "level": 3
    },
    {
      "code": "420682",
      "prov": "42",
      "city": "06",
      "dist": "82",
      "name": "老河口市",
      "level": 3
    },
    {
      "code": "420683",
      "prov": "42",
      "city": "06",
      "dist": "83",
      "name": "枣阳市",
      "level": 3
    },
    {
      "code": "420684",
      "prov": "42",
      "city": "06",
      "dist": "84",
      "name": "宜城市",
      "level": 3
    },
    {
      "code": "420700",
      "prov": "42",
      "city": "07",
      "dist": "00",
      "name": "鄂州市",
      "level": 2
    },
    {
      "code": "420701",
      "prov": "42",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420702",
      "prov": "42",
      "city": "07",
      "dist": "02",
      "name": "梁子湖区",
      "level": 3
    },
    {
      "code": "420703",
      "prov": "42",
      "city": "07",
      "dist": "03",
      "name": "华容区",
      "level": 3
    },
    {
      "code": "420704",
      "prov": "42",
      "city": "07",
      "dist": "04",
      "name": "鄂城区",
      "level": 3
    },
    {
      "code": "420800",
      "prov": "42",
      "city": "08",
      "dist": "00",
      "name": "荆门市",
      "level": 2
    },
    {
      "code": "420801",
      "prov": "42",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420802",
      "prov": "42",
      "city": "08",
      "dist": "02",
      "name": "东宝区",
      "level": 3
    },
    {
      "code": "420804",
      "prov": "42",
      "city": "08",
      "dist": "04",
      "name": "掇刀区",
      "level": 3
    },
    {
      "code": "420821",
      "prov": "42",
      "city": "08",
      "dist": "21",
      "name": "京山县",
      "level": 3
    },
    {
      "code": "420822",
      "prov": "42",
      "city": "08",
      "dist": "22",
      "name": "沙洋县",
      "level": 3
    },
    {
      "code": "420881",
      "prov": "42",
      "city": "08",
      "dist": "81",
      "name": "钟祥市",
      "level": 3
    },
    {
      "code": "420900",
      "prov": "42",
      "city": "09",
      "dist": "00",
      "name": "孝感市",
      "level": 2
    },
    {
      "code": "420901",
      "prov": "42",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "420902",
      "prov": "42",
      "city": "09",
      "dist": "02",
      "name": "孝南区",
      "level": 3
    },
    {
      "code": "420921",
      "prov": "42",
      "city": "09",
      "dist": "21",
      "name": "孝昌县",
      "level": 3
    },
    {
      "code": "420922",
      "prov": "42",
      "city": "09",
      "dist": "22",
      "name": "大悟县",
      "level": 3
    },
    {
      "code": "420923",
      "prov": "42",
      "city": "09",
      "dist": "23",
      "name": "云梦县",
      "level": 3
    },
    {
      "code": "420981",
      "prov": "42",
      "city": "09",
      "dist": "81",
      "name": "应城市",
      "level": 3
    },
    {
      "code": "420982",
      "prov": "42",
      "city": "09",
      "dist": "82",
      "name": "安陆市",
      "level": 3
    },
    {
      "code": "420984",
      "prov": "42",
      "city": "09",
      "dist": "84",
      "name": "汉川市",
      "level": 3
    },
    {
      "code": "421000",
      "prov": "42",
      "city": "10",
      "dist": "00",
      "name": "荆州市",
      "level": 2
    },
    {
      "code": "421001",
      "prov": "42",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "421002",
      "prov": "42",
      "city": "10",
      "dist": "02",
      "name": "沙市区",
      "level": 3
    },
    {
      "code": "421003",
      "prov": "42",
      "city": "10",
      "dist": "03",
      "name": "荆州区",
      "level": 3
    },
    {
      "code": "421022",
      "prov": "42",
      "city": "10",
      "dist": "22",
      "name": "公安县",
      "level": 3
    },
    {
      "code": "421023",
      "prov": "42",
      "city": "10",
      "dist": "23",
      "name": "监利县",
      "level": 3
    },
    {
      "code": "421024",
      "prov": "42",
      "city": "10",
      "dist": "24",
      "name": "江陵县",
      "level": 3
    },
    {
      "code": "421081",
      "prov": "42",
      "city": "10",
      "dist": "81",
      "name": "石首市",
      "level": 3
    },
    {
      "code": "421083",
      "prov": "42",
      "city": "10",
      "dist": "83",
      "name": "洪湖市",
      "level": 3
    },
    {
      "code": "421087",
      "prov": "42",
      "city": "10",
      "dist": "87",
      "name": "松滋市",
      "level": 3
    },
    {
      "code": "421100",
      "prov": "42",
      "city": "11",
      "dist": "00",
      "name": "黄冈市",
      "level": 2
    },
    {
      "code": "421101",
      "prov": "42",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "421102",
      "prov": "42",
      "city": "11",
      "dist": "02",
      "name": "黄州区",
      "level": 3
    },
    {
      "code": "421121",
      "prov": "42",
      "city": "11",
      "dist": "21",
      "name": "团风县",
      "level": 3
    },
    {
      "code": "421122",
      "prov": "42",
      "city": "11",
      "dist": "22",
      "name": "红安县",
      "level": 3
    },
    {
      "code": "421123",
      "prov": "42",
      "city": "11",
      "dist": "23",
      "name": "罗田县",
      "level": 3
    },
    {
      "code": "421124",
      "prov": "42",
      "city": "11",
      "dist": "24",
      "name": "英山县",
      "level": 3
    },
    {
      "code": "421125",
      "prov": "42",
      "city": "11",
      "dist": "25",
      "name": "浠水县",
      "level": 3
    },
    {
      "code": "421126",
      "prov": "42",
      "city": "11",
      "dist": "26",
      "name": "蕲春县",
      "level": 3
    },
    {
      "code": "421127",
      "prov": "42",
      "city": "11",
      "dist": "27",
      "name": "黄梅县",
      "level": 3
    },
    {
      "code": "421181",
      "prov": "42",
      "city": "11",
      "dist": "81",
      "name": "麻城市",
      "level": 3
    },
    {
      "code": "421182",
      "prov": "42",
      "city": "11",
      "dist": "82",
      "name": "武穴市",
      "level": 3
    },
    {
      "code": "421200",
      "prov": "42",
      "city": "12",
      "dist": "00",
      "name": "咸宁市",
      "level": 2
    },
    {
      "code": "421201",
      "prov": "42",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "421202",
      "prov": "42",
      "city": "12",
      "dist": "02",
      "name": "咸安区",
      "level": 3
    },
    {
      "code": "421221",
      "prov": "42",
      "city": "12",
      "dist": "21",
      "name": "嘉鱼县",
      "level": 3
    },
    {
      "code": "421222",
      "prov": "42",
      "city": "12",
      "dist": "22",
      "name": "通城县",
      "level": 3
    },
    {
      "code": "421223",
      "prov": "42",
      "city": "12",
      "dist": "23",
      "name": "崇阳县",
      "level": 3
    },
    {
      "code": "421224",
      "prov": "42",
      "city": "12",
      "dist": "24",
      "name": "通山县",
      "level": 3
    },
    {
      "code": "421281",
      "prov": "42",
      "city": "12",
      "dist": "81",
      "name": "赤壁市",
      "level": 3
    },
    {
      "code": "421300",
      "prov": "42",
      "city": "13",
      "dist": "00",
      "name": "随州市",
      "level": 2
    },
    {
      "code": "421301",
      "prov": "42",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "421303",
      "prov": "42",
      "city": "13",
      "dist": "03",
      "name": "曾都区",
      "level": 3
    },
    {
      "code": "421321",
      "prov": "42",
      "city": "13",
      "dist": "21",
      "name": "随县",
      "level": 3
    },
    {
      "code": "421381",
      "prov": "42",
      "city": "13",
      "dist": "81",
      "name": "广水市",
      "level": 3
    },
    {
      "code": "422800",
      "prov": "42",
      "city": "28",
      "dist": "00",
      "name": "恩施土家族苗族自治州",
      "level": 2
    },
    {
      "code": "422801",
      "prov": "42",
      "city": "28",
      "dist": "01",
      "name": "恩施市",
      "level": 3
    },
    {
      "code": "422802",
      "prov": "42",
      "city": "28",
      "dist": "02",
      "name": "利川市",
      "level": 3
    },
    {
      "code": "422822",
      "prov": "42",
      "city": "28",
      "dist": "22",
      "name": "建始县",
      "level": 3
    },
    {
      "code": "422823",
      "prov": "42",
      "city": "28",
      "dist": "23",
      "name": "巴东县",
      "level": 3
    },
    {
      "code": "422825",
      "prov": "42",
      "city": "28",
      "dist": "25",
      "name": "宣恩县",
      "level": 3
    },
    {
      "code": "422826",
      "prov": "42",
      "city": "28",
      "dist": "26",
      "name": "咸丰县",
      "level": 3
    },
    {
      "code": "422827",
      "prov": "42",
      "city": "28",
      "dist": "27",
      "name": "来凤县",
      "level": 3
    },
    {
      "code": "422828",
      "prov": "42",
      "city": "28",
      "dist": "28",
      "name": "鹤峰县",
      "level": 3
    },
    {
      "code": "429000",
      "prov": "42",
      "city": "90",
      "dist": "00",
      "name": "省直辖县级行政区划",
      "level": 2
    },
    {
      "code": "429004",
      "prov": "42",
      "city": "90",
      "dist": "04",
      "name": "仙桃市",
      "level": 3
    },
    {
      "code": "429005",
      "prov": "42",
      "city": "90",
      "dist": "05",
      "name": "潜江市",
      "level": 3
    },
    {
      "code": "429006",
      "prov": "42",
      "city": "90",
      "dist": "06",
      "name": "天门市",
      "level": 3
    },
    {
      "code": "429021",
      "prov": "42",
      "city": "90",
      "dist": "21",
      "name": "神农架林区",
      "level": 3
    },
    {
      "code": "430000",
      "prov": "43",
      "city": "00",
      "dist": "00",
      "name": "湖南省",
      "level": 1
    },
    {
      "code": "430100",
      "prov": "43",
      "city": "01",
      "dist": "00",
      "name": "长沙市",
      "level": 2
    },
    {
      "code": "430101",
      "prov": "43",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430102",
      "prov": "43",
      "city": "01",
      "dist": "02",
      "name": "芙蓉区",
      "level": 3
    },
    {
      "code": "430103",
      "prov": "43",
      "city": "01",
      "dist": "03",
      "name": "天心区",
      "level": 3
    },
    {
      "code": "430104",
      "prov": "43",
      "city": "01",
      "dist": "04",
      "name": "岳麓区",
      "level": 3
    },
    {
      "code": "430105",
      "prov": "43",
      "city": "01",
      "dist": "05",
      "name": "开福区",
      "level": 3
    },
    {
      "code": "430111",
      "prov": "43",
      "city": "01",
      "dist": "11",
      "name": "雨花区",
      "level": 3
    },
    {
      "code": "430112",
      "prov": "43",
      "city": "01",
      "dist": "12",
      "name": "望城区",
      "level": 3
    },
    {
      "code": "430121",
      "prov": "43",
      "city": "01",
      "dist": "21",
      "name": "长沙县",
      "level": 3
    },
    {
      "code": "430124",
      "prov": "43",
      "city": "01",
      "dist": "24",
      "name": "宁乡县",
      "level": 3
    },
    {
      "code": "430181",
      "prov": "43",
      "city": "01",
      "dist": "81",
      "name": "浏阳市",
      "level": 3
    },
    {
      "code": "430200",
      "prov": "43",
      "city": "02",
      "dist": "00",
      "name": "株洲市",
      "level": 2
    },
    {
      "code": "430201",
      "prov": "43",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430202",
      "prov": "43",
      "city": "02",
      "dist": "02",
      "name": "荷塘区",
      "level": 3
    },
    {
      "code": "430203",
      "prov": "43",
      "city": "02",
      "dist": "03",
      "name": "芦淞区",
      "level": 3
    },
    {
      "code": "430204",
      "prov": "43",
      "city": "02",
      "dist": "04",
      "name": "石峰区",
      "level": 3
    },
    {
      "code": "430211",
      "prov": "43",
      "city": "02",
      "dist": "11",
      "name": "天元区",
      "level": 3
    },
    {
      "code": "430221",
      "prov": "43",
      "city": "02",
      "dist": "21",
      "name": "株洲县",
      "level": 3
    },
    {
      "code": "430223",
      "prov": "43",
      "city": "02",
      "dist": "23",
      "name": "攸县",
      "level": 3
    },
    {
      "code": "430224",
      "prov": "43",
      "city": "02",
      "dist": "24",
      "name": "茶陵县",
      "level": 3
    },
    {
      "code": "430225",
      "prov": "43",
      "city": "02",
      "dist": "25",
      "name": "炎陵县",
      "level": 3
    },
    {
      "code": "430281",
      "prov": "43",
      "city": "02",
      "dist": "81",
      "name": "醴陵市",
      "level": 3
    },
    {
      "code": "430300",
      "prov": "43",
      "city": "03",
      "dist": "00",
      "name": "湘潭市",
      "level": 2
    },
    {
      "code": "430301",
      "prov": "43",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430302",
      "prov": "43",
      "city": "03",
      "dist": "02",
      "name": "雨湖区",
      "level": 3
    },
    {
      "code": "430304",
      "prov": "43",
      "city": "03",
      "dist": "04",
      "name": "岳塘区",
      "level": 3
    },
    {
      "code": "430321",
      "prov": "43",
      "city": "03",
      "dist": "21",
      "name": "湘潭县",
      "level": 3
    },
    {
      "code": "430381",
      "prov": "43",
      "city": "03",
      "dist": "81",
      "name": "湘乡市",
      "level": 3
    },
    {
      "code": "430382",
      "prov": "43",
      "city": "03",
      "dist": "82",
      "name": "韶山市",
      "level": 3
    },
    {
      "code": "430400",
      "prov": "43",
      "city": "04",
      "dist": "00",
      "name": "衡阳市",
      "level": 2
    },
    {
      "code": "430401",
      "prov": "43",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430405",
      "prov": "43",
      "city": "04",
      "dist": "05",
      "name": "珠晖区",
      "level": 3
    },
    {
      "code": "430406",
      "prov": "43",
      "city": "04",
      "dist": "06",
      "name": "雁峰区",
      "level": 3
    },
    {
      "code": "430407",
      "prov": "43",
      "city": "04",
      "dist": "07",
      "name": "石鼓区",
      "level": 3
    },
    {
      "code": "430408",
      "prov": "43",
      "city": "04",
      "dist": "08",
      "name": "蒸湘区",
      "level": 3
    },
    {
      "code": "430412",
      "prov": "43",
      "city": "04",
      "dist": "12",
      "name": "南岳区",
      "level": 3
    },
    {
      "code": "430421",
      "prov": "43",
      "city": "04",
      "dist": "21",
      "name": "衡阳县",
      "level": 3
    },
    {
      "code": "430422",
      "prov": "43",
      "city": "04",
      "dist": "22",
      "name": "衡南县",
      "level": 3
    },
    {
      "code": "430423",
      "prov": "43",
      "city": "04",
      "dist": "23",
      "name": "衡山县",
      "level": 3
    },
    {
      "code": "430424",
      "prov": "43",
      "city": "04",
      "dist": "24",
      "name": "衡东县",
      "level": 3
    },
    {
      "code": "430426",
      "prov": "43",
      "city": "04",
      "dist": "26",
      "name": "祁东县",
      "level": 3
    },
    {
      "code": "430481",
      "prov": "43",
      "city": "04",
      "dist": "81",
      "name": "耒阳市",
      "level": 3
    },
    {
      "code": "430482",
      "prov": "43",
      "city": "04",
      "dist": "82",
      "name": "常宁市",
      "level": 3
    },
    {
      "code": "430500",
      "prov": "43",
      "city": "05",
      "dist": "00",
      "name": "邵阳市",
      "level": 2
    },
    {
      "code": "430501",
      "prov": "43",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430502",
      "prov": "43",
      "city": "05",
      "dist": "02",
      "name": "双清区",
      "level": 3
    },
    {
      "code": "430503",
      "prov": "43",
      "city": "05",
      "dist": "03",
      "name": "大祥区",
      "level": 3
    },
    {
      "code": "430511",
      "prov": "43",
      "city": "05",
      "dist": "11",
      "name": "北塔区",
      "level": 3
    },
    {
      "code": "430521",
      "prov": "43",
      "city": "05",
      "dist": "21",
      "name": "邵东县",
      "level": 3
    },
    {
      "code": "430522",
      "prov": "43",
      "city": "05",
      "dist": "22",
      "name": "新邵县",
      "level": 3
    },
    {
      "code": "430523",
      "prov": "43",
      "city": "05",
      "dist": "23",
      "name": "邵阳县",
      "level": 3
    },
    {
      "code": "430524",
      "prov": "43",
      "city": "05",
      "dist": "24",
      "name": "隆回县",
      "level": 3
    },
    {
      "code": "430525",
      "prov": "43",
      "city": "05",
      "dist": "25",
      "name": "洞口县",
      "level": 3
    },
    {
      "code": "430527",
      "prov": "43",
      "city": "05",
      "dist": "27",
      "name": "绥宁县",
      "level": 3
    },
    {
      "code": "430528",
      "prov": "43",
      "city": "05",
      "dist": "28",
      "name": "新宁县",
      "level": 3
    },
    {
      "code": "430529",
      "prov": "43",
      "city": "05",
      "dist": "29",
      "name": "城步苗族自治县",
      "level": 3
    },
    {
      "code": "430581",
      "prov": "43",
      "city": "05",
      "dist": "81",
      "name": "武冈市",
      "level": 3
    },
    {
      "code": "430600",
      "prov": "43",
      "city": "06",
      "dist": "00",
      "name": "岳阳市",
      "level": 2
    },
    {
      "code": "430601",
      "prov": "43",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430602",
      "prov": "43",
      "city": "06",
      "dist": "02",
      "name": "岳阳楼区",
      "level": 3
    },
    {
      "code": "430603",
      "prov": "43",
      "city": "06",
      "dist": "03",
      "name": "云溪区",
      "level": 3
    },
    {
      "code": "430611",
      "prov": "43",
      "city": "06",
      "dist": "11",
      "name": "君山区",
      "level": 3
    },
    {
      "code": "430621",
      "prov": "43",
      "city": "06",
      "dist": "21",
      "name": "岳阳县",
      "level": 3
    },
    {
      "code": "430623",
      "prov": "43",
      "city": "06",
      "dist": "23",
      "name": "华容县",
      "level": 3
    },
    {
      "code": "430624",
      "prov": "43",
      "city": "06",
      "dist": "24",
      "name": "湘阴县",
      "level": 3
    },
    {
      "code": "430626",
      "prov": "43",
      "city": "06",
      "dist": "26",
      "name": "平江县",
      "level": 3
    },
    {
      "code": "430681",
      "prov": "43",
      "city": "06",
      "dist": "81",
      "name": "汨罗市",
      "level": 3
    },
    {
      "code": "430682",
      "prov": "43",
      "city": "06",
      "dist": "82",
      "name": "临湘市",
      "level": 3
    },
    {
      "code": "430700",
      "prov": "43",
      "city": "07",
      "dist": "00",
      "name": "常德市",
      "level": 2
    },
    {
      "code": "430701",
      "prov": "43",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430702",
      "prov": "43",
      "city": "07",
      "dist": "02",
      "name": "武陵区",
      "level": 3
    },
    {
      "code": "430703",
      "prov": "43",
      "city": "07",
      "dist": "03",
      "name": "鼎城区",
      "level": 3
    },
    {
      "code": "430721",
      "prov": "43",
      "city": "07",
      "dist": "21",
      "name": "安乡县",
      "level": 3
    },
    {
      "code": "430722",
      "prov": "43",
      "city": "07",
      "dist": "22",
      "name": "汉寿县",
      "level": 3
    },
    {
      "code": "430723",
      "prov": "43",
      "city": "07",
      "dist": "23",
      "name": "澧县",
      "level": 3
    },
    {
      "code": "430724",
      "prov": "43",
      "city": "07",
      "dist": "24",
      "name": "临澧县",
      "level": 3
    },
    {
      "code": "430725",
      "prov": "43",
      "city": "07",
      "dist": "25",
      "name": "桃源县",
      "level": 3
    },
    {
      "code": "430726",
      "prov": "43",
      "city": "07",
      "dist": "26",
      "name": "石门县",
      "level": 3
    },
    {
      "code": "430781",
      "prov": "43",
      "city": "07",
      "dist": "81",
      "name": "津市市",
      "level": 3
    },
    {
      "code": "430800",
      "prov": "43",
      "city": "08",
      "dist": "00",
      "name": "张家界市",
      "level": 2
    },
    {
      "code": "430801",
      "prov": "43",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430802",
      "prov": "43",
      "city": "08",
      "dist": "02",
      "name": "永定区",
      "level": 3
    },
    {
      "code": "430811",
      "prov": "43",
      "city": "08",
      "dist": "11",
      "name": "武陵源区",
      "level": 3
    },
    {
      "code": "430821",
      "prov": "43",
      "city": "08",
      "dist": "21",
      "name": "慈利县",
      "level": 3
    },
    {
      "code": "430822",
      "prov": "43",
      "city": "08",
      "dist": "22",
      "name": "桑植县",
      "level": 3
    },
    {
      "code": "430900",
      "prov": "43",
      "city": "09",
      "dist": "00",
      "name": "益阳市",
      "level": 2
    },
    {
      "code": "430901",
      "prov": "43",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "430902",
      "prov": "43",
      "city": "09",
      "dist": "02",
      "name": "资阳区",
      "level": 3
    },
    {
      "code": "430903",
      "prov": "43",
      "city": "09",
      "dist": "03",
      "name": "赫山区",
      "level": 3
    },
    {
      "code": "430921",
      "prov": "43",
      "city": "09",
      "dist": "21",
      "name": "南县",
      "level": 3
    },
    {
      "code": "430922",
      "prov": "43",
      "city": "09",
      "dist": "22",
      "name": "桃江县",
      "level": 3
    },
    {
      "code": "430923",
      "prov": "43",
      "city": "09",
      "dist": "23",
      "name": "安化县",
      "level": 3
    },
    {
      "code": "430981",
      "prov": "43",
      "city": "09",
      "dist": "81",
      "name": "沅江市",
      "level": 3
    },
    {
      "code": "431000",
      "prov": "43",
      "city": "10",
      "dist": "00",
      "name": "郴州市",
      "level": 2
    },
    {
      "code": "431001",
      "prov": "43",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "431002",
      "prov": "43",
      "city": "10",
      "dist": "02",
      "name": "北湖区",
      "level": 3
    },
    {
      "code": "431003",
      "prov": "43",
      "city": "10",
      "dist": "03",
      "name": "苏仙区",
      "level": 3
    },
    {
      "code": "431021",
      "prov": "43",
      "city": "10",
      "dist": "21",
      "name": "桂阳县",
      "level": 3
    },
    {
      "code": "431022",
      "prov": "43",
      "city": "10",
      "dist": "22",
      "name": "宜章县",
      "level": 3
    },
    {
      "code": "431023",
      "prov": "43",
      "city": "10",
      "dist": "23",
      "name": "永兴县",
      "level": 3
    },
    {
      "code": "431024",
      "prov": "43",
      "city": "10",
      "dist": "24",
      "name": "嘉禾县",
      "level": 3
    },
    {
      "code": "431025",
      "prov": "43",
      "city": "10",
      "dist": "25",
      "name": "临武县",
      "level": 3
    },
    {
      "code": "431026",
      "prov": "43",
      "city": "10",
      "dist": "26",
      "name": "汝城县",
      "level": 3
    },
    {
      "code": "431027",
      "prov": "43",
      "city": "10",
      "dist": "27",
      "name": "桂东县",
      "level": 3
    },
    {
      "code": "431028",
      "prov": "43",
      "city": "10",
      "dist": "28",
      "name": "安仁县",
      "level": 3
    },
    {
      "code": "431081",
      "prov": "43",
      "city": "10",
      "dist": "81",
      "name": "资兴市",
      "level": 3
    },
    {
      "code": "431100",
      "prov": "43",
      "city": "11",
      "dist": "00",
      "name": "永州市",
      "level": 2
    },
    {
      "code": "431101",
      "prov": "43",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "431102",
      "prov": "43",
      "city": "11",
      "dist": "02",
      "name": "零陵区",
      "level": 3
    },
    {
      "code": "431103",
      "prov": "43",
      "city": "11",
      "dist": "03",
      "name": "冷水滩区",
      "level": 3
    },
    {
      "code": "431121",
      "prov": "43",
      "city": "11",
      "dist": "21",
      "name": "祁阳县",
      "level": 3
    },
    {
      "code": "431122",
      "prov": "43",
      "city": "11",
      "dist": "22",
      "name": "东安县",
      "level": 3
    },
    {
      "code": "431123",
      "prov": "43",
      "city": "11",
      "dist": "23",
      "name": "双牌县",
      "level": 3
    },
    {
      "code": "431124",
      "prov": "43",
      "city": "11",
      "dist": "24",
      "name": "道县",
      "level": 3
    },
    {
      "code": "431125",
      "prov": "43",
      "city": "11",
      "dist": "25",
      "name": "江永县",
      "level": 3
    },
    {
      "code": "431126",
      "prov": "43",
      "city": "11",
      "dist": "26",
      "name": "宁远县",
      "level": 3
    },
    {
      "code": "431127",
      "prov": "43",
      "city": "11",
      "dist": "27",
      "name": "蓝山县",
      "level": 3
    },
    {
      "code": "431128",
      "prov": "43",
      "city": "11",
      "dist": "28",
      "name": "新田县",
      "level": 3
    },
    {
      "code": "431129",
      "prov": "43",
      "city": "11",
      "dist": "29",
      "name": "江华瑶族自治县",
      "level": 3
    },
    {
      "code": "431200",
      "prov": "43",
      "city": "12",
      "dist": "00",
      "name": "怀化市",
      "level": 2
    },
    {
      "code": "431201",
      "prov": "43",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "431202",
      "prov": "43",
      "city": "12",
      "dist": "02",
      "name": "鹤城区",
      "level": 3
    },
    {
      "code": "431221",
      "prov": "43",
      "city": "12",
      "dist": "21",
      "name": "中方县",
      "level": 3
    },
    {
      "code": "431222",
      "prov": "43",
      "city": "12",
      "dist": "22",
      "name": "沅陵县",
      "level": 3
    },
    {
      "code": "431223",
      "prov": "43",
      "city": "12",
      "dist": "23",
      "name": "辰溪县",
      "level": 3
    },
    {
      "code": "431224",
      "prov": "43",
      "city": "12",
      "dist": "24",
      "name": "溆浦县",
      "level": 3
    },
    {
      "code": "431225",
      "prov": "43",
      "city": "12",
      "dist": "25",
      "name": "会同县",
      "level": 3
    },
    {
      "code": "431226",
      "prov": "43",
      "city": "12",
      "dist": "26",
      "name": "麻阳苗族自治县",
      "level": 3
    },
    {
      "code": "431227",
      "prov": "43",
      "city": "12",
      "dist": "27",
      "name": "新晃侗族自治县",
      "level": 3
    },
    {
      "code": "431228",
      "prov": "43",
      "city": "12",
      "dist": "28",
      "name": "芷江侗族自治县",
      "level": 3
    },
    {
      "code": "431229",
      "prov": "43",
      "city": "12",
      "dist": "29",
      "name": "靖州苗族侗族自治县",
      "level": 3
    },
    {
      "code": "431230",
      "prov": "43",
      "city": "12",
      "dist": "30",
      "name": "通道侗族自治县",
      "level": 3
    },
    {
      "code": "431281",
      "prov": "43",
      "city": "12",
      "dist": "81",
      "name": "洪江市",
      "level": 3
    },
    {
      "code": "431300",
      "prov": "43",
      "city": "13",
      "dist": "00",
      "name": "娄底市",
      "level": 2
    },
    {
      "code": "431301",
      "prov": "43",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "431302",
      "prov": "43",
      "city": "13",
      "dist": "02",
      "name": "娄星区",
      "level": 3
    },
    {
      "code": "431321",
      "prov": "43",
      "city": "13",
      "dist": "21",
      "name": "双峰县",
      "level": 3
    },
    {
      "code": "431322",
      "prov": "43",
      "city": "13",
      "dist": "22",
      "name": "新化县",
      "level": 3
    },
    {
      "code": "431381",
      "prov": "43",
      "city": "13",
      "dist": "81",
      "name": "冷水江市",
      "level": 3
    },
    {
      "code": "431382",
      "prov": "43",
      "city": "13",
      "dist": "82",
      "name": "涟源市",
      "level": 3
    },
    {
      "code": "433100",
      "prov": "43",
      "city": "31",
      "dist": "00",
      "name": "湘西土家族苗族自治州",
      "level": 2
    },
    {
      "code": "433101",
      "prov": "43",
      "city": "31",
      "dist": "01",
      "name": "吉首市",
      "level": 3
    },
    {
      "code": "433122",
      "prov": "43",
      "city": "31",
      "dist": "22",
      "name": "泸溪县",
      "level": 3
    },
    {
      "code": "433123",
      "prov": "43",
      "city": "31",
      "dist": "23",
      "name": "凤凰县",
      "level": 3
    },
    {
      "code": "433124",
      "prov": "43",
      "city": "31",
      "dist": "24",
      "name": "花垣县",
      "level": 3
    },
    {
      "code": "433125",
      "prov": "43",
      "city": "31",
      "dist": "25",
      "name": "保靖县",
      "level": 3
    },
    {
      "code": "433126",
      "prov": "43",
      "city": "31",
      "dist": "26",
      "name": "古丈县",
      "level": 3
    },
    {
      "code": "433127",
      "prov": "43",
      "city": "31",
      "dist": "27",
      "name": "永顺县",
      "level": 3
    },
    {
      "code": "433130",
      "prov": "43",
      "city": "31",
      "dist": "30",
      "name": "龙山县",
      "level": 3
    },
    {
      "code": "440000",
      "prov": "44",
      "city": "00",
      "dist": "00",
      "name": "广东省",
      "level": 1
    },
    {
      "code": "440100",
      "prov": "44",
      "city": "01",
      "dist": "00",
      "name": "广州市",
      "level": 2
    },
    {
      "code": "440101",
      "prov": "44",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440103",
      "prov": "44",
      "city": "01",
      "dist": "03",
      "name": "荔湾区",
      "level": 3
    },
    {
      "code": "440104",
      "prov": "44",
      "city": "01",
      "dist": "04",
      "name": "越秀区",
      "level": 3
    },
    {
      "code": "440105",
      "prov": "44",
      "city": "01",
      "dist": "05",
      "name": "海珠区",
      "level": 3
    },
    {
      "code": "440106",
      "prov": "44",
      "city": "01",
      "dist": "06",
      "name": "天河区",
      "level": 3
    },
    {
      "code": "440111",
      "prov": "44",
      "city": "01",
      "dist": "11",
      "name": "白云区",
      "level": 3
    },
    {
      "code": "440112",
      "prov": "44",
      "city": "01",
      "dist": "12",
      "name": "黄埔区",
      "level": 3
    },
    {
      "code": "440113",
      "prov": "44",
      "city": "01",
      "dist": "13",
      "name": "番禺区",
      "level": 3
    },
    {
      "code": "440114",
      "prov": "44",
      "city": "01",
      "dist": "14",
      "name": "花都区",
      "level": 3
    },
    {
      "code": "440115",
      "prov": "44",
      "city": "01",
      "dist": "15",
      "name": "南沙区",
      "level": 3
    },
    {
      "code": "440116",
      "prov": "44",
      "city": "01",
      "dist": "16",
      "name": "萝岗区",
      "level": 3
    },
    {
      "code": "440117",
      "prov": "44",
      "city": "01",
      "dist": "17",
      "name": "从化区",
      "level": 3
    },
    {
      "code": "440118",
      "prov": "44",
      "city": "01",
      "dist": "18",
      "name": "增城区",
      "level": 3
    },
    {
      "code": "440200",
      "prov": "44",
      "city": "02",
      "dist": "00",
      "name": "韶关市",
      "level": 2
    },
    {
      "code": "440201",
      "prov": "44",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440203",
      "prov": "44",
      "city": "02",
      "dist": "03",
      "name": "武江区",
      "level": 3
    },
    {
      "code": "440204",
      "prov": "44",
      "city": "02",
      "dist": "04",
      "name": "浈江区",
      "level": 3
    },
    {
      "code": "440205",
      "prov": "44",
      "city": "02",
      "dist": "05",
      "name": "曲江区",
      "level": 3
    },
    {
      "code": "440222",
      "prov": "44",
      "city": "02",
      "dist": "22",
      "name": "始兴县",
      "level": 3
    },
    {
      "code": "440224",
      "prov": "44",
      "city": "02",
      "dist": "24",
      "name": "仁化县",
      "level": 3
    },
    {
      "code": "440229",
      "prov": "44",
      "city": "02",
      "dist": "29",
      "name": "翁源县",
      "level": 3
    },
    {
      "code": "440232",
      "prov": "44",
      "city": "02",
      "dist": "32",
      "name": "乳源瑶族自治县",
      "level": 3
    },
    {
      "code": "440233",
      "prov": "44",
      "city": "02",
      "dist": "33",
      "name": "新丰县",
      "level": 3
    },
    {
      "code": "440281",
      "prov": "44",
      "city": "02",
      "dist": "81",
      "name": "乐昌市",
      "level": 3
    },
    {
      "code": "440282",
      "prov": "44",
      "city": "02",
      "dist": "82",
      "name": "南雄市",
      "level": 3
    },
    {
      "code": "440300",
      "prov": "44",
      "city": "03",
      "dist": "00",
      "name": "深圳市",
      "level": 2
    },
    {
      "code": "440301",
      "prov": "44",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440303",
      "prov": "44",
      "city": "03",
      "dist": "03",
      "name": "罗湖区",
      "level": 3
    },
    {
      "code": "440304",
      "prov": "44",
      "city": "03",
      "dist": "04",
      "name": "福田区",
      "level": 3
    },
    {
      "code": "440305",
      "prov": "44",
      "city": "03",
      "dist": "05",
      "name": "南山区",
      "level": 3
    },
    {
      "code": "440306",
      "prov": "44",
      "city": "03",
      "dist": "06",
      "name": "宝安区",
      "level": 3
    },
    {
      "code": "440307",
      "prov": "44",
      "city": "03",
      "dist": "07",
      "name": "龙岗区",
      "level": 3
    },
    {
      "code": "440308",
      "prov": "44",
      "city": "03",
      "dist": "08",
      "name": "盐田区",
      "level": 3
    },
    {
      "code": "440400",
      "prov": "44",
      "city": "04",
      "dist": "00",
      "name": "珠海市",
      "level": 2
    },
    {
      "code": "440401",
      "prov": "44",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440402",
      "prov": "44",
      "city": "04",
      "dist": "02",
      "name": "香洲区",
      "level": 3
    },
    {
      "code": "440403",
      "prov": "44",
      "city": "04",
      "dist": "03",
      "name": "斗门区",
      "level": 3
    },
    {
      "code": "440404",
      "prov": "44",
      "city": "04",
      "dist": "04",
      "name": "金湾区",
      "level": 3
    },
    {
      "code": "440500",
      "prov": "44",
      "city": "05",
      "dist": "00",
      "name": "汕头市",
      "level": 2
    },
    {
      "code": "440501",
      "prov": "44",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440507",
      "prov": "44",
      "city": "05",
      "dist": "07",
      "name": "龙湖区",
      "level": 3
    },
    {
      "code": "440511",
      "prov": "44",
      "city": "05",
      "dist": "11",
      "name": "金平区",
      "level": 3
    },
    {
      "code": "440512",
      "prov": "44",
      "city": "05",
      "dist": "12",
      "name": "濠江区",
      "level": 3
    },
    {
      "code": "440513",
      "prov": "44",
      "city": "05",
      "dist": "13",
      "name": "潮阳区",
      "level": 3
    },
    {
      "code": "440514",
      "prov": "44",
      "city": "05",
      "dist": "14",
      "name": "潮南区",
      "level": 3
    },
    {
      "code": "440515",
      "prov": "44",
      "city": "05",
      "dist": "15",
      "name": "澄海区",
      "level": 3
    },
    {
      "code": "440523",
      "prov": "44",
      "city": "05",
      "dist": "23",
      "name": "南澳县",
      "level": 3
    },
    {
      "code": "440600",
      "prov": "44",
      "city": "06",
      "dist": "00",
      "name": "佛山市",
      "level": 2
    },
    {
      "code": "440601",
      "prov": "44",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440604",
      "prov": "44",
      "city": "06",
      "dist": "04",
      "name": "禅城区",
      "level": 3
    },
    {
      "code": "440605",
      "prov": "44",
      "city": "06",
      "dist": "05",
      "name": "南海区",
      "level": 3
    },
    {
      "code": "440606",
      "prov": "44",
      "city": "06",
      "dist": "06",
      "name": "顺德区",
      "level": 3
    },
    {
      "code": "440607",
      "prov": "44",
      "city": "06",
      "dist": "07",
      "name": "三水区",
      "level": 3
    },
    {
      "code": "440608",
      "prov": "44",
      "city": "06",
      "dist": "08",
      "name": "高明区",
      "level": 3
    },
    {
      "code": "440700",
      "prov": "44",
      "city": "07",
      "dist": "00",
      "name": "江门市",
      "level": 2
    },
    {
      "code": "440701",
      "prov": "44",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440703",
      "prov": "44",
      "city": "07",
      "dist": "03",
      "name": "蓬江区",
      "level": 3
    },
    {
      "code": "440704",
      "prov": "44",
      "city": "07",
      "dist": "04",
      "name": "江海区",
      "level": 3
    },
    {
      "code": "440705",
      "prov": "44",
      "city": "07",
      "dist": "05",
      "name": "新会区",
      "level": 3
    },
    {
      "code": "440781",
      "prov": "44",
      "city": "07",
      "dist": "81",
      "name": "台山市",
      "level": 3
    },
    {
      "code": "440783",
      "prov": "44",
      "city": "07",
      "dist": "83",
      "name": "开平市",
      "level": 3
    },
    {
      "code": "440784",
      "prov": "44",
      "city": "07",
      "dist": "84",
      "name": "鹤山市",
      "level": 3
    },
    {
      "code": "440785",
      "prov": "44",
      "city": "07",
      "dist": "85",
      "name": "恩平市",
      "level": 3
    },
    {
      "code": "440800",
      "prov": "44",
      "city": "08",
      "dist": "00",
      "name": "湛江市",
      "level": 2
    },
    {
      "code": "440801",
      "prov": "44",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440802",
      "prov": "44",
      "city": "08",
      "dist": "02",
      "name": "赤坎区",
      "level": 3
    },
    {
      "code": "440803",
      "prov": "44",
      "city": "08",
      "dist": "03",
      "name": "霞山区",
      "level": 3
    },
    {
      "code": "440804",
      "prov": "44",
      "city": "08",
      "dist": "04",
      "name": "坡头区",
      "level": 3
    },
    {
      "code": "440811",
      "prov": "44",
      "city": "08",
      "dist": "11",
      "name": "麻章区",
      "level": 3
    },
    {
      "code": "440823",
      "prov": "44",
      "city": "08",
      "dist": "23",
      "name": "遂溪县",
      "level": 3
    },
    {
      "code": "440825",
      "prov": "44",
      "city": "08",
      "dist": "25",
      "name": "徐闻县",
      "level": 3
    },
    {
      "code": "440881",
      "prov": "44",
      "city": "08",
      "dist": "81",
      "name": "廉江市",
      "level": 3
    },
    {
      "code": "440882",
      "prov": "44",
      "city": "08",
      "dist": "82",
      "name": "雷州市",
      "level": 3
    },
    {
      "code": "440883",
      "prov": "44",
      "city": "08",
      "dist": "83",
      "name": "吴川市",
      "level": 3
    },
    {
      "code": "440900",
      "prov": "44",
      "city": "09",
      "dist": "00",
      "name": "茂名市",
      "level": 2
    },
    {
      "code": "440901",
      "prov": "44",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "440902",
      "prov": "44",
      "city": "09",
      "dist": "02",
      "name": "茂南区",
      "level": 3
    },
    {
      "code": "440904",
      "prov": "44",
      "city": "09",
      "dist": "04",
      "name": "电白区",
      "level": 3
    },
    {
      "code": "440981",
      "prov": "44",
      "city": "09",
      "dist": "81",
      "name": "高州市",
      "level": 3
    },
    {
      "code": "440982",
      "prov": "44",
      "city": "09",
      "dist": "82",
      "name": "化州市",
      "level": 3
    },
    {
      "code": "440983",
      "prov": "44",
      "city": "09",
      "dist": "83",
      "name": "信宜市",
      "level": 3
    },
    {
      "code": "441200",
      "prov": "44",
      "city": "12",
      "dist": "00",
      "name": "肇庆市",
      "level": 2
    },
    {
      "code": "441201",
      "prov": "44",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441202",
      "prov": "44",
      "city": "12",
      "dist": "02",
      "name": "端州区",
      "level": 3
    },
    {
      "code": "441203",
      "prov": "44",
      "city": "12",
      "dist": "03",
      "name": "鼎湖区",
      "level": 3
    },
    {
      "code": "441223",
      "prov": "44",
      "city": "12",
      "dist": "23",
      "name": "广宁县",
      "level": 3
    },
    {
      "code": "441224",
      "prov": "44",
      "city": "12",
      "dist": "24",
      "name": "怀集县",
      "level": 3
    },
    {
      "code": "441225",
      "prov": "44",
      "city": "12",
      "dist": "25",
      "name": "封开县",
      "level": 3
    },
    {
      "code": "441226",
      "prov": "44",
      "city": "12",
      "dist": "26",
      "name": "德庆县",
      "level": 3
    },
    {
      "code": "441283",
      "prov": "44",
      "city": "12",
      "dist": "83",
      "name": "高要市",
      "level": 3
    },
    {
      "code": "441284",
      "prov": "44",
      "city": "12",
      "dist": "84",
      "name": "四会市",
      "level": 3
    },
    {
      "code": "441300",
      "prov": "44",
      "city": "13",
      "dist": "00",
      "name": "惠州市",
      "level": 2
    },
    {
      "code": "441301",
      "prov": "44",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441302",
      "prov": "44",
      "city": "13",
      "dist": "02",
      "name": "惠城区",
      "level": 3
    },
    {
      "code": "441303",
      "prov": "44",
      "city": "13",
      "dist": "03",
      "name": "惠阳区",
      "level": 3
    },
    {
      "code": "441322",
      "prov": "44",
      "city": "13",
      "dist": "22",
      "name": "博罗县",
      "level": 3
    },
    {
      "code": "441323",
      "prov": "44",
      "city": "13",
      "dist": "23",
      "name": "惠东县",
      "level": 3
    },
    {
      "code": "441324",
      "prov": "44",
      "city": "13",
      "dist": "24",
      "name": "龙门县",
      "level": 3
    },
    {
      "code": "441400",
      "prov": "44",
      "city": "14",
      "dist": "00",
      "name": "梅州市",
      "level": 2
    },
    {
      "code": "441401",
      "prov": "44",
      "city": "14",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441402",
      "prov": "44",
      "city": "14",
      "dist": "02",
      "name": "梅江区",
      "level": 3
    },
    {
      "code": "441403",
      "prov": "44",
      "city": "14",
      "dist": "03",
      "name": "梅县区",
      "level": 3
    },
    {
      "code": "441422",
      "prov": "44",
      "city": "14",
      "dist": "22",
      "name": "大埔县",
      "level": 3
    },
    {
      "code": "441423",
      "prov": "44",
      "city": "14",
      "dist": "23",
      "name": "丰顺县",
      "level": 3
    },
    {
      "code": "441424",
      "prov": "44",
      "city": "14",
      "dist": "24",
      "name": "五华县",
      "level": 3
    },
    {
      "code": "441426",
      "prov": "44",
      "city": "14",
      "dist": "26",
      "name": "平远县",
      "level": 3
    },
    {
      "code": "441427",
      "prov": "44",
      "city": "14",
      "dist": "27",
      "name": "蕉岭县",
      "level": 3
    },
    {
      "code": "441481",
      "prov": "44",
      "city": "14",
      "dist": "81",
      "name": "兴宁市",
      "level": 3
    },
    {
      "code": "441500",
      "prov": "44",
      "city": "15",
      "dist": "00",
      "name": "汕尾市",
      "level": 2
    },
    {
      "code": "441501",
      "prov": "44",
      "city": "15",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441502",
      "prov": "44",
      "city": "15",
      "dist": "02",
      "name": "城区",
      "level": 3
    },
    {
      "code": "441521",
      "prov": "44",
      "city": "15",
      "dist": "21",
      "name": "海丰县",
      "level": 3
    },
    {
      "code": "441523",
      "prov": "44",
      "city": "15",
      "dist": "23",
      "name": "陆河县",
      "level": 3
    },
    {
      "code": "441581",
      "prov": "44",
      "city": "15",
      "dist": "81",
      "name": "陆丰市",
      "level": 3
    },
    {
      "code": "441600",
      "prov": "44",
      "city": "16",
      "dist": "00",
      "name": "河源市",
      "level": 2
    },
    {
      "code": "441601",
      "prov": "44",
      "city": "16",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441602",
      "prov": "44",
      "city": "16",
      "dist": "02",
      "name": "源城区",
      "level": 3
    },
    {
      "code": "441621",
      "prov": "44",
      "city": "16",
      "dist": "21",
      "name": "紫金县",
      "level": 3
    },
    {
      "code": "441622",
      "prov": "44",
      "city": "16",
      "dist": "22",
      "name": "龙川县",
      "level": 3
    },
    {
      "code": "441623",
      "prov": "44",
      "city": "16",
      "dist": "23",
      "name": "连平县",
      "level": 3
    },
    {
      "code": "441624",
      "prov": "44",
      "city": "16",
      "dist": "24",
      "name": "和平县",
      "level": 3
    },
    {
      "code": "441625",
      "prov": "44",
      "city": "16",
      "dist": "25",
      "name": "东源县",
      "level": 3
    },
    {
      "code": "441700",
      "prov": "44",
      "city": "17",
      "dist": "00",
      "name": "阳江市",
      "level": 2
    },
    {
      "code": "441701",
      "prov": "44",
      "city": "17",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441702",
      "prov": "44",
      "city": "17",
      "dist": "02",
      "name": "江城区",
      "level": 3
    },
    {
      "code": "441721",
      "prov": "44",
      "city": "17",
      "dist": "21",
      "name": "阳西县",
      "level": 3
    },
    {
      "code": "441723",
      "prov": "44",
      "city": "17",
      "dist": "23",
      "name": "阳东县",
      "level": 3
    },
    {
      "code": "441781",
      "prov": "44",
      "city": "17",
      "dist": "81",
      "name": "阳春市",
      "level": 3
    },
    {
      "code": "441800",
      "prov": "44",
      "city": "18",
      "dist": "00",
      "name": "清远市",
      "level": 2
    },
    {
      "code": "441801",
      "prov": "44",
      "city": "18",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "441802",
      "prov": "44",
      "city": "18",
      "dist": "02",
      "name": "清城区",
      "level": 3
    },
    {
      "code": "441803",
      "prov": "44",
      "city": "18",
      "dist": "03",
      "name": "清新区",
      "level": 3
    },
    {
      "code": "441821",
      "prov": "44",
      "city": "18",
      "dist": "21",
      "name": "佛冈县",
      "level": 3
    },
    {
      "code": "441823",
      "prov": "44",
      "city": "18",
      "dist": "23",
      "name": "阳山县",
      "level": 3
    },
    {
      "code": "441825",
      "prov": "44",
      "city": "18",
      "dist": "25",
      "name": "连山壮族瑶族自治县",
      "level": 3
    },
    {
      "code": "441826",
      "prov": "44",
      "city": "18",
      "dist": "26",
      "name": "连南瑶族自治县",
      "level": 3
    },
    {
      "code": "441881",
      "prov": "44",
      "city": "18",
      "dist": "81",
      "name": "英德市",
      "level": 3
    },
    {
      "code": "441882",
      "prov": "44",
      "city": "18",
      "dist": "82",
      "name": "连州市",
      "level": 3
    },
    {
      "code": "441900",
      "prov": "44",
      "city": "19",
      "dist": "00",
      "name": "东莞市",
      "level": 2
    },
    {
      "code": "442000",
      "prov": "44",
      "city": "20",
      "dist": "00",
      "name": "中山市",
      "level": 2
    },
    {
      "code": "445100",
      "prov": "44",
      "city": "51",
      "dist": "00",
      "name": "潮州市",
      "level": 2
    },
    {
      "code": "445101",
      "prov": "44",
      "city": "51",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "445102",
      "prov": "44",
      "city": "51",
      "dist": "02",
      "name": "湘桥区",
      "level": 3
    },
    {
      "code": "445103",
      "prov": "44",
      "city": "51",
      "dist": "03",
      "name": "潮安区",
      "level": 3
    },
    {
      "code": "445122",
      "prov": "44",
      "city": "51",
      "dist": "22",
      "name": "饶平县",
      "level": 3
    },
    {
      "code": "445200",
      "prov": "44",
      "city": "52",
      "dist": "00",
      "name": "揭阳市",
      "level": 2
    },
    {
      "code": "445201",
      "prov": "44",
      "city": "52",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "445202",
      "prov": "44",
      "city": "52",
      "dist": "02",
      "name": "榕城区",
      "level": 3
    },
    {
      "code": "445203",
      "prov": "44",
      "city": "52",
      "dist": "03",
      "name": "揭东区",
      "level": 3
    },
    {
      "code": "445222",
      "prov": "44",
      "city": "52",
      "dist": "22",
      "name": "揭西县",
      "level": 3
    },
    {
      "code": "445224",
      "prov": "44",
      "city": "52",
      "dist": "24",
      "name": "惠来县",
      "level": 3
    },
    {
      "code": "445281",
      "prov": "44",
      "city": "52",
      "dist": "81",
      "name": "普宁市",
      "level": 3
    },
    {
      "code": "445300",
      "prov": "44",
      "city": "53",
      "dist": "00",
      "name": "云浮市",
      "level": 2
    },
    {
      "code": "445301",
      "prov": "44",
      "city": "53",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "445302",
      "prov": "44",
      "city": "53",
      "dist": "02",
      "name": "云城区",
      "level": 3
    },
    {
      "code": "445303",
      "prov": "44",
      "city": "53",
      "dist": "03",
      "name": "云安区",
      "level": 3
    },
    {
      "code": "445321",
      "prov": "44",
      "city": "53",
      "dist": "21",
      "name": "新兴县",
      "level": 3
    },
    {
      "code": "445322",
      "prov": "44",
      "city": "53",
      "dist": "22",
      "name": "郁南县",
      "level": 3
    },
    {
      "code": "445381",
      "prov": "44",
      "city": "53",
      "dist": "81",
      "name": "罗定市",
      "level": 3
    },
    {
      "code": "450000",
      "prov": "45",
      "city": "00",
      "dist": "00",
      "name": "广西壮族自治区",
      "level": 1
    },
    {
      "code": "450100",
      "prov": "45",
      "city": "01",
      "dist": "00",
      "name": "南宁市",
      "level": 2
    },
    {
      "code": "450101",
      "prov": "45",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450102",
      "prov": "45",
      "city": "01",
      "dist": "02",
      "name": "兴宁区",
      "level": 3
    },
    {
      "code": "450103",
      "prov": "45",
      "city": "01",
      "dist": "03",
      "name": "青秀区",
      "level": 3
    },
    {
      "code": "450105",
      "prov": "45",
      "city": "01",
      "dist": "05",
      "name": "江南区",
      "level": 3
    },
    {
      "code": "450107",
      "prov": "45",
      "city": "01",
      "dist": "07",
      "name": "西乡塘区",
      "level": 3
    },
    {
      "code": "450108",
      "prov": "45",
      "city": "01",
      "dist": "08",
      "name": "良庆区",
      "level": 3
    },
    {
      "code": "450109",
      "prov": "45",
      "city": "01",
      "dist": "09",
      "name": "邕宁区",
      "level": 3
    },
    {
      "code": "450122",
      "prov": "45",
      "city": "01",
      "dist": "22",
      "name": "武鸣县",
      "level": 3
    },
    {
      "code": "450123",
      "prov": "45",
      "city": "01",
      "dist": "23",
      "name": "隆安县",
      "level": 3
    },
    {
      "code": "450124",
      "prov": "45",
      "city": "01",
      "dist": "24",
      "name": "马山县",
      "level": 3
    },
    {
      "code": "450125",
      "prov": "45",
      "city": "01",
      "dist": "25",
      "name": "上林县",
      "level": 3
    },
    {
      "code": "450126",
      "prov": "45",
      "city": "01",
      "dist": "26",
      "name": "宾阳县",
      "level": 3
    },
    {
      "code": "450127",
      "prov": "45",
      "city": "01",
      "dist": "27",
      "name": "横县",
      "level": 3
    },
    {
      "code": "450200",
      "prov": "45",
      "city": "02",
      "dist": "00",
      "name": "柳州市",
      "level": 2
    },
    {
      "code": "450201",
      "prov": "45",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450202",
      "prov": "45",
      "city": "02",
      "dist": "02",
      "name": "城中区",
      "level": 3
    },
    {
      "code": "450203",
      "prov": "45",
      "city": "02",
      "dist": "03",
      "name": "鱼峰区",
      "level": 3
    },
    {
      "code": "450204",
      "prov": "45",
      "city": "02",
      "dist": "04",
      "name": "柳南区",
      "level": 3
    },
    {
      "code": "450205",
      "prov": "45",
      "city": "02",
      "dist": "05",
      "name": "柳北区",
      "level": 3
    },
    {
      "code": "450221",
      "prov": "45",
      "city": "02",
      "dist": "21",
      "name": "柳江县",
      "level": 3
    },
    {
      "code": "450222",
      "prov": "45",
      "city": "02",
      "dist": "22",
      "name": "柳城县",
      "level": 3
    },
    {
      "code": "450223",
      "prov": "45",
      "city": "02",
      "dist": "23",
      "name": "鹿寨县",
      "level": 3
    },
    {
      "code": "450224",
      "prov": "45",
      "city": "02",
      "dist": "24",
      "name": "融安县",
      "level": 3
    },
    {
      "code": "450225",
      "prov": "45",
      "city": "02",
      "dist": "25",
      "name": "融水苗族自治县",
      "level": 3
    },
    {
      "code": "450226",
      "prov": "45",
      "city": "02",
      "dist": "26",
      "name": "三江侗族自治县",
      "level": 3
    },
    {
      "code": "450300",
      "prov": "45",
      "city": "03",
      "dist": "00",
      "name": "桂林市",
      "level": 2
    },
    {
      "code": "450301",
      "prov": "45",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450302",
      "prov": "45",
      "city": "03",
      "dist": "02",
      "name": "秀峰区",
      "level": 3
    },
    {
      "code": "450303",
      "prov": "45",
      "city": "03",
      "dist": "03",
      "name": "叠彩区",
      "level": 3
    },
    {
      "code": "450304",
      "prov": "45",
      "city": "03",
      "dist": "04",
      "name": "象山区",
      "level": 3
    },
    {
      "code": "450305",
      "prov": "45",
      "city": "03",
      "dist": "05",
      "name": "七星区",
      "level": 3
    },
    {
      "code": "450311",
      "prov": "45",
      "city": "03",
      "dist": "11",
      "name": "雁山区",
      "level": 3
    },
    {
      "code": "450312",
      "prov": "45",
      "city": "03",
      "dist": "12",
      "name": "临桂区",
      "level": 3
    },
    {
      "code": "450321",
      "prov": "45",
      "city": "03",
      "dist": "21",
      "name": "阳朔县",
      "level": 3
    },
    {
      "code": "450323",
      "prov": "45",
      "city": "03",
      "dist": "23",
      "name": "灵川县",
      "level": 3
    },
    {
      "code": "450324",
      "prov": "45",
      "city": "03",
      "dist": "24",
      "name": "全州县",
      "level": 3
    },
    {
      "code": "450325",
      "prov": "45",
      "city": "03",
      "dist": "25",
      "name": "兴安县",
      "level": 3
    },
    {
      "code": "450326",
      "prov": "45",
      "city": "03",
      "dist": "26",
      "name": "永福县",
      "level": 3
    },
    {
      "code": "450327",
      "prov": "45",
      "city": "03",
      "dist": "27",
      "name": "灌阳县",
      "level": 3
    },
    {
      "code": "450328",
      "prov": "45",
      "city": "03",
      "dist": "28",
      "name": "龙胜各族自治县",
      "level": 3
    },
    {
      "code": "450329",
      "prov": "45",
      "city": "03",
      "dist": "29",
      "name": "资源县",
      "level": 3
    },
    {
      "code": "450330",
      "prov": "45",
      "city": "03",
      "dist": "30",
      "name": "平乐县",
      "level": 3
    },
    {
      "code": "450331",
      "prov": "45",
      "city": "03",
      "dist": "31",
      "name": "荔浦县",
      "level": 3
    },
    {
      "code": "450332",
      "prov": "45",
      "city": "03",
      "dist": "32",
      "name": "恭城瑶族自治县",
      "level": 3
    },
    {
      "code": "450400",
      "prov": "45",
      "city": "04",
      "dist": "00",
      "name": "梧州市",
      "level": 2
    },
    {
      "code": "450401",
      "prov": "45",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450403",
      "prov": "45",
      "city": "04",
      "dist": "03",
      "name": "万秀区",
      "level": 3
    },
    {
      "code": "450405",
      "prov": "45",
      "city": "04",
      "dist": "05",
      "name": "长洲区",
      "level": 3
    },
    {
      "code": "450406",
      "prov": "45",
      "city": "04",
      "dist": "06",
      "name": "龙圩区",
      "level": 3
    },
    {
      "code": "450421",
      "prov": "45",
      "city": "04",
      "dist": "21",
      "name": "苍梧县",
      "level": 3
    },
    {
      "code": "450422",
      "prov": "45",
      "city": "04",
      "dist": "22",
      "name": "藤县",
      "level": 3
    },
    {
      "code": "450423",
      "prov": "45",
      "city": "04",
      "dist": "23",
      "name": "蒙山县",
      "level": 3
    },
    {
      "code": "450481",
      "prov": "45",
      "city": "04",
      "dist": "81",
      "name": "岑溪市",
      "level": 3
    },
    {
      "code": "450500",
      "prov": "45",
      "city": "05",
      "dist": "00",
      "name": "北海市",
      "level": 2
    },
    {
      "code": "450501",
      "prov": "45",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450502",
      "prov": "45",
      "city": "05",
      "dist": "02",
      "name": "海城区",
      "level": 3
    },
    {
      "code": "450503",
      "prov": "45",
      "city": "05",
      "dist": "03",
      "name": "银海区",
      "level": 3
    },
    {
      "code": "450512",
      "prov": "45",
      "city": "05",
      "dist": "12",
      "name": "铁山港区",
      "level": 3
    },
    {
      "code": "450521",
      "prov": "45",
      "city": "05",
      "dist": "21",
      "name": "合浦县",
      "level": 3
    },
    {
      "code": "450600",
      "prov": "45",
      "city": "06",
      "dist": "00",
      "name": "防城港市",
      "level": 2
    },
    {
      "code": "450601",
      "prov": "45",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450602",
      "prov": "45",
      "city": "06",
      "dist": "02",
      "name": "港口区",
      "level": 3
    },
    {
      "code": "450603",
      "prov": "45",
      "city": "06",
      "dist": "03",
      "name": "防城区",
      "level": 3
    },
    {
      "code": "450621",
      "prov": "45",
      "city": "06",
      "dist": "21",
      "name": "上思县",
      "level": 3
    },
    {
      "code": "450681",
      "prov": "45",
      "city": "06",
      "dist": "81",
      "name": "东兴市",
      "level": 3
    },
    {
      "code": "450700",
      "prov": "45",
      "city": "07",
      "dist": "00",
      "name": "钦州市",
      "level": 2
    },
    {
      "code": "450701",
      "prov": "45",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450702",
      "prov": "45",
      "city": "07",
      "dist": "02",
      "name": "钦南区",
      "level": 3
    },
    {
      "code": "450703",
      "prov": "45",
      "city": "07",
      "dist": "03",
      "name": "钦北区",
      "level": 3
    },
    {
      "code": "450721",
      "prov": "45",
      "city": "07",
      "dist": "21",
      "name": "灵山县",
      "level": 3
    },
    {
      "code": "450722",
      "prov": "45",
      "city": "07",
      "dist": "22",
      "name": "浦北县",
      "level": 3
    },
    {
      "code": "450800",
      "prov": "45",
      "city": "08",
      "dist": "00",
      "name": "贵港市",
      "level": 2
    },
    {
      "code": "450801",
      "prov": "45",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450802",
      "prov": "45",
      "city": "08",
      "dist": "02",
      "name": "港北区",
      "level": 3
    },
    {
      "code": "450803",
      "prov": "45",
      "city": "08",
      "dist": "03",
      "name": "港南区",
      "level": 3
    },
    {
      "code": "450804",
      "prov": "45",
      "city": "08",
      "dist": "04",
      "name": "覃塘区",
      "level": 3
    },
    {
      "code": "450821",
      "prov": "45",
      "city": "08",
      "dist": "21",
      "name": "平南县",
      "level": 3
    },
    {
      "code": "450881",
      "prov": "45",
      "city": "08",
      "dist": "81",
      "name": "桂平市",
      "level": 3
    },
    {
      "code": "450900",
      "prov": "45",
      "city": "09",
      "dist": "00",
      "name": "玉林市",
      "level": 2
    },
    {
      "code": "450901",
      "prov": "45",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "450902",
      "prov": "45",
      "city": "09",
      "dist": "02",
      "name": "玉州区",
      "level": 3
    },
    {
      "code": "450903",
      "prov": "45",
      "city": "09",
      "dist": "03",
      "name": "福绵区",
      "level": 3
    },
    {
      "code": "450921",
      "prov": "45",
      "city": "09",
      "dist": "21",
      "name": "容县",
      "level": 3
    },
    {
      "code": "450922",
      "prov": "45",
      "city": "09",
      "dist": "22",
      "name": "陆川县",
      "level": 3
    },
    {
      "code": "450923",
      "prov": "45",
      "city": "09",
      "dist": "23",
      "name": "博白县",
      "level": 3
    },
    {
      "code": "450924",
      "prov": "45",
      "city": "09",
      "dist": "24",
      "name": "兴业县",
      "level": 3
    },
    {
      "code": "450981",
      "prov": "45",
      "city": "09",
      "dist": "81",
      "name": "北流市",
      "level": 3
    },
    {
      "code": "451000",
      "prov": "45",
      "city": "10",
      "dist": "00",
      "name": "百色市",
      "level": 2
    },
    {
      "code": "451001",
      "prov": "45",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "451002",
      "prov": "45",
      "city": "10",
      "dist": "02",
      "name": "右江区",
      "level": 3
    },
    {
      "code": "451021",
      "prov": "45",
      "city": "10",
      "dist": "21",
      "name": "田阳县",
      "level": 3
    },
    {
      "code": "451022",
      "prov": "45",
      "city": "10",
      "dist": "22",
      "name": "田东县",
      "level": 3
    },
    {
      "code": "451023",
      "prov": "45",
      "city": "10",
      "dist": "23",
      "name": "平果县",
      "level": 3
    },
    {
      "code": "451024",
      "prov": "45",
      "city": "10",
      "dist": "24",
      "name": "德保县",
      "level": 3
    },
    {
      "code": "451025",
      "prov": "45",
      "city": "10",
      "dist": "25",
      "name": "靖西县",
      "level": 3
    },
    {
      "code": "451026",
      "prov": "45",
      "city": "10",
      "dist": "26",
      "name": "那坡县",
      "level": 3
    },
    {
      "code": "451027",
      "prov": "45",
      "city": "10",
      "dist": "27",
      "name": "凌云县",
      "level": 3
    },
    {
      "code": "451028",
      "prov": "45",
      "city": "10",
      "dist": "28",
      "name": "乐业县",
      "level": 3
    },
    {
      "code": "451029",
      "prov": "45",
      "city": "10",
      "dist": "29",
      "name": "田林县",
      "level": 3
    },
    {
      "code": "451030",
      "prov": "45",
      "city": "10",
      "dist": "30",
      "name": "西林县",
      "level": 3
    },
    {
      "code": "451031",
      "prov": "45",
      "city": "10",
      "dist": "31",
      "name": "隆林各族自治县",
      "level": 3
    },
    {
      "code": "451100",
      "prov": "45",
      "city": "11",
      "dist": "00",
      "name": "贺州市",
      "level": 2
    },
    {
      "code": "451101",
      "prov": "45",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "451102",
      "prov": "45",
      "city": "11",
      "dist": "02",
      "name": "八步区",
      "level": 3
    },
    {
      "code": "451121",
      "prov": "45",
      "city": "11",
      "dist": "21",
      "name": "昭平县",
      "level": 3
    },
    {
      "code": "451122",
      "prov": "45",
      "city": "11",
      "dist": "22",
      "name": "钟山县",
      "level": 3
    },
    {
      "code": "451123",
      "prov": "45",
      "city": "11",
      "dist": "23",
      "name": "富川瑶族自治县",
      "level": 3
    },
    {
      "code": "451200",
      "prov": "45",
      "city": "12",
      "dist": "00",
      "name": "河池市",
      "level": 2
    },
    {
      "code": "451201",
      "prov": "45",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "451202",
      "prov": "45",
      "city": "12",
      "dist": "02",
      "name": "金城江区",
      "level": 3
    },
    {
      "code": "451221",
      "prov": "45",
      "city": "12",
      "dist": "21",
      "name": "南丹县",
      "level": 3
    },
    {
      "code": "451222",
      "prov": "45",
      "city": "12",
      "dist": "22",
      "name": "天峨县",
      "level": 3
    },
    {
      "code": "451223",
      "prov": "45",
      "city": "12",
      "dist": "23",
      "name": "凤山县",
      "level": 3
    },
    {
      "code": "451224",
      "prov": "45",
      "city": "12",
      "dist": "24",
      "name": "东兰县",
      "level": 3
    },
    {
      "code": "451225",
      "prov": "45",
      "city": "12",
      "dist": "25",
      "name": "罗城仫佬族自治县",
      "level": 3
    },
    {
      "code": "451226",
      "prov": "45",
      "city": "12",
      "dist": "26",
      "name": "环江毛南族自治县",
      "level": 3
    },
    {
      "code": "451227",
      "prov": "45",
      "city": "12",
      "dist": "27",
      "name": "巴马瑶族自治县",
      "level": 3
    },
    {
      "code": "451228",
      "prov": "45",
      "city": "12",
      "dist": "28",
      "name": "都安瑶族自治县",
      "level": 3
    },
    {
      "code": "451229",
      "prov": "45",
      "city": "12",
      "dist": "29",
      "name": "大化瑶族自治县",
      "level": 3
    },
    {
      "code": "451281",
      "prov": "45",
      "city": "12",
      "dist": "81",
      "name": "宜州市",
      "level": 3
    },
    {
      "code": "451300",
      "prov": "45",
      "city": "13",
      "dist": "00",
      "name": "来宾市",
      "level": 2
    },
    {
      "code": "451301",
      "prov": "45",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "451302",
      "prov": "45",
      "city": "13",
      "dist": "02",
      "name": "兴宾区",
      "level": 3
    },
    {
      "code": "451321",
      "prov": "45",
      "city": "13",
      "dist": "21",
      "name": "忻城县",
      "level": 3
    },
    {
      "code": "451322",
      "prov": "45",
      "city": "13",
      "dist": "22",
      "name": "象州县",
      "level": 3
    },
    {
      "code": "451323",
      "prov": "45",
      "city": "13",
      "dist": "23",
      "name": "武宣县",
      "level": 3
    },
    {
      "code": "451324",
      "prov": "45",
      "city": "13",
      "dist": "24",
      "name": "金秀瑶族自治县",
      "level": 3
    },
    {
      "code": "451381",
      "prov": "45",
      "city": "13",
      "dist": "81",
      "name": "合山市",
      "level": 3
    },
    {
      "code": "451400",
      "prov": "45",
      "city": "14",
      "dist": "00",
      "name": "崇左市",
      "level": 2
    },
    {
      "code": "451401",
      "prov": "45",
      "city": "14",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "451402",
      "prov": "45",
      "city": "14",
      "dist": "02",
      "name": "江州区",
      "level": 3
    },
    {
      "code": "451421",
      "prov": "45",
      "city": "14",
      "dist": "21",
      "name": "扶绥县",
      "level": 3
    },
    {
      "code": "451422",
      "prov": "45",
      "city": "14",
      "dist": "22",
      "name": "宁明县",
      "level": 3
    },
    {
      "code": "451423",
      "prov": "45",
      "city": "14",
      "dist": "23",
      "name": "龙州县",
      "level": 3
    },
    {
      "code": "451424",
      "prov": "45",
      "city": "14",
      "dist": "24",
      "name": "大新县",
      "level": 3
    },
    {
      "code": "451425",
      "prov": "45",
      "city": "14",
      "dist": "25",
      "name": "天等县",
      "level": 3
    },
    {
      "code": "451481",
      "prov": "45",
      "city": "14",
      "dist": "81",
      "name": "凭祥市",
      "level": 3
    },
    {
      "code": "460000",
      "prov": "46",
      "city": "00",
      "dist": "00",
      "name": "海南省",
      "level": 1
    },
    {
      "code": "460100",
      "prov": "46",
      "city": "01",
      "dist": "00",
      "name": "海口市",
      "level": 2
    },
    {
      "code": "460101",
      "prov": "46",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "460105",
      "prov": "46",
      "city": "01",
      "dist": "05",
      "name": "秀英区",
      "level": 3
    },
    {
      "code": "460106",
      "prov": "46",
      "city": "01",
      "dist": "06",
      "name": "龙华区",
      "level": 3
    },
    {
      "code": "460107",
      "prov": "46",
      "city": "01",
      "dist": "07",
      "name": "琼山区",
      "level": 3
    },
    {
      "code": "460108",
      "prov": "46",
      "city": "01",
      "dist": "08",
      "name": "美兰区",
      "level": 3
    },
    {
      "code": "460200",
      "prov": "46",
      "city": "02",
      "dist": "00",
      "name": "三亚市",
      "level": 2
    },
    {
      "code": "460201",
      "prov": "46",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "460202",
      "prov": "46",
      "city": "02",
      "dist": "02",
      "name": "海棠区",
      "level": 3
    },
    {
      "code": "460203",
      "prov": "46",
      "city": "02",
      "dist": "03",
      "name": "吉阳区",
      "level": 3
    },
    {
      "code": "460204",
      "prov": "46",
      "city": "02",
      "dist": "04",
      "name": "天涯区",
      "level": 3
    },
    {
      "code": "460205",
      "prov": "46",
      "city": "02",
      "dist": "05",
      "name": "崖州区",
      "level": 3
    },
    {
      "code": "460300",
      "prov": "46",
      "city": "03",
      "dist": "00",
      "name": "三沙市",
      "level": 2
    },
    {
      "code": "469000",
      "prov": "46",
      "city": "90",
      "dist": "00",
      "name": "省直辖县级行政区划",
      "level": 2
    },
    {
      "code": "469001",
      "prov": "46",
      "city": "90",
      "dist": "01",
      "name": "五指山市",
      "level": 3
    },
    {
      "code": "469002",
      "prov": "46",
      "city": "90",
      "dist": "02",
      "name": "琼海市",
      "level": 3
    },
    {
      "code": "469003",
      "prov": "46",
      "city": "90",
      "dist": "03",
      "name": "儋州市",
      "level": 3
    },
    {
      "code": "469005",
      "prov": "46",
      "city": "90",
      "dist": "05",
      "name": "文昌市",
      "level": 3
    },
    {
      "code": "469006",
      "prov": "46",
      "city": "90",
      "dist": "06",
      "name": "万宁市",
      "level": 3
    },
    {
      "code": "469007",
      "prov": "46",
      "city": "90",
      "dist": "07",
      "name": "东方市",
      "level": 3
    },
    {
      "code": "469021",
      "prov": "46",
      "city": "90",
      "dist": "21",
      "name": "定安县",
      "level": 3
    },
    {
      "code": "469022",
      "prov": "46",
      "city": "90",
      "dist": "22",
      "name": "屯昌县",
      "level": 3
    },
    {
      "code": "469023",
      "prov": "46",
      "city": "90",
      "dist": "23",
      "name": "澄迈县",
      "level": 3
    },
    {
      "code": "469024",
      "prov": "46",
      "city": "90",
      "dist": "24",
      "name": "临高县",
      "level": 3
    },
    {
      "code": "469025",
      "prov": "46",
      "city": "90",
      "dist": "25",
      "name": "白沙黎族自治县",
      "level": 3
    },
    {
      "code": "469026",
      "prov": "46",
      "city": "90",
      "dist": "26",
      "name": "昌江黎族自治县",
      "level": 3
    },
    {
      "code": "469027",
      "prov": "46",
      "city": "90",
      "dist": "27",
      "name": "乐东黎族自治县",
      "level": 3
    },
    {
      "code": "469028",
      "prov": "46",
      "city": "90",
      "dist": "28",
      "name": "陵水黎族自治县",
      "level": 3
    },
    {
      "code": "469029",
      "prov": "46",
      "city": "90",
      "dist": "29",
      "name": "保亭黎族苗族自治县",
      "level": 3
    },
    {
      "code": "469030",
      "prov": "46",
      "city": "90",
      "dist": "30",
      "name": "琼中黎族苗族自治县",
      "level": 3
    },
    {
      "code": "500000",
      "prov": "50",
      "city": "00",
      "dist": "00",
      "name": "重庆市",
      "level": 1
    },
    {
      "code": "500100",
      "prov": "50",
      "city": "01",
      "dist": "00",
      "name": "市辖区",
      "level": 2
    },
    {
      "code": "500101",
      "prov": "50",
      "city": "01",
      "dist": "01",
      "name": "万州区",
      "level": 3
    },
    {
      "code": "500102",
      "prov": "50",
      "city": "01",
      "dist": "02",
      "name": "涪陵区",
      "level": 3
    },
    {
      "code": "500103",
      "prov": "50",
      "city": "01",
      "dist": "03",
      "name": "渝中区",
      "level": 3
    },
    {
      "code": "500104",
      "prov": "50",
      "city": "01",
      "dist": "04",
      "name": "大渡口区",
      "level": 3
    },
    {
      "code": "500105",
      "prov": "50",
      "city": "01",
      "dist": "05",
      "name": "江北区",
      "level": 3
    },
    {
      "code": "500106",
      "prov": "50",
      "city": "01",
      "dist": "06",
      "name": "沙坪坝区",
      "level": 3
    },
    {
      "code": "500107",
      "prov": "50",
      "city": "01",
      "dist": "07",
      "name": "九龙坡区",
      "level": 3
    },
    {
      "code": "500108",
      "prov": "50",
      "city": "01",
      "dist": "08",
      "name": "南岸区",
      "level": 3
    },
    {
      "code": "500109",
      "prov": "50",
      "city": "01",
      "dist": "09",
      "name": "北碚区",
      "level": 3
    },
    {
      "code": "500110",
      "prov": "50",
      "city": "01",
      "dist": "10",
      "name": "綦江区",
      "level": 3
    },
    {
      "code": "500111",
      "prov": "50",
      "city": "01",
      "dist": "11",
      "name": "大足区",
      "level": 3
    },
    {
      "code": "500112",
      "prov": "50",
      "city": "01",
      "dist": "12",
      "name": "渝北区",
      "level": 3
    },
    {
      "code": "500113",
      "prov": "50",
      "city": "01",
      "dist": "13",
      "name": "巴南区",
      "level": 3
    },
    {
      "code": "500114",
      "prov": "50",
      "city": "01",
      "dist": "14",
      "name": "黔江区",
      "level": 3
    },
    {
      "code": "500115",
      "prov": "50",
      "city": "01",
      "dist": "15",
      "name": "长寿区",
      "level": 3
    },
    {
      "code": "500116",
      "prov": "50",
      "city": "01",
      "dist": "16",
      "name": "江津区",
      "level": 3
    },
    {
      "code": "500117",
      "prov": "50",
      "city": "01",
      "dist": "17",
      "name": "合川区",
      "level": 3
    },
    {
      "code": "500118",
      "prov": "50",
      "city": "01",
      "dist": "18",
      "name": "永川区",
      "level": 3
    },
    {
      "code": "500119",
      "prov": "50",
      "city": "01",
      "dist": "19",
      "name": "南川区",
      "level": 3
    },
    {
      "code": "500120",
      "prov": "50",
      "city": "01",
      "dist": "20",
      "name": "璧山区",
      "level": 3
    },
    {
      "code": "500151",
      "prov": "50",
      "city": "01",
      "dist": "51",
      "name": "铜梁区",
      "level": 3
    },
    {
      "code": "500200",
      "prov": "50",
      "city": "02",
      "dist": "00",
      "name": "县",
      "level": 2
    },
    {
      "code": "500223",
      "prov": "50",
      "city": "02",
      "dist": "23",
      "name": "潼南县",
      "level": 3
    },
    {
      "code": "500226",
      "prov": "50",
      "city": "02",
      "dist": "26",
      "name": "荣昌县",
      "level": 3
    },
    {
      "code": "500228",
      "prov": "50",
      "city": "02",
      "dist": "28",
      "name": "梁平县",
      "level": 3
    },
    {
      "code": "500229",
      "prov": "50",
      "city": "02",
      "dist": "29",
      "name": "城口县",
      "level": 3
    },
    {
      "code": "500230",
      "prov": "50",
      "city": "02",
      "dist": "30",
      "name": "丰都县",
      "level": 3
    },
    {
      "code": "500231",
      "prov": "50",
      "city": "02",
      "dist": "31",
      "name": "垫江县",
      "level": 3
    },
    {
      "code": "500232",
      "prov": "50",
      "city": "02",
      "dist": "32",
      "name": "武隆县",
      "level": 3
    },
    {
      "code": "500233",
      "prov": "50",
      "city": "02",
      "dist": "33",
      "name": "忠县",
      "level": 3
    },
    {
      "code": "500234",
      "prov": "50",
      "city": "02",
      "dist": "34",
      "name": "开县",
      "level": 3
    },
    {
      "code": "500235",
      "prov": "50",
      "city": "02",
      "dist": "35",
      "name": "云阳县",
      "level": 3
    },
    {
      "code": "500236",
      "prov": "50",
      "city": "02",
      "dist": "36",
      "name": "奉节县",
      "level": 3
    },
    {
      "code": "500237",
      "prov": "50",
      "city": "02",
      "dist": "37",
      "name": "巫山县",
      "level": 3
    },
    {
      "code": "500238",
      "prov": "50",
      "city": "02",
      "dist": "38",
      "name": "巫溪县",
      "level": 3
    },
    {
      "code": "500240",
      "prov": "50",
      "city": "02",
      "dist": "40",
      "name": "石柱土家族自治县",
      "level": 3
    },
    {
      "code": "500241",
      "prov": "50",
      "city": "02",
      "dist": "41",
      "name": "秀山土家族苗族自治县",
      "level": 3
    },
    {
      "code": "500242",
      "prov": "50",
      "city": "02",
      "dist": "42",
      "name": "酉阳土家族苗族自治县",
      "level": 3
    },
    {
      "code": "500243",
      "prov": "50",
      "city": "02",
      "dist": "43",
      "name": "彭水苗族土家族自治县",
      "level": 3
    },
    {
      "code": "510000",
      "prov": "51",
      "city": "00",
      "dist": "00",
      "name": "四川省",
      "level": 1
    },
    {
      "code": "510100",
      "prov": "51",
      "city": "01",
      "dist": "00",
      "name": "成都市",
      "level": 2
    },
    {
      "code": "510101",
      "prov": "51",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510104",
      "prov": "51",
      "city": "01",
      "dist": "04",
      "name": "锦江区",
      "level": 3
    },
    {
      "code": "510105",
      "prov": "51",
      "city": "01",
      "dist": "05",
      "name": "青羊区",
      "level": 3
    },
    {
      "code": "510106",
      "prov": "51",
      "city": "01",
      "dist": "06",
      "name": "金牛区",
      "level": 3
    },
    {
      "code": "510107",
      "prov": "51",
      "city": "01",
      "dist": "07",
      "name": "武侯区",
      "level": 3
    },
    {
      "code": "510108",
      "prov": "51",
      "city": "01",
      "dist": "08",
      "name": "成华区",
      "level": 3
    },
    {
      "code": "510112",
      "prov": "51",
      "city": "01",
      "dist": "12",
      "name": "龙泉驿区",
      "level": 3
    },
    {
      "code": "510113",
      "prov": "51",
      "city": "01",
      "dist": "13",
      "name": "青白江区",
      "level": 3
    },
    {
      "code": "510114",
      "prov": "51",
      "city": "01",
      "dist": "14",
      "name": "新都区",
      "level": 3
    },
    {
      "code": "510115",
      "prov": "51",
      "city": "01",
      "dist": "15",
      "name": "温江区",
      "level": 3
    },
    {
      "code": "510121",
      "prov": "51",
      "city": "01",
      "dist": "21",
      "name": "金堂县",
      "level": 3
    },
    {
      "code": "510122",
      "prov": "51",
      "city": "01",
      "dist": "22",
      "name": "双流县",
      "level": 3
    },
    {
      "code": "510124",
      "prov": "51",
      "city": "01",
      "dist": "24",
      "name": "郫县",
      "level": 3
    },
    {
      "code": "510129",
      "prov": "51",
      "city": "01",
      "dist": "29",
      "name": "大邑县",
      "level": 3
    },
    {
      "code": "510131",
      "prov": "51",
      "city": "01",
      "dist": "31",
      "name": "蒲江县",
      "level": 3
    },
    {
      "code": "510132",
      "prov": "51",
      "city": "01",
      "dist": "32",
      "name": "新津县",
      "level": 3
    },
    {
      "code": "510181",
      "prov": "51",
      "city": "01",
      "dist": "81",
      "name": "都江堰市",
      "level": 3
    },
    {
      "code": "510182",
      "prov": "51",
      "city": "01",
      "dist": "82",
      "name": "彭州市",
      "level": 3
    },
    {
      "code": "510183",
      "prov": "51",
      "city": "01",
      "dist": "83",
      "name": "邛崃市",
      "level": 3
    },
    {
      "code": "510184",
      "prov": "51",
      "city": "01",
      "dist": "84",
      "name": "崇州市",
      "level": 3
    },
    {
      "code": "510300",
      "prov": "51",
      "city": "03",
      "dist": "00",
      "name": "自贡市",
      "level": 2
    },
    {
      "code": "510301",
      "prov": "51",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510302",
      "prov": "51",
      "city": "03",
      "dist": "02",
      "name": "自流井区",
      "level": 3
    },
    {
      "code": "510303",
      "prov": "51",
      "city": "03",
      "dist": "03",
      "name": "贡井区",
      "level": 3
    },
    {
      "code": "510304",
      "prov": "51",
      "city": "03",
      "dist": "04",
      "name": "大安区",
      "level": 3
    },
    {
      "code": "510311",
      "prov": "51",
      "city": "03",
      "dist": "11",
      "name": "沿滩区",
      "level": 3
    },
    {
      "code": "510321",
      "prov": "51",
      "city": "03",
      "dist": "21",
      "name": "荣县",
      "level": 3
    },
    {
      "code": "510322",
      "prov": "51",
      "city": "03",
      "dist": "22",
      "name": "富顺县",
      "level": 3
    },
    {
      "code": "510400",
      "prov": "51",
      "city": "04",
      "dist": "00",
      "name": "攀枝花市",
      "level": 2
    },
    {
      "code": "510401",
      "prov": "51",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510402",
      "prov": "51",
      "city": "04",
      "dist": "02",
      "name": "东区",
      "level": 3
    },
    {
      "code": "510403",
      "prov": "51",
      "city": "04",
      "dist": "03",
      "name": "西区",
      "level": 3
    },
    {
      "code": "510411",
      "prov": "51",
      "city": "04",
      "dist": "11",
      "name": "仁和区",
      "level": 3
    },
    {
      "code": "510421",
      "prov": "51",
      "city": "04",
      "dist": "21",
      "name": "米易县",
      "level": 3
    },
    {
      "code": "510422",
      "prov": "51",
      "city": "04",
      "dist": "22",
      "name": "盐边县",
      "level": 3
    },
    {
      "code": "510500",
      "prov": "51",
      "city": "05",
      "dist": "00",
      "name": "泸州市",
      "level": 2
    },
    {
      "code": "510501",
      "prov": "51",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510502",
      "prov": "51",
      "city": "05",
      "dist": "02",
      "name": "江阳区",
      "level": 3
    },
    {
      "code": "510503",
      "prov": "51",
      "city": "05",
      "dist": "03",
      "name": "纳溪区",
      "level": 3
    },
    {
      "code": "510504",
      "prov": "51",
      "city": "05",
      "dist": "04",
      "name": "龙马潭区",
      "level": 3
    },
    {
      "code": "510521",
      "prov": "51",
      "city": "05",
      "dist": "21",
      "name": "泸县",
      "level": 3
    },
    {
      "code": "510522",
      "prov": "51",
      "city": "05",
      "dist": "22",
      "name": "合江县",
      "level": 3
    },
    {
      "code": "510524",
      "prov": "51",
      "city": "05",
      "dist": "24",
      "name": "叙永县",
      "level": 3
    },
    {
      "code": "510525",
      "prov": "51",
      "city": "05",
      "dist": "25",
      "name": "古蔺县",
      "level": 3
    },
    {
      "code": "510600",
      "prov": "51",
      "city": "06",
      "dist": "00",
      "name": "德阳市",
      "level": 2
    },
    {
      "code": "510601",
      "prov": "51",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510603",
      "prov": "51",
      "city": "06",
      "dist": "03",
      "name": "旌阳区",
      "level": 3
    },
    {
      "code": "510623",
      "prov": "51",
      "city": "06",
      "dist": "23",
      "name": "中江县",
      "level": 3
    },
    {
      "code": "510626",
      "prov": "51",
      "city": "06",
      "dist": "26",
      "name": "罗江县",
      "level": 3
    },
    {
      "code": "510681",
      "prov": "51",
      "city": "06",
      "dist": "81",
      "name": "广汉市",
      "level": 3
    },
    {
      "code": "510682",
      "prov": "51",
      "city": "06",
      "dist": "82",
      "name": "什邡市",
      "level": 3
    },
    {
      "code": "510683",
      "prov": "51",
      "city": "06",
      "dist": "83",
      "name": "绵竹市",
      "level": 3
    },
    {
      "code": "510700",
      "prov": "51",
      "city": "07",
      "dist": "00",
      "name": "绵阳市",
      "level": 2
    },
    {
      "code": "510701",
      "prov": "51",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510703",
      "prov": "51",
      "city": "07",
      "dist": "03",
      "name": "涪城区",
      "level": 3
    },
    {
      "code": "510704",
      "prov": "51",
      "city": "07",
      "dist": "04",
      "name": "游仙区",
      "level": 3
    },
    {
      "code": "510722",
      "prov": "51",
      "city": "07",
      "dist": "22",
      "name": "三台县",
      "level": 3
    },
    {
      "code": "510723",
      "prov": "51",
      "city": "07",
      "dist": "23",
      "name": "盐亭县",
      "level": 3
    },
    {
      "code": "510724",
      "prov": "51",
      "city": "07",
      "dist": "24",
      "name": "安县",
      "level": 3
    },
    {
      "code": "510725",
      "prov": "51",
      "city": "07",
      "dist": "25",
      "name": "梓潼县",
      "level": 3
    },
    {
      "code": "510726",
      "prov": "51",
      "city": "07",
      "dist": "26",
      "name": "北川羌族自治县",
      "level": 3
    },
    {
      "code": "510727",
      "prov": "51",
      "city": "07",
      "dist": "27",
      "name": "平武县",
      "level": 3
    },
    {
      "code": "510781",
      "prov": "51",
      "city": "07",
      "dist": "81",
      "name": "江油市",
      "level": 3
    },
    {
      "code": "510800",
      "prov": "51",
      "city": "08",
      "dist": "00",
      "name": "广元市",
      "level": 2
    },
    {
      "code": "510801",
      "prov": "51",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510802",
      "prov": "51",
      "city": "08",
      "dist": "02",
      "name": "利州区",
      "level": 3
    },
    {
      "code": "510811",
      "prov": "51",
      "city": "08",
      "dist": "11",
      "name": "昭化区",
      "level": 3
    },
    {
      "code": "510812",
      "prov": "51",
      "city": "08",
      "dist": "12",
      "name": "朝天区",
      "level": 3
    },
    {
      "code": "510821",
      "prov": "51",
      "city": "08",
      "dist": "21",
      "name": "旺苍县",
      "level": 3
    },
    {
      "code": "510822",
      "prov": "51",
      "city": "08",
      "dist": "22",
      "name": "青川县",
      "level": 3
    },
    {
      "code": "510823",
      "prov": "51",
      "city": "08",
      "dist": "23",
      "name": "剑阁县",
      "level": 3
    },
    {
      "code": "510824",
      "prov": "51",
      "city": "08",
      "dist": "24",
      "name": "苍溪县",
      "level": 3
    },
    {
      "code": "510900",
      "prov": "51",
      "city": "09",
      "dist": "00",
      "name": "遂宁市",
      "level": 2
    },
    {
      "code": "510901",
      "prov": "51",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "510903",
      "prov": "51",
      "city": "09",
      "dist": "03",
      "name": "船山区",
      "level": 3
    },
    {
      "code": "510904",
      "prov": "51",
      "city": "09",
      "dist": "04",
      "name": "安居区",
      "level": 3
    },
    {
      "code": "510921",
      "prov": "51",
      "city": "09",
      "dist": "21",
      "name": "蓬溪县",
      "level": 3
    },
    {
      "code": "510922",
      "prov": "51",
      "city": "09",
      "dist": "22",
      "name": "射洪县",
      "level": 3
    },
    {
      "code": "510923",
      "prov": "51",
      "city": "09",
      "dist": "23",
      "name": "大英县",
      "level": 3
    },
    {
      "code": "511000",
      "prov": "51",
      "city": "10",
      "dist": "00",
      "name": "内江市",
      "level": 2
    },
    {
      "code": "511001",
      "prov": "51",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511002",
      "prov": "51",
      "city": "10",
      "dist": "02",
      "name": "市中区",
      "level": 3
    },
    {
      "code": "511011",
      "prov": "51",
      "city": "10",
      "dist": "11",
      "name": "东兴区",
      "level": 3
    },
    {
      "code": "511024",
      "prov": "51",
      "city": "10",
      "dist": "24",
      "name": "威远县",
      "level": 3
    },
    {
      "code": "511025",
      "prov": "51",
      "city": "10",
      "dist": "25",
      "name": "资中县",
      "level": 3
    },
    {
      "code": "511028",
      "prov": "51",
      "city": "10",
      "dist": "28",
      "name": "隆昌县",
      "level": 3
    },
    {
      "code": "511100",
      "prov": "51",
      "city": "11",
      "dist": "00",
      "name": "乐山市",
      "level": 2
    },
    {
      "code": "511101",
      "prov": "51",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511102",
      "prov": "51",
      "city": "11",
      "dist": "02",
      "name": "市中区",
      "level": 3
    },
    {
      "code": "511111",
      "prov": "51",
      "city": "11",
      "dist": "11",
      "name": "沙湾区",
      "level": 3
    },
    {
      "code": "511112",
      "prov": "51",
      "city": "11",
      "dist": "12",
      "name": "五通桥区",
      "level": 3
    },
    {
      "code": "511113",
      "prov": "51",
      "city": "11",
      "dist": "13",
      "name": "金口河区",
      "level": 3
    },
    {
      "code": "511123",
      "prov": "51",
      "city": "11",
      "dist": "23",
      "name": "犍为县",
      "level": 3
    },
    {
      "code": "511124",
      "prov": "51",
      "city": "11",
      "dist": "24",
      "name": "井研县",
      "level": 3
    },
    {
      "code": "511126",
      "prov": "51",
      "city": "11",
      "dist": "26",
      "name": "夹江县",
      "level": 3
    },
    {
      "code": "511129",
      "prov": "51",
      "city": "11",
      "dist": "29",
      "name": "沐川县",
      "level": 3
    },
    {
      "code": "511132",
      "prov": "51",
      "city": "11",
      "dist": "32",
      "name": "峨边彝族自治县",
      "level": 3
    },
    {
      "code": "511133",
      "prov": "51",
      "city": "11",
      "dist": "33",
      "name": "马边彝族自治县",
      "level": 3
    },
    {
      "code": "511181",
      "prov": "51",
      "city": "11",
      "dist": "81",
      "name": "峨眉山市",
      "level": 3
    },
    {
      "code": "511300",
      "prov": "51",
      "city": "13",
      "dist": "00",
      "name": "南充市",
      "level": 2
    },
    {
      "code": "511301",
      "prov": "51",
      "city": "13",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511302",
      "prov": "51",
      "city": "13",
      "dist": "02",
      "name": "顺庆区",
      "level": 3
    },
    {
      "code": "511303",
      "prov": "51",
      "city": "13",
      "dist": "03",
      "name": "高坪区",
      "level": 3
    },
    {
      "code": "511304",
      "prov": "51",
      "city": "13",
      "dist": "04",
      "name": "嘉陵区",
      "level": 3
    },
    {
      "code": "511321",
      "prov": "51",
      "city": "13",
      "dist": "21",
      "name": "南部县",
      "level": 3
    },
    {
      "code": "511322",
      "prov": "51",
      "city": "13",
      "dist": "22",
      "name": "营山县",
      "level": 3
    },
    {
      "code": "511323",
      "prov": "51",
      "city": "13",
      "dist": "23",
      "name": "蓬安县",
      "level": 3
    },
    {
      "code": "511324",
      "prov": "51",
      "city": "13",
      "dist": "24",
      "name": "仪陇县",
      "level": 3
    },
    {
      "code": "511325",
      "prov": "51",
      "city": "13",
      "dist": "25",
      "name": "西充县",
      "level": 3
    },
    {
      "code": "511381",
      "prov": "51",
      "city": "13",
      "dist": "81",
      "name": "阆中市",
      "level": 3
    },
    {
      "code": "511400",
      "prov": "51",
      "city": "14",
      "dist": "00",
      "name": "眉山市",
      "level": 2
    },
    {
      "code": "511401",
      "prov": "51",
      "city": "14",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511402",
      "prov": "51",
      "city": "14",
      "dist": "02",
      "name": "东坡区",
      "level": 3
    },
    {
      "code": "511421",
      "prov": "51",
      "city": "14",
      "dist": "21",
      "name": "仁寿县",
      "level": 3
    },
    {
      "code": "511422",
      "prov": "51",
      "city": "14",
      "dist": "22",
      "name": "彭山县",
      "level": 3
    },
    {
      "code": "511423",
      "prov": "51",
      "city": "14",
      "dist": "23",
      "name": "洪雅县",
      "level": 3
    },
    {
      "code": "511424",
      "prov": "51",
      "city": "14",
      "dist": "24",
      "name": "丹棱县",
      "level": 3
    },
    {
      "code": "511425",
      "prov": "51",
      "city": "14",
      "dist": "25",
      "name": "青神县",
      "level": 3
    },
    {
      "code": "511500",
      "prov": "51",
      "city": "15",
      "dist": "00",
      "name": "宜宾市",
      "level": 2
    },
    {
      "code": "511501",
      "prov": "51",
      "city": "15",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511502",
      "prov": "51",
      "city": "15",
      "dist": "02",
      "name": "翠屏区",
      "level": 3
    },
    {
      "code": "511503",
      "prov": "51",
      "city": "15",
      "dist": "03",
      "name": "南溪区",
      "level": 3
    },
    {
      "code": "511521",
      "prov": "51",
      "city": "15",
      "dist": "21",
      "name": "宜宾县",
      "level": 3
    },
    {
      "code": "511523",
      "prov": "51",
      "city": "15",
      "dist": "23",
      "name": "江安县",
      "level": 3
    },
    {
      "code": "511524",
      "prov": "51",
      "city": "15",
      "dist": "24",
      "name": "长宁县",
      "level": 3
    },
    {
      "code": "511525",
      "prov": "51",
      "city": "15",
      "dist": "25",
      "name": "高县",
      "level": 3
    },
    {
      "code": "511526",
      "prov": "51",
      "city": "15",
      "dist": "26",
      "name": "珙县",
      "level": 3
    },
    {
      "code": "511527",
      "prov": "51",
      "city": "15",
      "dist": "27",
      "name": "筠连县",
      "level": 3
    },
    {
      "code": "511528",
      "prov": "51",
      "city": "15",
      "dist": "28",
      "name": "兴文县",
      "level": 3
    },
    {
      "code": "511529",
      "prov": "51",
      "city": "15",
      "dist": "29",
      "name": "屏山县",
      "level": 3
    },
    {
      "code": "511600",
      "prov": "51",
      "city": "16",
      "dist": "00",
      "name": "广安市",
      "level": 2
    },
    {
      "code": "511601",
      "prov": "51",
      "city": "16",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511602",
      "prov": "51",
      "city": "16",
      "dist": "02",
      "name": "广安区",
      "level": 3
    },
    {
      "code": "511603",
      "prov": "51",
      "city": "16",
      "dist": "03",
      "name": "前锋区",
      "level": 3
    },
    {
      "code": "511621",
      "prov": "51",
      "city": "16",
      "dist": "21",
      "name": "岳池县",
      "level": 3
    },
    {
      "code": "511622",
      "prov": "51",
      "city": "16",
      "dist": "22",
      "name": "武胜县",
      "level": 3
    },
    {
      "code": "511623",
      "prov": "51",
      "city": "16",
      "dist": "23",
      "name": "邻水县",
      "level": 3
    },
    {
      "code": "511681",
      "prov": "51",
      "city": "16",
      "dist": "81",
      "name": "华蓥市",
      "level": 3
    },
    {
      "code": "511700",
      "prov": "51",
      "city": "17",
      "dist": "00",
      "name": "达州市",
      "level": 2
    },
    {
      "code": "511701",
      "prov": "51",
      "city": "17",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511702",
      "prov": "51",
      "city": "17",
      "dist": "02",
      "name": "通川区",
      "level": 3
    },
    {
      "code": "511703",
      "prov": "51",
      "city": "17",
      "dist": "03",
      "name": "达川区",
      "level": 3
    },
    {
      "code": "511722",
      "prov": "51",
      "city": "17",
      "dist": "22",
      "name": "宣汉县",
      "level": 3
    },
    {
      "code": "511723",
      "prov": "51",
      "city": "17",
      "dist": "23",
      "name": "开江县",
      "level": 3
    },
    {
      "code": "511724",
      "prov": "51",
      "city": "17",
      "dist": "24",
      "name": "大竹县",
      "level": 3
    },
    {
      "code": "511725",
      "prov": "51",
      "city": "17",
      "dist": "25",
      "name": "渠县",
      "level": 3
    },
    {
      "code": "511781",
      "prov": "51",
      "city": "17",
      "dist": "81",
      "name": "万源市",
      "level": 3
    },
    {
      "code": "511800",
      "prov": "51",
      "city": "18",
      "dist": "00",
      "name": "雅安市",
      "level": 2
    },
    {
      "code": "511801",
      "prov": "51",
      "city": "18",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511802",
      "prov": "51",
      "city": "18",
      "dist": "02",
      "name": "雨城区",
      "level": 3
    },
    {
      "code": "511803",
      "prov": "51",
      "city": "18",
      "dist": "03",
      "name": "名山区",
      "level": 3
    },
    {
      "code": "511822",
      "prov": "51",
      "city": "18",
      "dist": "22",
      "name": "荥经县",
      "level": 3
    },
    {
      "code": "511823",
      "prov": "51",
      "city": "18",
      "dist": "23",
      "name": "汉源县",
      "level": 3
    },
    {
      "code": "511824",
      "prov": "51",
      "city": "18",
      "dist": "24",
      "name": "石棉县",
      "level": 3
    },
    {
      "code": "511825",
      "prov": "51",
      "city": "18",
      "dist": "25",
      "name": "天全县",
      "level": 3
    },
    {
      "code": "511826",
      "prov": "51",
      "city": "18",
      "dist": "26",
      "name": "芦山县",
      "level": 3
    },
    {
      "code": "511827",
      "prov": "51",
      "city": "18",
      "dist": "27",
      "name": "宝兴县",
      "level": 3
    },
    {
      "code": "511900",
      "prov": "51",
      "city": "19",
      "dist": "00",
      "name": "巴中市",
      "level": 2
    },
    {
      "code": "511901",
      "prov": "51",
      "city": "19",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "511902",
      "prov": "51",
      "city": "19",
      "dist": "02",
      "name": "巴州区",
      "level": 3
    },
    {
      "code": "511903",
      "prov": "51",
      "city": "19",
      "dist": "03",
      "name": "恩阳区",
      "level": 3
    },
    {
      "code": "511921",
      "prov": "51",
      "city": "19",
      "dist": "21",
      "name": "通江县",
      "level": 3
    },
    {
      "code": "511922",
      "prov": "51",
      "city": "19",
      "dist": "22",
      "name": "南江县",
      "level": 3
    },
    {
      "code": "511923",
      "prov": "51",
      "city": "19",
      "dist": "23",
      "name": "平昌县",
      "level": 3
    },
    {
      "code": "512000",
      "prov": "51",
      "city": "20",
      "dist": "00",
      "name": "资阳市",
      "level": 2
    },
    {
      "code": "512001",
      "prov": "51",
      "city": "20",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "512002",
      "prov": "51",
      "city": "20",
      "dist": "02",
      "name": "雁江区",
      "level": 3
    },
    {
      "code": "512021",
      "prov": "51",
      "city": "20",
      "dist": "21",
      "name": "安岳县",
      "level": 3
    },
    {
      "code": "512022",
      "prov": "51",
      "city": "20",
      "dist": "22",
      "name": "乐至县",
      "level": 3
    },
    {
      "code": "512081",
      "prov": "51",
      "city": "20",
      "dist": "81",
      "name": "简阳市",
      "level": 3
    },
    {
      "code": "513200",
      "prov": "51",
      "city": "32",
      "dist": "00",
      "name": "阿坝藏族羌族自治州",
      "level": 2
    },
    {
      "code": "513221",
      "prov": "51",
      "city": "32",
      "dist": "21",
      "name": "汶川县",
      "level": 3
    },
    {
      "code": "513222",
      "prov": "51",
      "city": "32",
      "dist": "22",
      "name": "理县",
      "level": 3
    },
    {
      "code": "513223",
      "prov": "51",
      "city": "32",
      "dist": "23",
      "name": "茂县",
      "level": 3
    },
    {
      "code": "513224",
      "prov": "51",
      "city": "32",
      "dist": "24",
      "name": "松潘县",
      "level": 3
    },
    {
      "code": "513225",
      "prov": "51",
      "city": "32",
      "dist": "25",
      "name": "九寨沟县",
      "level": 3
    },
    {
      "code": "513226",
      "prov": "51",
      "city": "32",
      "dist": "26",
      "name": "金川县",
      "level": 3
    },
    {
      "code": "513227",
      "prov": "51",
      "city": "32",
      "dist": "27",
      "name": "小金县",
      "level": 3
    },
    {
      "code": "513228",
      "prov": "51",
      "city": "32",
      "dist": "28",
      "name": "黑水县",
      "level": 3
    },
    {
      "code": "513229",
      "prov": "51",
      "city": "32",
      "dist": "29",
      "name": "马尔康县",
      "level": 3
    },
    {
      "code": "513230",
      "prov": "51",
      "city": "32",
      "dist": "30",
      "name": "壤塘县",
      "level": 3
    },
    {
      "code": "513231",
      "prov": "51",
      "city": "32",
      "dist": "31",
      "name": "阿坝县",
      "level": 3
    },
    {
      "code": "513232",
      "prov": "51",
      "city": "32",
      "dist": "32",
      "name": "若尔盖县",
      "level": 3
    },
    {
      "code": "513233",
      "prov": "51",
      "city": "32",
      "dist": "33",
      "name": "红原县",
      "level": 3
    },
    {
      "code": "513300",
      "prov": "51",
      "city": "33",
      "dist": "00",
      "name": "甘孜藏族自治州",
      "level": 2
    },
    {
      "code": "513321",
      "prov": "51",
      "city": "33",
      "dist": "21",
      "name": "康定县",
      "level": 3
    },
    {
      "code": "513322",
      "prov": "51",
      "city": "33",
      "dist": "22",
      "name": "泸定县",
      "level": 3
    },
    {
      "code": "513323",
      "prov": "51",
      "city": "33",
      "dist": "23",
      "name": "丹巴县",
      "level": 3
    },
    {
      "code": "513324",
      "prov": "51",
      "city": "33",
      "dist": "24",
      "name": "九龙县",
      "level": 3
    },
    {
      "code": "513325",
      "prov": "51",
      "city": "33",
      "dist": "25",
      "name": "雅江县",
      "level": 3
    },
    {
      "code": "513326",
      "prov": "51",
      "city": "33",
      "dist": "26",
      "name": "道孚县",
      "level": 3
    },
    {
      "code": "513327",
      "prov": "51",
      "city": "33",
      "dist": "27",
      "name": "炉霍县",
      "level": 3
    },
    {
      "code": "513328",
      "prov": "51",
      "city": "33",
      "dist": "28",
      "name": "甘孜县",
      "level": 3
    },
    {
      "code": "513329",
      "prov": "51",
      "city": "33",
      "dist": "29",
      "name": "新龙县",
      "level": 3
    },
    {
      "code": "513330",
      "prov": "51",
      "city": "33",
      "dist": "30",
      "name": "德格县",
      "level": 3
    },
    {
      "code": "513331",
      "prov": "51",
      "city": "33",
      "dist": "31",
      "name": "白玉县",
      "level": 3
    },
    {
      "code": "513332",
      "prov": "51",
      "city": "33",
      "dist": "32",
      "name": "石渠县",
      "level": 3
    },
    {
      "code": "513333",
      "prov": "51",
      "city": "33",
      "dist": "33",
      "name": "色达县",
      "level": 3
    },
    {
      "code": "513334",
      "prov": "51",
      "city": "33",
      "dist": "34",
      "name": "理塘县",
      "level": 3
    },
    {
      "code": "513335",
      "prov": "51",
      "city": "33",
      "dist": "35",
      "name": "巴塘县",
      "level": 3
    },
    {
      "code": "513336",
      "prov": "51",
      "city": "33",
      "dist": "36",
      "name": "乡城县",
      "level": 3
    },
    {
      "code": "513337",
      "prov": "51",
      "city": "33",
      "dist": "37",
      "name": "稻城县",
      "level": 3
    },
    {
      "code": "513338",
      "prov": "51",
      "city": "33",
      "dist": "38",
      "name": "得荣县",
      "level": 3
    },
    {
      "code": "513400",
      "prov": "51",
      "city": "34",
      "dist": "00",
      "name": "凉山彝族自治州",
      "level": 2
    },
    {
      "code": "513401",
      "prov": "51",
      "city": "34",
      "dist": "01",
      "name": "西昌市",
      "level": 3
    },
    {
      "code": "513422",
      "prov": "51",
      "city": "34",
      "dist": "22",
      "name": "木里藏族自治县",
      "level": 3
    },
    {
      "code": "513423",
      "prov": "51",
      "city": "34",
      "dist": "23",
      "name": "盐源县",
      "level": 3
    },
    {
      "code": "513424",
      "prov": "51",
      "city": "34",
      "dist": "24",
      "name": "德昌县",
      "level": 3
    },
    {
      "code": "513425",
      "prov": "51",
      "city": "34",
      "dist": "25",
      "name": "会理县",
      "level": 3
    },
    {
      "code": "513426",
      "prov": "51",
      "city": "34",
      "dist": "26",
      "name": "会东县",
      "level": 3
    },
    {
      "code": "513427",
      "prov": "51",
      "city": "34",
      "dist": "27",
      "name": "宁南县",
      "level": 3
    },
    {
      "code": "513428",
      "prov": "51",
      "city": "34",
      "dist": "28",
      "name": "普格县",
      "level": 3
    },
    {
      "code": "513429",
      "prov": "51",
      "city": "34",
      "dist": "29",
      "name": "布拖县",
      "level": 3
    },
    {
      "code": "513430",
      "prov": "51",
      "city": "34",
      "dist": "30",
      "name": "金阳县",
      "level": 3
    },
    {
      "code": "513431",
      "prov": "51",
      "city": "34",
      "dist": "31",
      "name": "昭觉县",
      "level": 3
    },
    {
      "code": "513432",
      "prov": "51",
      "city": "34",
      "dist": "32",
      "name": "喜德县",
      "level": 3
    },
    {
      "code": "513433",
      "prov": "51",
      "city": "34",
      "dist": "33",
      "name": "冕宁县",
      "level": 3
    },
    {
      "code": "513434",
      "prov": "51",
      "city": "34",
      "dist": "34",
      "name": "越西县",
      "level": 3
    },
    {
      "code": "513435",
      "prov": "51",
      "city": "34",
      "dist": "35",
      "name": "甘洛县",
      "level": 3
    },
    {
      "code": "513436",
      "prov": "51",
      "city": "34",
      "dist": "36",
      "name": "美姑县",
      "level": 3
    },
    {
      "code": "513437",
      "prov": "51",
      "city": "34",
      "dist": "37",
      "name": "雷波县",
      "level": 3
    },
    {
      "code": "520000",
      "prov": "52",
      "city": "00",
      "dist": "00",
      "name": "贵州省",
      "level": 1
    },
    {
      "code": "520100",
      "prov": "52",
      "city": "01",
      "dist": "00",
      "name": "贵阳市",
      "level": 2
    },
    {
      "code": "520101",
      "prov": "52",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "520102",
      "prov": "52",
      "city": "01",
      "dist": "02",
      "name": "南明区",
      "level": 3
    },
    {
      "code": "520103",
      "prov": "52",
      "city": "01",
      "dist": "03",
      "name": "云岩区",
      "level": 3
    },
    {
      "code": "520111",
      "prov": "52",
      "city": "01",
      "dist": "11",
      "name": "花溪区",
      "level": 3
    },
    {
      "code": "520112",
      "prov": "52",
      "city": "01",
      "dist": "12",
      "name": "乌当区",
      "level": 3
    },
    {
      "code": "520113",
      "prov": "52",
      "city": "01",
      "dist": "13",
      "name": "白云区",
      "level": 3
    },
    {
      "code": "520115",
      "prov": "52",
      "city": "01",
      "dist": "15",
      "name": "观山湖区",
      "level": 3
    },
    {
      "code": "520121",
      "prov": "52",
      "city": "01",
      "dist": "21",
      "name": "开阳县",
      "level": 3
    },
    {
      "code": "520122",
      "prov": "52",
      "city": "01",
      "dist": "22",
      "name": "息烽县",
      "level": 3
    },
    {
      "code": "520123",
      "prov": "52",
      "city": "01",
      "dist": "23",
      "name": "修文县",
      "level": 3
    },
    {
      "code": "520181",
      "prov": "52",
      "city": "01",
      "dist": "81",
      "name": "清镇市",
      "level": 3
    },
    {
      "code": "520200",
      "prov": "52",
      "city": "02",
      "dist": "00",
      "name": "六盘水市",
      "level": 2
    },
    {
      "code": "520201",
      "prov": "52",
      "city": "02",
      "dist": "01",
      "name": "钟山区",
      "level": 3
    },
    {
      "code": "520203",
      "prov": "52",
      "city": "02",
      "dist": "03",
      "name": "六枝特区",
      "level": 3
    },
    {
      "code": "520221",
      "prov": "52",
      "city": "02",
      "dist": "21",
      "name": "水城县",
      "level": 3
    },
    {
      "code": "520222",
      "prov": "52",
      "city": "02",
      "dist": "22",
      "name": "盘县",
      "level": 3
    },
    {
      "code": "520300",
      "prov": "52",
      "city": "03",
      "dist": "00",
      "name": "遵义市",
      "level": 2
    },
    {
      "code": "520301",
      "prov": "52",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "520302",
      "prov": "52",
      "city": "03",
      "dist": "02",
      "name": "红花岗区",
      "level": 3
    },
    {
      "code": "520303",
      "prov": "52",
      "city": "03",
      "dist": "03",
      "name": "汇川区",
      "level": 3
    },
    {
      "code": "520321",
      "prov": "52",
      "city": "03",
      "dist": "21",
      "name": "遵义县",
      "level": 3
    },
    {
      "code": "520322",
      "prov": "52",
      "city": "03",
      "dist": "22",
      "name": "桐梓县",
      "level": 3
    },
    {
      "code": "520323",
      "prov": "52",
      "city": "03",
      "dist": "23",
      "name": "绥阳县",
      "level": 3
    },
    {
      "code": "520324",
      "prov": "52",
      "city": "03",
      "dist": "24",
      "name": "正安县",
      "level": 3
    },
    {
      "code": "520325",
      "prov": "52",
      "city": "03",
      "dist": "25",
      "name": "道真仡佬族苗族自治县",
      "level": 3
    },
    {
      "code": "520326",
      "prov": "52",
      "city": "03",
      "dist": "26",
      "name": "务川仡佬族苗族自治县",
      "level": 3
    },
    {
      "code": "520327",
      "prov": "52",
      "city": "03",
      "dist": "27",
      "name": "凤冈县",
      "level": 3
    },
    {
      "code": "520328",
      "prov": "52",
      "city": "03",
      "dist": "28",
      "name": "湄潭县",
      "level": 3
    },
    {
      "code": "520329",
      "prov": "52",
      "city": "03",
      "dist": "29",
      "name": "余庆县",
      "level": 3
    },
    {
      "code": "520330",
      "prov": "52",
      "city": "03",
      "dist": "30",
      "name": "习水县",
      "level": 3
    },
    {
      "code": "520381",
      "prov": "52",
      "city": "03",
      "dist": "81",
      "name": "赤水市",
      "level": 3
    },
    {
      "code": "520382",
      "prov": "52",
      "city": "03",
      "dist": "82",
      "name": "仁怀市",
      "level": 3
    },
    {
      "code": "520400",
      "prov": "52",
      "city": "04",
      "dist": "00",
      "name": "安顺市",
      "level": 2
    },
    {
      "code": "520401",
      "prov": "52",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "520402",
      "prov": "52",
      "city": "04",
      "dist": "02",
      "name": "西秀区",
      "level": 3
    },
    {
      "code": "520421",
      "prov": "52",
      "city": "04",
      "dist": "21",
      "name": "平坝县",
      "level": 3
    },
    {
      "code": "520422",
      "prov": "52",
      "city": "04",
      "dist": "22",
      "name": "普定县",
      "level": 3
    },
    {
      "code": "520423",
      "prov": "52",
      "city": "04",
      "dist": "23",
      "name": "镇宁布依族苗族自治县",
      "level": 3
    },
    {
      "code": "520424",
      "prov": "52",
      "city": "04",
      "dist": "24",
      "name": "关岭布依族苗族自治县",
      "level": 3
    },
    {
      "code": "520425",
      "prov": "52",
      "city": "04",
      "dist": "25",
      "name": "紫云苗族布依族自治县",
      "level": 3
    },
    {
      "code": "520500",
      "prov": "52",
      "city": "05",
      "dist": "00",
      "name": "毕节市",
      "level": 2
    },
    {
      "code": "520501",
      "prov": "52",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "520502",
      "prov": "52",
      "city": "05",
      "dist": "02",
      "name": "七星关区",
      "level": 3
    },
    {
      "code": "520521",
      "prov": "52",
      "city": "05",
      "dist": "21",
      "name": "大方县",
      "level": 3
    },
    {
      "code": "520522",
      "prov": "52",
      "city": "05",
      "dist": "22",
      "name": "黔西县",
      "level": 3
    },
    {
      "code": "520523",
      "prov": "52",
      "city": "05",
      "dist": "23",
      "name": "金沙县",
      "level": 3
    },
    {
      "code": "520524",
      "prov": "52",
      "city": "05",
      "dist": "24",
      "name": "织金县",
      "level": 3
    },
    {
      "code": "520525",
      "prov": "52",
      "city": "05",
      "dist": "25",
      "name": "纳雍县",
      "level": 3
    },
    {
      "code": "520526",
      "prov": "52",
      "city": "05",
      "dist": "26",
      "name": "威宁彝族回族苗族自治县",
      "level": 3
    },
    {
      "code": "520527",
      "prov": "52",
      "city": "05",
      "dist": "27",
      "name": "赫章县",
      "level": 3
    },
    {
      "code": "520600",
      "prov": "52",
      "city": "06",
      "dist": "00",
      "name": "铜仁市",
      "level": 2
    },
    {
      "code": "520601",
      "prov": "52",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "520602",
      "prov": "52",
      "city": "06",
      "dist": "02",
      "name": "碧江区",
      "level": 3
    },
    {
      "code": "520603",
      "prov": "52",
      "city": "06",
      "dist": "03",
      "name": "万山区",
      "level": 3
    },
    {
      "code": "520621",
      "prov": "52",
      "city": "06",
      "dist": "21",
      "name": "江口县",
      "level": 3
    },
    {
      "code": "520622",
      "prov": "52",
      "city": "06",
      "dist": "22",
      "name": "玉屏侗族自治县",
      "level": 3
    },
    {
      "code": "520623",
      "prov": "52",
      "city": "06",
      "dist": "23",
      "name": "石阡县",
      "level": 3
    },
    {
      "code": "520624",
      "prov": "52",
      "city": "06",
      "dist": "24",
      "name": "思南县",
      "level": 3
    },
    {
      "code": "520625",
      "prov": "52",
      "city": "06",
      "dist": "25",
      "name": "印江土家族苗族自治县",
      "level": 3
    },
    {
      "code": "520626",
      "prov": "52",
      "city": "06",
      "dist": "26",
      "name": "德江县",
      "level": 3
    },
    {
      "code": "520627",
      "prov": "52",
      "city": "06",
      "dist": "27",
      "name": "沿河土家族自治县",
      "level": 3
    },
    {
      "code": "520628",
      "prov": "52",
      "city": "06",
      "dist": "28",
      "name": "松桃苗族自治县",
      "level": 3
    },
    {
      "code": "522300",
      "prov": "52",
      "city": "23",
      "dist": "00",
      "name": "黔西南布依族苗族自治州",
      "level": 2
    },
    {
      "code": "522301",
      "prov": "52",
      "city": "23",
      "dist": "01",
      "name": "兴义市",
      "level": 3
    },
    {
      "code": "522322",
      "prov": "52",
      "city": "23",
      "dist": "22",
      "name": "兴仁县",
      "level": 3
    },
    {
      "code": "522323",
      "prov": "52",
      "city": "23",
      "dist": "23",
      "name": "普安县",
      "level": 3
    },
    {
      "code": "522324",
      "prov": "52",
      "city": "23",
      "dist": "24",
      "name": "晴隆县",
      "level": 3
    },
    {
      "code": "522325",
      "prov": "52",
      "city": "23",
      "dist": "25",
      "name": "贞丰县",
      "level": 3
    },
    {
      "code": "522326",
      "prov": "52",
      "city": "23",
      "dist": "26",
      "name": "望谟县",
      "level": 3
    },
    {
      "code": "522327",
      "prov": "52",
      "city": "23",
      "dist": "27",
      "name": "册亨县",
      "level": 3
    },
    {
      "code": "522328",
      "prov": "52",
      "city": "23",
      "dist": "28",
      "name": "安龙县",
      "level": 3
    },
    {
      "code": "522600",
      "prov": "52",
      "city": "26",
      "dist": "00",
      "name": "黔东南苗族侗族自治州",
      "level": 2
    },
    {
      "code": "522601",
      "prov": "52",
      "city": "26",
      "dist": "01",
      "name": "凯里市",
      "level": 3
    },
    {
      "code": "522622",
      "prov": "52",
      "city": "26",
      "dist": "22",
      "name": "黄平县",
      "level": 3
    },
    {
      "code": "522623",
      "prov": "52",
      "city": "26",
      "dist": "23",
      "name": "施秉县",
      "level": 3
    },
    {
      "code": "522624",
      "prov": "52",
      "city": "26",
      "dist": "24",
      "name": "三穗县",
      "level": 3
    },
    {
      "code": "522625",
      "prov": "52",
      "city": "26",
      "dist": "25",
      "name": "镇远县",
      "level": 3
    },
    {
      "code": "522626",
      "prov": "52",
      "city": "26",
      "dist": "26",
      "name": "岑巩县",
      "level": 3
    },
    {
      "code": "522627",
      "prov": "52",
      "city": "26",
      "dist": "27",
      "name": "天柱县",
      "level": 3
    },
    {
      "code": "522628",
      "prov": "52",
      "city": "26",
      "dist": "28",
      "name": "锦屏县",
      "level": 3
    },
    {
      "code": "522629",
      "prov": "52",
      "city": "26",
      "dist": "29",
      "name": "剑河县",
      "level": 3
    },
    {
      "code": "522630",
      "prov": "52",
      "city": "26",
      "dist": "30",
      "name": "台江县",
      "level": 3
    },
    {
      "code": "522631",
      "prov": "52",
      "city": "26",
      "dist": "31",
      "name": "黎平县",
      "level": 3
    },
    {
      "code": "522632",
      "prov": "52",
      "city": "26",
      "dist": "32",
      "name": "榕江县",
      "level": 3
    },
    {
      "code": "522633",
      "prov": "52",
      "city": "26",
      "dist": "33",
      "name": "从江县",
      "level": 3
    },
    {
      "code": "522634",
      "prov": "52",
      "city": "26",
      "dist": "34",
      "name": "雷山县",
      "level": 3
    },
    {
      "code": "522635",
      "prov": "52",
      "city": "26",
      "dist": "35",
      "name": "麻江县",
      "level": 3
    },
    {
      "code": "522636",
      "prov": "52",
      "city": "26",
      "dist": "36",
      "name": "丹寨县",
      "level": 3
    },
    {
      "code": "522700",
      "prov": "52",
      "city": "27",
      "dist": "00",
      "name": "黔南布依族苗族自治州",
      "level": 2
    },
    {
      "code": "522701",
      "prov": "52",
      "city": "27",
      "dist": "01",
      "name": "都匀市",
      "level": 3
    },
    {
      "code": "522702",
      "prov": "52",
      "city": "27",
      "dist": "02",
      "name": "福泉市",
      "level": 3
    },
    {
      "code": "522722",
      "prov": "52",
      "city": "27",
      "dist": "22",
      "name": "荔波县",
      "level": 3
    },
    {
      "code": "522723",
      "prov": "52",
      "city": "27",
      "dist": "23",
      "name": "贵定县",
      "level": 3
    },
    {
      "code": "522725",
      "prov": "52",
      "city": "27",
      "dist": "25",
      "name": "瓮安县",
      "level": 3
    },
    {
      "code": "522726",
      "prov": "52",
      "city": "27",
      "dist": "26",
      "name": "独山县",
      "level": 3
    },
    {
      "code": "522727",
      "prov": "52",
      "city": "27",
      "dist": "27",
      "name": "平塘县",
      "level": 3
    },
    {
      "code": "522728",
      "prov": "52",
      "city": "27",
      "dist": "28",
      "name": "罗甸县",
      "level": 3
    },
    {
      "code": "522729",
      "prov": "52",
      "city": "27",
      "dist": "29",
      "name": "长顺县",
      "level": 3
    },
    {
      "code": "522730",
      "prov": "52",
      "city": "27",
      "dist": "30",
      "name": "龙里县",
      "level": 3
    },
    {
      "code": "522731",
      "prov": "52",
      "city": "27",
      "dist": "31",
      "name": "惠水县",
      "level": 3
    },
    {
      "code": "522732",
      "prov": "52",
      "city": "27",
      "dist": "32",
      "name": "三都水族自治县",
      "level": 3
    },
    {
      "code": "530000",
      "prov": "53",
      "city": "00",
      "dist": "00",
      "name": "云南省",
      "level": 1
    },
    {
      "code": "530100",
      "prov": "53",
      "city": "01",
      "dist": "00",
      "name": "昆明市",
      "level": 2
    },
    {
      "code": "530101",
      "prov": "53",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530102",
      "prov": "53",
      "city": "01",
      "dist": "02",
      "name": "五华区",
      "level": 3
    },
    {
      "code": "530103",
      "prov": "53",
      "city": "01",
      "dist": "03",
      "name": "盘龙区",
      "level": 3
    },
    {
      "code": "530111",
      "prov": "53",
      "city": "01",
      "dist": "11",
      "name": "官渡区",
      "level": 3
    },
    {
      "code": "530112",
      "prov": "53",
      "city": "01",
      "dist": "12",
      "name": "西山区",
      "level": 3
    },
    {
      "code": "530113",
      "prov": "53",
      "city": "01",
      "dist": "13",
      "name": "东川区",
      "level": 3
    },
    {
      "code": "530114",
      "prov": "53",
      "city": "01",
      "dist": "14",
      "name": "呈贡区",
      "level": 3
    },
    {
      "code": "530122",
      "prov": "53",
      "city": "01",
      "dist": "22",
      "name": "晋宁县",
      "level": 3
    },
    {
      "code": "530124",
      "prov": "53",
      "city": "01",
      "dist": "24",
      "name": "富民县",
      "level": 3
    },
    {
      "code": "530125",
      "prov": "53",
      "city": "01",
      "dist": "25",
      "name": "宜良县",
      "level": 3
    },
    {
      "code": "530126",
      "prov": "53",
      "city": "01",
      "dist": "26",
      "name": "石林彝族自治县",
      "level": 3
    },
    {
      "code": "530127",
      "prov": "53",
      "city": "01",
      "dist": "27",
      "name": "嵩明县",
      "level": 3
    },
    {
      "code": "530128",
      "prov": "53",
      "city": "01",
      "dist": "28",
      "name": "禄劝彝族苗族自治县",
      "level": 3
    },
    {
      "code": "530129",
      "prov": "53",
      "city": "01",
      "dist": "29",
      "name": "寻甸回族彝族自治县",
      "level": 3
    },
    {
      "code": "530181",
      "prov": "53",
      "city": "01",
      "dist": "81",
      "name": "安宁市",
      "level": 3
    },
    {
      "code": "530300",
      "prov": "53",
      "city": "03",
      "dist": "00",
      "name": "曲靖市",
      "level": 2
    },
    {
      "code": "530301",
      "prov": "53",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530302",
      "prov": "53",
      "city": "03",
      "dist": "02",
      "name": "麒麟区",
      "level": 3
    },
    {
      "code": "530321",
      "prov": "53",
      "city": "03",
      "dist": "21",
      "name": "马龙县",
      "level": 3
    },
    {
      "code": "530322",
      "prov": "53",
      "city": "03",
      "dist": "22",
      "name": "陆良县",
      "level": 3
    },
    {
      "code": "530323",
      "prov": "53",
      "city": "03",
      "dist": "23",
      "name": "师宗县",
      "level": 3
    },
    {
      "code": "530324",
      "prov": "53",
      "city": "03",
      "dist": "24",
      "name": "罗平县",
      "level": 3
    },
    {
      "code": "530325",
      "prov": "53",
      "city": "03",
      "dist": "25",
      "name": "富源县",
      "level": 3
    },
    {
      "code": "530326",
      "prov": "53",
      "city": "03",
      "dist": "26",
      "name": "会泽县",
      "level": 3
    },
    {
      "code": "530328",
      "prov": "53",
      "city": "03",
      "dist": "28",
      "name": "沾益县",
      "level": 3
    },
    {
      "code": "530381",
      "prov": "53",
      "city": "03",
      "dist": "81",
      "name": "宣威市",
      "level": 3
    },
    {
      "code": "530400",
      "prov": "53",
      "city": "04",
      "dist": "00",
      "name": "玉溪市",
      "level": 2
    },
    {
      "code": "530401",
      "prov": "53",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530402",
      "prov": "53",
      "city": "04",
      "dist": "02",
      "name": "红塔区",
      "level": 3
    },
    {
      "code": "530421",
      "prov": "53",
      "city": "04",
      "dist": "21",
      "name": "江川县",
      "level": 3
    },
    {
      "code": "530422",
      "prov": "53",
      "city": "04",
      "dist": "22",
      "name": "澄江县",
      "level": 3
    },
    {
      "code": "530423",
      "prov": "53",
      "city": "04",
      "dist": "23",
      "name": "通海县",
      "level": 3
    },
    {
      "code": "530424",
      "prov": "53",
      "city": "04",
      "dist": "24",
      "name": "华宁县",
      "level": 3
    },
    {
      "code": "530425",
      "prov": "53",
      "city": "04",
      "dist": "25",
      "name": "易门县",
      "level": 3
    },
    {
      "code": "530426",
      "prov": "53",
      "city": "04",
      "dist": "26",
      "name": "峨山彝族自治县",
      "level": 3
    },
    {
      "code": "530427",
      "prov": "53",
      "city": "04",
      "dist": "27",
      "name": "新平彝族傣族自治县",
      "level": 3
    },
    {
      "code": "530428",
      "prov": "53",
      "city": "04",
      "dist": "28",
      "name": "元江哈尼族彝族傣族自治县",
      "level": 3
    },
    {
      "code": "530500",
      "prov": "53",
      "city": "05",
      "dist": "00",
      "name": "保山市",
      "level": 2
    },
    {
      "code": "530501",
      "prov": "53",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530502",
      "prov": "53",
      "city": "05",
      "dist": "02",
      "name": "隆阳区",
      "level": 3
    },
    {
      "code": "530521",
      "prov": "53",
      "city": "05",
      "dist": "21",
      "name": "施甸县",
      "level": 3
    },
    {
      "code": "530522",
      "prov": "53",
      "city": "05",
      "dist": "22",
      "name": "腾冲县",
      "level": 3
    },
    {
      "code": "530523",
      "prov": "53",
      "city": "05",
      "dist": "23",
      "name": "龙陵县",
      "level": 3
    },
    {
      "code": "530524",
      "prov": "53",
      "city": "05",
      "dist": "24",
      "name": "昌宁县",
      "level": 3
    },
    {
      "code": "530600",
      "prov": "53",
      "city": "06",
      "dist": "00",
      "name": "昭通市",
      "level": 2
    },
    {
      "code": "530601",
      "prov": "53",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530602",
      "prov": "53",
      "city": "06",
      "dist": "02",
      "name": "昭阳区",
      "level": 3
    },
    {
      "code": "530621",
      "prov": "53",
      "city": "06",
      "dist": "21",
      "name": "鲁甸县",
      "level": 3
    },
    {
      "code": "530622",
      "prov": "53",
      "city": "06",
      "dist": "22",
      "name": "巧家县",
      "level": 3
    },
    {
      "code": "530623",
      "prov": "53",
      "city": "06",
      "dist": "23",
      "name": "盐津县",
      "level": 3
    },
    {
      "code": "530624",
      "prov": "53",
      "city": "06",
      "dist": "24",
      "name": "大关县",
      "level": 3
    },
    {
      "code": "530625",
      "prov": "53",
      "city": "06",
      "dist": "25",
      "name": "永善县",
      "level": 3
    },
    {
      "code": "530626",
      "prov": "53",
      "city": "06",
      "dist": "26",
      "name": "绥江县",
      "level": 3
    },
    {
      "code": "530627",
      "prov": "53",
      "city": "06",
      "dist": "27",
      "name": "镇雄县",
      "level": 3
    },
    {
      "code": "530628",
      "prov": "53",
      "city": "06",
      "dist": "28",
      "name": "彝良县",
      "level": 3
    },
    {
      "code": "530629",
      "prov": "53",
      "city": "06",
      "dist": "29",
      "name": "威信县",
      "level": 3
    },
    {
      "code": "530630",
      "prov": "53",
      "city": "06",
      "dist": "30",
      "name": "水富县",
      "level": 3
    },
    {
      "code": "530700",
      "prov": "53",
      "city": "07",
      "dist": "00",
      "name": "丽江市",
      "level": 2
    },
    {
      "code": "530701",
      "prov": "53",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530702",
      "prov": "53",
      "city": "07",
      "dist": "02",
      "name": "古城区",
      "level": 3
    },
    {
      "code": "530721",
      "prov": "53",
      "city": "07",
      "dist": "21",
      "name": "玉龙纳西族自治县",
      "level": 3
    },
    {
      "code": "530722",
      "prov": "53",
      "city": "07",
      "dist": "22",
      "name": "永胜县",
      "level": 3
    },
    {
      "code": "530723",
      "prov": "53",
      "city": "07",
      "dist": "23",
      "name": "华坪县",
      "level": 3
    },
    {
      "code": "530724",
      "prov": "53",
      "city": "07",
      "dist": "24",
      "name": "宁蒗彝族自治县",
      "level": 3
    },
    {
      "code": "530800",
      "prov": "53",
      "city": "08",
      "dist": "00",
      "name": "普洱市",
      "level": 2
    },
    {
      "code": "530801",
      "prov": "53",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530802",
      "prov": "53",
      "city": "08",
      "dist": "02",
      "name": "思茅区",
      "level": 3
    },
    {
      "code": "530821",
      "prov": "53",
      "city": "08",
      "dist": "21",
      "name": "宁洱哈尼族彝族自治县",
      "level": 3
    },
    {
      "code": "530822",
      "prov": "53",
      "city": "08",
      "dist": "22",
      "name": "墨江哈尼族自治县",
      "level": 3
    },
    {
      "code": "530823",
      "prov": "53",
      "city": "08",
      "dist": "23",
      "name": "景东彝族自治县",
      "level": 3
    },
    {
      "code": "530824",
      "prov": "53",
      "city": "08",
      "dist": "24",
      "name": "景谷傣族彝族自治县",
      "level": 3
    },
    {
      "code": "530825",
      "prov": "53",
      "city": "08",
      "dist": "25",
      "name": "镇沅彝族哈尼族拉祜族自治县",
      "level": 3
    },
    {
      "code": "530826",
      "prov": "53",
      "city": "08",
      "dist": "26",
      "name": "江城哈尼族彝族自治县",
      "level": 3
    },
    {
      "code": "530827",
      "prov": "53",
      "city": "08",
      "dist": "27",
      "name": "孟连傣族拉祜族佤族自治县",
      "level": 3
    },
    {
      "code": "530828",
      "prov": "53",
      "city": "08",
      "dist": "28",
      "name": "澜沧拉祜族自治县",
      "level": 3
    },
    {
      "code": "530829",
      "prov": "53",
      "city": "08",
      "dist": "29",
      "name": "西盟佤族自治县",
      "level": 3
    },
    {
      "code": "530900",
      "prov": "53",
      "city": "09",
      "dist": "00",
      "name": "临沧市",
      "level": 2
    },
    {
      "code": "530901",
      "prov": "53",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "530902",
      "prov": "53",
      "city": "09",
      "dist": "02",
      "name": "临翔区",
      "level": 3
    },
    {
      "code": "530921",
      "prov": "53",
      "city": "09",
      "dist": "21",
      "name": "凤庆县",
      "level": 3
    },
    {
      "code": "530922",
      "prov": "53",
      "city": "09",
      "dist": "22",
      "name": "云县",
      "level": 3
    },
    {
      "code": "530923",
      "prov": "53",
      "city": "09",
      "dist": "23",
      "name": "永德县",
      "level": 3
    },
    {
      "code": "530924",
      "prov": "53",
      "city": "09",
      "dist": "24",
      "name": "镇康县",
      "level": 3
    },
    {
      "code": "530925",
      "prov": "53",
      "city": "09",
      "dist": "25",
      "name": "双江拉祜族佤族布朗族傣族自治县",
      "level": 3
    },
    {
      "code": "530926",
      "prov": "53",
      "city": "09",
      "dist": "26",
      "name": "耿马傣族佤族自治县",
      "level": 3
    },
    {
      "code": "530927",
      "prov": "53",
      "city": "09",
      "dist": "27",
      "name": "沧源佤族自治县",
      "level": 3
    },
    {
      "code": "532300",
      "prov": "53",
      "city": "23",
      "dist": "00",
      "name": "楚雄彝族自治州",
      "level": 2
    },
    {
      "code": "532301",
      "prov": "53",
      "city": "23",
      "dist": "01",
      "name": "楚雄市",
      "level": 3
    },
    {
      "code": "532322",
      "prov": "53",
      "city": "23",
      "dist": "22",
      "name": "双柏县",
      "level": 3
    },
    {
      "code": "532323",
      "prov": "53",
      "city": "23",
      "dist": "23",
      "name": "牟定县",
      "level": 3
    },
    {
      "code": "532324",
      "prov": "53",
      "city": "23",
      "dist": "24",
      "name": "南华县",
      "level": 3
    },
    {
      "code": "532325",
      "prov": "53",
      "city": "23",
      "dist": "25",
      "name": "姚安县",
      "level": 3
    },
    {
      "code": "532326",
      "prov": "53",
      "city": "23",
      "dist": "26",
      "name": "大姚县",
      "level": 3
    },
    {
      "code": "532327",
      "prov": "53",
      "city": "23",
      "dist": "27",
      "name": "永仁县",
      "level": 3
    },
    {
      "code": "532328",
      "prov": "53",
      "city": "23",
      "dist": "28",
      "name": "元谋县",
      "level": 3
    },
    {
      "code": "532329",
      "prov": "53",
      "city": "23",
      "dist": "29",
      "name": "武定县",
      "level": 3
    },
    {
      "code": "532331",
      "prov": "53",
      "city": "23",
      "dist": "31",
      "name": "禄丰县",
      "level": 3
    },
    {
      "code": "532500",
      "prov": "53",
      "city": "25",
      "dist": "00",
      "name": "红河哈尼族彝族自治州",
      "level": 2
    },
    {
      "code": "532501",
      "prov": "53",
      "city": "25",
      "dist": "01",
      "name": "个旧市",
      "level": 3
    },
    {
      "code": "532502",
      "prov": "53",
      "city": "25",
      "dist": "02",
      "name": "开远市",
      "level": 3
    },
    {
      "code": "532503",
      "prov": "53",
      "city": "25",
      "dist": "03",
      "name": "蒙自市",
      "level": 3
    },
    {
      "code": "532504",
      "prov": "53",
      "city": "25",
      "dist": "04",
      "name": "弥勒市",
      "level": 3
    },
    {
      "code": "532523",
      "prov": "53",
      "city": "25",
      "dist": "23",
      "name": "屏边苗族自治县",
      "level": 3
    },
    {
      "code": "532524",
      "prov": "53",
      "city": "25",
      "dist": "24",
      "name": "建水县",
      "level": 3
    },
    {
      "code": "532525",
      "prov": "53",
      "city": "25",
      "dist": "25",
      "name": "石屏县",
      "level": 3
    },
    {
      "code": "532527",
      "prov": "53",
      "city": "25",
      "dist": "27",
      "name": "泸西县",
      "level": 3
    },
    {
      "code": "532528",
      "prov": "53",
      "city": "25",
      "dist": "28",
      "name": "元阳县",
      "level": 3
    },
    {
      "code": "532529",
      "prov": "53",
      "city": "25",
      "dist": "29",
      "name": "红河县",
      "level": 3
    },
    {
      "code": "532530",
      "prov": "53",
      "city": "25",
      "dist": "30",
      "name": "金平苗族瑶族傣族自治县",
      "level": 3
    },
    {
      "code": "532531",
      "prov": "53",
      "city": "25",
      "dist": "31",
      "name": "绿春县",
      "level": 3
    },
    {
      "code": "532532",
      "prov": "53",
      "city": "25",
      "dist": "32",
      "name": "河口瑶族自治县",
      "level": 3
    },
    {
      "code": "532600",
      "prov": "53",
      "city": "26",
      "dist": "00",
      "name": "文山壮族苗族自治州",
      "level": 2
    },
    {
      "code": "532601",
      "prov": "53",
      "city": "26",
      "dist": "01",
      "name": "文山市",
      "level": 3
    },
    {
      "code": "532622",
      "prov": "53",
      "city": "26",
      "dist": "22",
      "name": "砚山县",
      "level": 3
    },
    {
      "code": "532623",
      "prov": "53",
      "city": "26",
      "dist": "23",
      "name": "西畴县",
      "level": 3
    },
    {
      "code": "532624",
      "prov": "53",
      "city": "26",
      "dist": "24",
      "name": "麻栗坡县",
      "level": 3
    },
    {
      "code": "532625",
      "prov": "53",
      "city": "26",
      "dist": "25",
      "name": "马关县",
      "level": 3
    },
    {
      "code": "532626",
      "prov": "53",
      "city": "26",
      "dist": "26",
      "name": "丘北县",
      "level": 3
    },
    {
      "code": "532627",
      "prov": "53",
      "city": "26",
      "dist": "27",
      "name": "广南县",
      "level": 3
    },
    {
      "code": "532628",
      "prov": "53",
      "city": "26",
      "dist": "28",
      "name": "富宁县",
      "level": 3
    },
    {
      "code": "532800",
      "prov": "53",
      "city": "28",
      "dist": "00",
      "name": "西双版纳傣族自治州",
      "level": 2
    },
    {
      "code": "532801",
      "prov": "53",
      "city": "28",
      "dist": "01",
      "name": "景洪市",
      "level": 3
    },
    {
      "code": "532822",
      "prov": "53",
      "city": "28",
      "dist": "22",
      "name": "勐海县",
      "level": 3
    },
    {
      "code": "532823",
      "prov": "53",
      "city": "28",
      "dist": "23",
      "name": "勐腊县",
      "level": 3
    },
    {
      "code": "532900",
      "prov": "53",
      "city": "29",
      "dist": "00",
      "name": "大理白族自治州",
      "level": 2
    },
    {
      "code": "532901",
      "prov": "53",
      "city": "29",
      "dist": "01",
      "name": "大理市",
      "level": 3
    },
    {
      "code": "532922",
      "prov": "53",
      "city": "29",
      "dist": "22",
      "name": "漾濞彝族自治县",
      "level": 3
    },
    {
      "code": "532923",
      "prov": "53",
      "city": "29",
      "dist": "23",
      "name": "祥云县",
      "level": 3
    },
    {
      "code": "532924",
      "prov": "53",
      "city": "29",
      "dist": "24",
      "name": "宾川县",
      "level": 3
    },
    {
      "code": "532925",
      "prov": "53",
      "city": "29",
      "dist": "25",
      "name": "弥渡县",
      "level": 3
    },
    {
      "code": "532926",
      "prov": "53",
      "city": "29",
      "dist": "26",
      "name": "南涧彝族自治县",
      "level": 3
    },
    {
      "code": "532927",
      "prov": "53",
      "city": "29",
      "dist": "27",
      "name": "巍山彝族回族自治县",
      "level": 3
    },
    {
      "code": "532928",
      "prov": "53",
      "city": "29",
      "dist": "28",
      "name": "永平县",
      "level": 3
    },
    {
      "code": "532929",
      "prov": "53",
      "city": "29",
      "dist": "29",
      "name": "云龙县",
      "level": 3
    },
    {
      "code": "532930",
      "prov": "53",
      "city": "29",
      "dist": "30",
      "name": "洱源县",
      "level": 3
    },
    {
      "code": "532931",
      "prov": "53",
      "city": "29",
      "dist": "31",
      "name": "剑川县",
      "level": 3
    },
    {
      "code": "532932",
      "prov": "53",
      "city": "29",
      "dist": "32",
      "name": "鹤庆县",
      "level": 3
    },
    {
      "code": "533100",
      "prov": "53",
      "city": "31",
      "dist": "00",
      "name": "德宏傣族景颇族自治州",
      "level": 2
    },
    {
      "code": "533102",
      "prov": "53",
      "city": "31",
      "dist": "02",
      "name": "瑞丽市",
      "level": 3
    },
    {
      "code": "533103",
      "prov": "53",
      "city": "31",
      "dist": "03",
      "name": "芒市",
      "level": 3
    },
    {
      "code": "533122",
      "prov": "53",
      "city": "31",
      "dist": "22",
      "name": "梁河县",
      "level": 3
    },
    {
      "code": "533123",
      "prov": "53",
      "city": "31",
      "dist": "23",
      "name": "盈江县",
      "level": 3
    },
    {
      "code": "533124",
      "prov": "53",
      "city": "31",
      "dist": "24",
      "name": "陇川县",
      "level": 3
    },
    {
      "code": "533300",
      "prov": "53",
      "city": "33",
      "dist": "00",
      "name": "怒江傈僳族自治州",
      "level": 2
    },
    {
      "code": "533321",
      "prov": "53",
      "city": "33",
      "dist": "21",
      "name": "泸水县",
      "level": 3
    },
    {
      "code": "533323",
      "prov": "53",
      "city": "33",
      "dist": "23",
      "name": "福贡县",
      "level": 3
    },
    {
      "code": "533324",
      "prov": "53",
      "city": "33",
      "dist": "24",
      "name": "贡山独龙族怒族自治县",
      "level": 3
    },
    {
      "code": "533325",
      "prov": "53",
      "city": "33",
      "dist": "25",
      "name": "兰坪白族普米族自治县",
      "level": 3
    },
    {
      "code": "533400",
      "prov": "53",
      "city": "34",
      "dist": "00",
      "name": "迪庆藏族自治州",
      "level": 2
    },
    {
      "code": "533421",
      "prov": "53",
      "city": "34",
      "dist": "21",
      "name": "香格里拉县",
      "level": 3
    },
    {
      "code": "533422",
      "prov": "53",
      "city": "34",
      "dist": "22",
      "name": "德钦县",
      "level": 3
    },
    {
      "code": "533423",
      "prov": "53",
      "city": "34",
      "dist": "23",
      "name": "维西傈僳族自治县",
      "level": 3
    },
    {
      "code": "540000",
      "prov": "54",
      "city": "00",
      "dist": "00",
      "name": "西藏自治区",
      "level": 1
    },
    {
      "code": "540100",
      "prov": "54",
      "city": "01",
      "dist": "00",
      "name": "拉萨市",
      "level": 2
    },
    {
      "code": "540101",
      "prov": "54",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "540102",
      "prov": "54",
      "city": "01",
      "dist": "02",
      "name": "城关区",
      "level": 3
    },
    {
      "code": "540121",
      "prov": "54",
      "city": "01",
      "dist": "21",
      "name": "林周县",
      "level": 3
    },
    {
      "code": "540122",
      "prov": "54",
      "city": "01",
      "dist": "22",
      "name": "当雄县",
      "level": 3
    },
    {
      "code": "540123",
      "prov": "54",
      "city": "01",
      "dist": "23",
      "name": "尼木县",
      "level": 3
    },
    {
      "code": "540124",
      "prov": "54",
      "city": "01",
      "dist": "24",
      "name": "曲水县",
      "level": 3
    },
    {
      "code": "540125",
      "prov": "54",
      "city": "01",
      "dist": "25",
      "name": "堆龙德庆县",
      "level": 3
    },
    {
      "code": "540126",
      "prov": "54",
      "city": "01",
      "dist": "26",
      "name": "达孜县",
      "level": 3
    },
    {
      "code": "540127",
      "prov": "54",
      "city": "01",
      "dist": "27",
      "name": "墨竹工卡县",
      "level": 3
    },
    {
      "code": "540200",
      "prov": "54",
      "city": "02",
      "dist": "00",
      "name": "日喀则市",
      "level": 2
    },
    {
      "code": "540202",
      "prov": "54",
      "city": "02",
      "dist": "02",
      "name": "桑珠孜区",
      "level": 3
    },
    {
      "code": "540221",
      "prov": "54",
      "city": "02",
      "dist": "21",
      "name": "南木林县",
      "level": 3
    },
    {
      "code": "540222",
      "prov": "54",
      "city": "02",
      "dist": "22",
      "name": "江孜县",
      "level": 3
    },
    {
      "code": "540223",
      "prov": "54",
      "city": "02",
      "dist": "23",
      "name": "定日县",
      "level": 3
    },
    {
      "code": "540224",
      "prov": "54",
      "city": "02",
      "dist": "24",
      "name": "萨迦县",
      "level": 3
    },
    {
      "code": "540225",
      "prov": "54",
      "city": "02",
      "dist": "25",
      "name": "拉孜县",
      "level": 3
    },
    {
      "code": "540226",
      "prov": "54",
      "city": "02",
      "dist": "26",
      "name": "昂仁县",
      "level": 3
    },
    {
      "code": "540227",
      "prov": "54",
      "city": "02",
      "dist": "27",
      "name": "谢通门县",
      "level": 3
    },
    {
      "code": "540228",
      "prov": "54",
      "city": "02",
      "dist": "28",
      "name": "白朗县",
      "level": 3
    },
    {
      "code": "540229",
      "prov": "54",
      "city": "02",
      "dist": "29",
      "name": "仁布县",
      "level": 3
    },
    {
      "code": "540230",
      "prov": "54",
      "city": "02",
      "dist": "30",
      "name": "康马县",
      "level": 3
    },
    {
      "code": "540231",
      "prov": "54",
      "city": "02",
      "dist": "31",
      "name": "定结县",
      "level": 3
    },
    {
      "code": "540232",
      "prov": "54",
      "city": "02",
      "dist": "32",
      "name": "仲巴县",
      "level": 3
    },
    {
      "code": "540233",
      "prov": "54",
      "city": "02",
      "dist": "33",
      "name": "亚东县",
      "level": 3
    },
    {
      "code": "540234",
      "prov": "54",
      "city": "02",
      "dist": "34",
      "name": "吉隆县",
      "level": 3
    },
    {
      "code": "540235",
      "prov": "54",
      "city": "02",
      "dist": "35",
      "name": "聂拉木县",
      "level": 3
    },
    {
      "code": "540236",
      "prov": "54",
      "city": "02",
      "dist": "36",
      "name": "萨嘎县",
      "level": 3
    },
    {
      "code": "540237",
      "prov": "54",
      "city": "02",
      "dist": "37",
      "name": "岗巴县",
      "level": 3
    },
    {
      "code": "542100",
      "prov": "54",
      "city": "21",
      "dist": "00",
      "name": "昌都地区",
      "level": 2
    },
    {
      "code": "542121",
      "prov": "54",
      "city": "21",
      "dist": "21",
      "name": "昌都县",
      "level": 3
    },
    {
      "code": "542122",
      "prov": "54",
      "city": "21",
      "dist": "22",
      "name": "江达县",
      "level": 3
    },
    {
      "code": "542123",
      "prov": "54",
      "city": "21",
      "dist": "23",
      "name": "贡觉县",
      "level": 3
    },
    {
      "code": "542124",
      "prov": "54",
      "city": "21",
      "dist": "24",
      "name": "类乌齐县",
      "level": 3
    },
    {
      "code": "542125",
      "prov": "54",
      "city": "21",
      "dist": "25",
      "name": "丁青县",
      "level": 3
    },
    {
      "code": "542126",
      "prov": "54",
      "city": "21",
      "dist": "26",
      "name": "察雅县",
      "level": 3
    },
    {
      "code": "542127",
      "prov": "54",
      "city": "21",
      "dist": "27",
      "name": "八宿县",
      "level": 3
    },
    {
      "code": "542128",
      "prov": "54",
      "city": "21",
      "dist": "28",
      "name": "左贡县",
      "level": 3
    },
    {
      "code": "542129",
      "prov": "54",
      "city": "21",
      "dist": "29",
      "name": "芒康县",
      "level": 3
    },
    {
      "code": "542132",
      "prov": "54",
      "city": "21",
      "dist": "32",
      "name": "洛隆县",
      "level": 3
    },
    {
      "code": "542133",
      "prov": "54",
      "city": "21",
      "dist": "33",
      "name": "边坝县",
      "level": 3
    },
    {
      "code": "542200",
      "prov": "54",
      "city": "22",
      "dist": "00",
      "name": "山南地区",
      "level": 2
    },
    {
      "code": "542221",
      "prov": "54",
      "city": "22",
      "dist": "21",
      "name": "乃东县",
      "level": 3
    },
    {
      "code": "542222",
      "prov": "54",
      "city": "22",
      "dist": "22",
      "name": "扎囊县",
      "level": 3
    },
    {
      "code": "542223",
      "prov": "54",
      "city": "22",
      "dist": "23",
      "name": "贡嘎县",
      "level": 3
    },
    {
      "code": "542224",
      "prov": "54",
      "city": "22",
      "dist": "24",
      "name": "桑日县",
      "level": 3
    },
    {
      "code": "542225",
      "prov": "54",
      "city": "22",
      "dist": "25",
      "name": "琼结县",
      "level": 3
    },
    {
      "code": "542226",
      "prov": "54",
      "city": "22",
      "dist": "26",
      "name": "曲松县",
      "level": 3
    },
    {
      "code": "542227",
      "prov": "54",
      "city": "22",
      "dist": "27",
      "name": "措美县",
      "level": 3
    },
    {
      "code": "542228",
      "prov": "54",
      "city": "22",
      "dist": "28",
      "name": "洛扎县",
      "level": 3
    },
    {
      "code": "542229",
      "prov": "54",
      "city": "22",
      "dist": "29",
      "name": "加查县",
      "level": 3
    },
    {
      "code": "542231",
      "prov": "54",
      "city": "22",
      "dist": "31",
      "name": "隆子县",
      "level": 3
    },
    {
      "code": "542232",
      "prov": "54",
      "city": "22",
      "dist": "32",
      "name": "错那县",
      "level": 3
    },
    {
      "code": "542233",
      "prov": "54",
      "city": "22",
      "dist": "33",
      "name": "浪卡子县",
      "level": 3
    },
    {
      "code": "542400",
      "prov": "54",
      "city": "24",
      "dist": "00",
      "name": "那曲地区",
      "level": 2
    },
    {
      "code": "542421",
      "prov": "54",
      "city": "24",
      "dist": "21",
      "name": "那曲县",
      "level": 3
    },
    {
      "code": "542422",
      "prov": "54",
      "city": "24",
      "dist": "22",
      "name": "嘉黎县",
      "level": 3
    },
    {
      "code": "542423",
      "prov": "54",
      "city": "24",
      "dist": "23",
      "name": "比如县",
      "level": 3
    },
    {
      "code": "542424",
      "prov": "54",
      "city": "24",
      "dist": "24",
      "name": "聂荣县",
      "level": 3
    },
    {
      "code": "542425",
      "prov": "54",
      "city": "24",
      "dist": "25",
      "name": "安多县",
      "level": 3
    },
    {
      "code": "542426",
      "prov": "54",
      "city": "24",
      "dist": "26",
      "name": "申扎县",
      "level": 3
    },
    {
      "code": "542427",
      "prov": "54",
      "city": "24",
      "dist": "27",
      "name": "索县",
      "level": 3
    },
    {
      "code": "542428",
      "prov": "54",
      "city": "24",
      "dist": "28",
      "name": "班戈县",
      "level": 3
    },
    {
      "code": "542429",
      "prov": "54",
      "city": "24",
      "dist": "29",
      "name": "巴青县",
      "level": 3
    },
    {
      "code": "542430",
      "prov": "54",
      "city": "24",
      "dist": "30",
      "name": "尼玛县",
      "level": 3
    },
    {
      "code": "542431",
      "prov": "54",
      "city": "24",
      "dist": "31",
      "name": "双湖县",
      "level": 3
    },
    {
      "code": "542500",
      "prov": "54",
      "city": "25",
      "dist": "00",
      "name": "阿里地区",
      "level": 2
    },
    {
      "code": "542521",
      "prov": "54",
      "city": "25",
      "dist": "21",
      "name": "普兰县",
      "level": 3
    },
    {
      "code": "542522",
      "prov": "54",
      "city": "25",
      "dist": "22",
      "name": "札达县",
      "level": 3
    },
    {
      "code": "542523",
      "prov": "54",
      "city": "25",
      "dist": "23",
      "name": "噶尔县",
      "level": 3
    },
    {
      "code": "542524",
      "prov": "54",
      "city": "25",
      "dist": "24",
      "name": "日土县",
      "level": 3
    },
    {
      "code": "542525",
      "prov": "54",
      "city": "25",
      "dist": "25",
      "name": "革吉县",
      "level": 3
    },
    {
      "code": "542526",
      "prov": "54",
      "city": "25",
      "dist": "26",
      "name": "改则县",
      "level": 3
    },
    {
      "code": "542527",
      "prov": "54",
      "city": "25",
      "dist": "27",
      "name": "措勤县",
      "level": 3
    },
    {
      "code": "542600",
      "prov": "54",
      "city": "26",
      "dist": "00",
      "name": "林芝地区",
      "level": 2
    },
    {
      "code": "542621",
      "prov": "54",
      "city": "26",
      "dist": "21",
      "name": "林芝县",
      "level": 3
    },
    {
      "code": "542622",
      "prov": "54",
      "city": "26",
      "dist": "22",
      "name": "工布江达县",
      "level": 3
    },
    {
      "code": "542623",
      "prov": "54",
      "city": "26",
      "dist": "23",
      "name": "米林县",
      "level": 3
    },
    {
      "code": "542624",
      "prov": "54",
      "city": "26",
      "dist": "24",
      "name": "墨脱县",
      "level": 3
    },
    {
      "code": "542625",
      "prov": "54",
      "city": "26",
      "dist": "25",
      "name": "波密县",
      "level": 3
    },
    {
      "code": "542626",
      "prov": "54",
      "city": "26",
      "dist": "26",
      "name": "察隅县",
      "level": 3
    },
    {
      "code": "542627",
      "prov": "54",
      "city": "26",
      "dist": "27",
      "name": "朗县",
      "level": 3
    },
    {
      "code": "610000",
      "prov": "61",
      "city": "00",
      "dist": "00",
      "name": "陕西省",
      "level": 1
    },
    {
      "code": "610100",
      "prov": "61",
      "city": "01",
      "dist": "00",
      "name": "西安市",
      "level": 2
    },
    {
      "code": "610101",
      "prov": "61",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610102",
      "prov": "61",
      "city": "01",
      "dist": "02",
      "name": "新城区",
      "level": 3
    },
    {
      "code": "610103",
      "prov": "61",
      "city": "01",
      "dist": "03",
      "name": "碑林区",
      "level": 3
    },
    {
      "code": "610104",
      "prov": "61",
      "city": "01",
      "dist": "04",
      "name": "莲湖区",
      "level": 3
    },
    {
      "code": "610111",
      "prov": "61",
      "city": "01",
      "dist": "11",
      "name": "灞桥区",
      "level": 3
    },
    {
      "code": "610112",
      "prov": "61",
      "city": "01",
      "dist": "12",
      "name": "未央区",
      "level": 3
    },
    {
      "code": "610113",
      "prov": "61",
      "city": "01",
      "dist": "13",
      "name": "雁塔区",
      "level": 3
    },
    {
      "code": "610114",
      "prov": "61",
      "city": "01",
      "dist": "14",
      "name": "阎良区",
      "level": 3
    },
    {
      "code": "610115",
      "prov": "61",
      "city": "01",
      "dist": "15",
      "name": "临潼区",
      "level": 3
    },
    {
      "code": "610116",
      "prov": "61",
      "city": "01",
      "dist": "16",
      "name": "长安区",
      "level": 3
    },
    {
      "code": "610122",
      "prov": "61",
      "city": "01",
      "dist": "22",
      "name": "蓝田县",
      "level": 3
    },
    {
      "code": "610124",
      "prov": "61",
      "city": "01",
      "dist": "24",
      "name": "周至县",
      "level": 3
    },
    {
      "code": "610125",
      "prov": "61",
      "city": "01",
      "dist": "25",
      "name": "户县",
      "level": 3
    },
    {
      "code": "610126",
      "prov": "61",
      "city": "01",
      "dist": "26",
      "name": "高陵县",
      "level": 3
    },
    {
      "code": "610200",
      "prov": "61",
      "city": "02",
      "dist": "00",
      "name": "铜川市",
      "level": 2
    },
    {
      "code": "610201",
      "prov": "61",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610202",
      "prov": "61",
      "city": "02",
      "dist": "02",
      "name": "王益区",
      "level": 3
    },
    {
      "code": "610203",
      "prov": "61",
      "city": "02",
      "dist": "03",
      "name": "印台区",
      "level": 3
    },
    {
      "code": "610204",
      "prov": "61",
      "city": "02",
      "dist": "04",
      "name": "耀州区",
      "level": 3
    },
    {
      "code": "610222",
      "prov": "61",
      "city": "02",
      "dist": "22",
      "name": "宜君县",
      "level": 3
    },
    {
      "code": "610300",
      "prov": "61",
      "city": "03",
      "dist": "00",
      "name": "宝鸡市",
      "level": 2
    },
    {
      "code": "610301",
      "prov": "61",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610302",
      "prov": "61",
      "city": "03",
      "dist": "02",
      "name": "渭滨区",
      "level": 3
    },
    {
      "code": "610303",
      "prov": "61",
      "city": "03",
      "dist": "03",
      "name": "金台区",
      "level": 3
    },
    {
      "code": "610304",
      "prov": "61",
      "city": "03",
      "dist": "04",
      "name": "陈仓区",
      "level": 3
    },
    {
      "code": "610322",
      "prov": "61",
      "city": "03",
      "dist": "22",
      "name": "凤翔县",
      "level": 3
    },
    {
      "code": "610323",
      "prov": "61",
      "city": "03",
      "dist": "23",
      "name": "岐山县",
      "level": 3
    },
    {
      "code": "610324",
      "prov": "61",
      "city": "03",
      "dist": "24",
      "name": "扶风县",
      "level": 3
    },
    {
      "code": "610326",
      "prov": "61",
      "city": "03",
      "dist": "26",
      "name": "眉县",
      "level": 3
    },
    {
      "code": "610327",
      "prov": "61",
      "city": "03",
      "dist": "27",
      "name": "陇县",
      "level": 3
    },
    {
      "code": "610328",
      "prov": "61",
      "city": "03",
      "dist": "28",
      "name": "千阳县",
      "level": 3
    },
    {
      "code": "610329",
      "prov": "61",
      "city": "03",
      "dist": "29",
      "name": "麟游县",
      "level": 3
    },
    {
      "code": "610330",
      "prov": "61",
      "city": "03",
      "dist": "30",
      "name": "凤县",
      "level": 3
    },
    {
      "code": "610331",
      "prov": "61",
      "city": "03",
      "dist": "31",
      "name": "太白县",
      "level": 3
    },
    {
      "code": "610400",
      "prov": "61",
      "city": "04",
      "dist": "00",
      "name": "咸阳市",
      "level": 2
    },
    {
      "code": "610401",
      "prov": "61",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610402",
      "prov": "61",
      "city": "04",
      "dist": "02",
      "name": "秦都区",
      "level": 3
    },
    {
      "code": "610403",
      "prov": "61",
      "city": "04",
      "dist": "03",
      "name": "杨陵区",
      "level": 3
    },
    {
      "code": "610404",
      "prov": "61",
      "city": "04",
      "dist": "04",
      "name": "渭城区",
      "level": 3
    },
    {
      "code": "610422",
      "prov": "61",
      "city": "04",
      "dist": "22",
      "name": "三原县",
      "level": 3
    },
    {
      "code": "610423",
      "prov": "61",
      "city": "04",
      "dist": "23",
      "name": "泾阳县",
      "level": 3
    },
    {
      "code": "610424",
      "prov": "61",
      "city": "04",
      "dist": "24",
      "name": "乾县",
      "level": 3
    },
    {
      "code": "610425",
      "prov": "61",
      "city": "04",
      "dist": "25",
      "name": "礼泉县",
      "level": 3
    },
    {
      "code": "610426",
      "prov": "61",
      "city": "04",
      "dist": "26",
      "name": "永寿县",
      "level": 3
    },
    {
      "code": "610427",
      "prov": "61",
      "city": "04",
      "dist": "27",
      "name": "彬县",
      "level": 3
    },
    {
      "code": "610428",
      "prov": "61",
      "city": "04",
      "dist": "28",
      "name": "长武县",
      "level": 3
    },
    {
      "code": "610429",
      "prov": "61",
      "city": "04",
      "dist": "29",
      "name": "旬邑县",
      "level": 3
    },
    {
      "code": "610430",
      "prov": "61",
      "city": "04",
      "dist": "30",
      "name": "淳化县",
      "level": 3
    },
    {
      "code": "610431",
      "prov": "61",
      "city": "04",
      "dist": "31",
      "name": "武功县",
      "level": 3
    },
    {
      "code": "610481",
      "prov": "61",
      "city": "04",
      "dist": "81",
      "name": "兴平市",
      "level": 3
    },
    {
      "code": "610500",
      "prov": "61",
      "city": "05",
      "dist": "00",
      "name": "渭南市",
      "level": 2
    },
    {
      "code": "610501",
      "prov": "61",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610502",
      "prov": "61",
      "city": "05",
      "dist": "02",
      "name": "临渭区",
      "level": 3
    },
    {
      "code": "610521",
      "prov": "61",
      "city": "05",
      "dist": "21",
      "name": "华县",
      "level": 3
    },
    {
      "code": "610522",
      "prov": "61",
      "city": "05",
      "dist": "22",
      "name": "潼关县",
      "level": 3
    },
    {
      "code": "610523",
      "prov": "61",
      "city": "05",
      "dist": "23",
      "name": "大荔县",
      "level": 3
    },
    {
      "code": "610524",
      "prov": "61",
      "city": "05",
      "dist": "24",
      "name": "合阳县",
      "level": 3
    },
    {
      "code": "610525",
      "prov": "61",
      "city": "05",
      "dist": "25",
      "name": "澄城县",
      "level": 3
    },
    {
      "code": "610526",
      "prov": "61",
      "city": "05",
      "dist": "26",
      "name": "蒲城县",
      "level": 3
    },
    {
      "code": "610527",
      "prov": "61",
      "city": "05",
      "dist": "27",
      "name": "白水县",
      "level": 3
    },
    {
      "code": "610528",
      "prov": "61",
      "city": "05",
      "dist": "28",
      "name": "富平县",
      "level": 3
    },
    {
      "code": "610581",
      "prov": "61",
      "city": "05",
      "dist": "81",
      "name": "韩城市",
      "level": 3
    },
    {
      "code": "610582",
      "prov": "61",
      "city": "05",
      "dist": "82",
      "name": "华阴市",
      "level": 3
    },
    {
      "code": "610600",
      "prov": "61",
      "city": "06",
      "dist": "00",
      "name": "延安市",
      "level": 2
    },
    {
      "code": "610601",
      "prov": "61",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610602",
      "prov": "61",
      "city": "06",
      "dist": "02",
      "name": "宝塔区",
      "level": 3
    },
    {
      "code": "610621",
      "prov": "61",
      "city": "06",
      "dist": "21",
      "name": "延长县",
      "level": 3
    },
    {
      "code": "610622",
      "prov": "61",
      "city": "06",
      "dist": "22",
      "name": "延川县",
      "level": 3
    },
    {
      "code": "610623",
      "prov": "61",
      "city": "06",
      "dist": "23",
      "name": "子长县",
      "level": 3
    },
    {
      "code": "610624",
      "prov": "61",
      "city": "06",
      "dist": "24",
      "name": "安塞县",
      "level": 3
    },
    {
      "code": "610625",
      "prov": "61",
      "city": "06",
      "dist": "25",
      "name": "志丹县",
      "level": 3
    },
    {
      "code": "610626",
      "prov": "61",
      "city": "06",
      "dist": "26",
      "name": "吴起县",
      "level": 3
    },
    {
      "code": "610627",
      "prov": "61",
      "city": "06",
      "dist": "27",
      "name": "甘泉县",
      "level": 3
    },
    {
      "code": "610628",
      "prov": "61",
      "city": "06",
      "dist": "28",
      "name": "富县",
      "level": 3
    },
    {
      "code": "610629",
      "prov": "61",
      "city": "06",
      "dist": "29",
      "name": "洛川县",
      "level": 3
    },
    {
      "code": "610630",
      "prov": "61",
      "city": "06",
      "dist": "30",
      "name": "宜川县",
      "level": 3
    },
    {
      "code": "610631",
      "prov": "61",
      "city": "06",
      "dist": "31",
      "name": "黄龙县",
      "level": 3
    },
    {
      "code": "610632",
      "prov": "61",
      "city": "06",
      "dist": "32",
      "name": "黄陵县",
      "level": 3
    },
    {
      "code": "610700",
      "prov": "61",
      "city": "07",
      "dist": "00",
      "name": "汉中市",
      "level": 2
    },
    {
      "code": "610701",
      "prov": "61",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610702",
      "prov": "61",
      "city": "07",
      "dist": "02",
      "name": "汉台区",
      "level": 3
    },
    {
      "code": "610721",
      "prov": "61",
      "city": "07",
      "dist": "21",
      "name": "南郑县",
      "level": 3
    },
    {
      "code": "610722",
      "prov": "61",
      "city": "07",
      "dist": "22",
      "name": "城固县",
      "level": 3
    },
    {
      "code": "610723",
      "prov": "61",
      "city": "07",
      "dist": "23",
      "name": "洋县",
      "level": 3
    },
    {
      "code": "610724",
      "prov": "61",
      "city": "07",
      "dist": "24",
      "name": "西乡县",
      "level": 3
    },
    {
      "code": "610725",
      "prov": "61",
      "city": "07",
      "dist": "25",
      "name": "勉县",
      "level": 3
    },
    {
      "code": "610726",
      "prov": "61",
      "city": "07",
      "dist": "26",
      "name": "宁强县",
      "level": 3
    },
    {
      "code": "610727",
      "prov": "61",
      "city": "07",
      "dist": "27",
      "name": "略阳县",
      "level": 3
    },
    {
      "code": "610728",
      "prov": "61",
      "city": "07",
      "dist": "28",
      "name": "镇巴县",
      "level": 3
    },
    {
      "code": "610729",
      "prov": "61",
      "city": "07",
      "dist": "29",
      "name": "留坝县",
      "level": 3
    },
    {
      "code": "610730",
      "prov": "61",
      "city": "07",
      "dist": "30",
      "name": "佛坪县",
      "level": 3
    },
    {
      "code": "610800",
      "prov": "61",
      "city": "08",
      "dist": "00",
      "name": "榆林市",
      "level": 2
    },
    {
      "code": "610801",
      "prov": "61",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610802",
      "prov": "61",
      "city": "08",
      "dist": "02",
      "name": "榆阳区",
      "level": 3
    },
    {
      "code": "610821",
      "prov": "61",
      "city": "08",
      "dist": "21",
      "name": "神木县",
      "level": 3
    },
    {
      "code": "610822",
      "prov": "61",
      "city": "08",
      "dist": "22",
      "name": "府谷县",
      "level": 3
    },
    {
      "code": "610823",
      "prov": "61",
      "city": "08",
      "dist": "23",
      "name": "横山县",
      "level": 3
    },
    {
      "code": "610824",
      "prov": "61",
      "city": "08",
      "dist": "24",
      "name": "靖边县",
      "level": 3
    },
    {
      "code": "610825",
      "prov": "61",
      "city": "08",
      "dist": "25",
      "name": "定边县",
      "level": 3
    },
    {
      "code": "610826",
      "prov": "61",
      "city": "08",
      "dist": "26",
      "name": "绥德县",
      "level": 3
    },
    {
      "code": "610827",
      "prov": "61",
      "city": "08",
      "dist": "27",
      "name": "米脂县",
      "level": 3
    },
    {
      "code": "610828",
      "prov": "61",
      "city": "08",
      "dist": "28",
      "name": "佳县",
      "level": 3
    },
    {
      "code": "610829",
      "prov": "61",
      "city": "08",
      "dist": "29",
      "name": "吴堡县",
      "level": 3
    },
    {
      "code": "610830",
      "prov": "61",
      "city": "08",
      "dist": "30",
      "name": "清涧县",
      "level": 3
    },
    {
      "code": "610831",
      "prov": "61",
      "city": "08",
      "dist": "31",
      "name": "子洲县",
      "level": 3
    },
    {
      "code": "610900",
      "prov": "61",
      "city": "09",
      "dist": "00",
      "name": "安康市",
      "level": 2
    },
    {
      "code": "610901",
      "prov": "61",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "610902",
      "prov": "61",
      "city": "09",
      "dist": "02",
      "name": "汉滨区",
      "level": 3
    },
    {
      "code": "610921",
      "prov": "61",
      "city": "09",
      "dist": "21",
      "name": "汉阴县",
      "level": 3
    },
    {
      "code": "610922",
      "prov": "61",
      "city": "09",
      "dist": "22",
      "name": "石泉县",
      "level": 3
    },
    {
      "code": "610923",
      "prov": "61",
      "city": "09",
      "dist": "23",
      "name": "宁陕县",
      "level": 3
    },
    {
      "code": "610924",
      "prov": "61",
      "city": "09",
      "dist": "24",
      "name": "紫阳县",
      "level": 3
    },
    {
      "code": "610925",
      "prov": "61",
      "city": "09",
      "dist": "25",
      "name": "岚皋县",
      "level": 3
    },
    {
      "code": "610926",
      "prov": "61",
      "city": "09",
      "dist": "26",
      "name": "平利县",
      "level": 3
    },
    {
      "code": "610927",
      "prov": "61",
      "city": "09",
      "dist": "27",
      "name": "镇坪县",
      "level": 3
    },
    {
      "code": "610928",
      "prov": "61",
      "city": "09",
      "dist": "28",
      "name": "旬阳县",
      "level": 3
    },
    {
      "code": "610929",
      "prov": "61",
      "city": "09",
      "dist": "29",
      "name": "白河县",
      "level": 3
    },
    {
      "code": "611000",
      "prov": "61",
      "city": "10",
      "dist": "00",
      "name": "商洛市",
      "level": 2
    },
    {
      "code": "611001",
      "prov": "61",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "611002",
      "prov": "61",
      "city": "10",
      "dist": "02",
      "name": "商州区",
      "level": 3
    },
    {
      "code": "611021",
      "prov": "61",
      "city": "10",
      "dist": "21",
      "name": "洛南县",
      "level": 3
    },
    {
      "code": "611022",
      "prov": "61",
      "city": "10",
      "dist": "22",
      "name": "丹凤县",
      "level": 3
    },
    {
      "code": "611023",
      "prov": "61",
      "city": "10",
      "dist": "23",
      "name": "商南县",
      "level": 3
    },
    {
      "code": "611024",
      "prov": "61",
      "city": "10",
      "dist": "24",
      "name": "山阳县",
      "level": 3
    },
    {
      "code": "611025",
      "prov": "61",
      "city": "10",
      "dist": "25",
      "name": "镇安县",
      "level": 3
    },
    {
      "code": "611026",
      "prov": "61",
      "city": "10",
      "dist": "26",
      "name": "柞水县",
      "level": 3
    },
    {
      "code": "620000",
      "prov": "62",
      "city": "00",
      "dist": "00",
      "name": "甘肃省",
      "level": 1
    },
    {
      "code": "620100",
      "prov": "62",
      "city": "01",
      "dist": "00",
      "name": "兰州市",
      "level": 2
    },
    {
      "code": "620101",
      "prov": "62",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620102",
      "prov": "62",
      "city": "01",
      "dist": "02",
      "name": "城关区",
      "level": 3
    },
    {
      "code": "620103",
      "prov": "62",
      "city": "01",
      "dist": "03",
      "name": "七里河区",
      "level": 3
    },
    {
      "code": "620104",
      "prov": "62",
      "city": "01",
      "dist": "04",
      "name": "西固区",
      "level": 3
    },
    {
      "code": "620105",
      "prov": "62",
      "city": "01",
      "dist": "05",
      "name": "安宁区",
      "level": 3
    },
    {
      "code": "620111",
      "prov": "62",
      "city": "01",
      "dist": "11",
      "name": "红古区",
      "level": 3
    },
    {
      "code": "620121",
      "prov": "62",
      "city": "01",
      "dist": "21",
      "name": "永登县",
      "level": 3
    },
    {
      "code": "620122",
      "prov": "62",
      "city": "01",
      "dist": "22",
      "name": "皋兰县",
      "level": 3
    },
    {
      "code": "620123",
      "prov": "62",
      "city": "01",
      "dist": "23",
      "name": "榆中县",
      "level": 3
    },
    {
      "code": "620200",
      "prov": "62",
      "city": "02",
      "dist": "00",
      "name": "嘉峪关市",
      "level": 2
    },
    {
      "code": "620201",
      "prov": "62",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620300",
      "prov": "62",
      "city": "03",
      "dist": "00",
      "name": "金昌市",
      "level": 2
    },
    {
      "code": "620301",
      "prov": "62",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620302",
      "prov": "62",
      "city": "03",
      "dist": "02",
      "name": "金川区",
      "level": 3
    },
    {
      "code": "620321",
      "prov": "62",
      "city": "03",
      "dist": "21",
      "name": "永昌县",
      "level": 3
    },
    {
      "code": "620400",
      "prov": "62",
      "city": "04",
      "dist": "00",
      "name": "白银市",
      "level": 2
    },
    {
      "code": "620401",
      "prov": "62",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620402",
      "prov": "62",
      "city": "04",
      "dist": "02",
      "name": "白银区",
      "level": 3
    },
    {
      "code": "620403",
      "prov": "62",
      "city": "04",
      "dist": "03",
      "name": "平川区",
      "level": 3
    },
    {
      "code": "620421",
      "prov": "62",
      "city": "04",
      "dist": "21",
      "name": "靖远县",
      "level": 3
    },
    {
      "code": "620422",
      "prov": "62",
      "city": "04",
      "dist": "22",
      "name": "会宁县",
      "level": 3
    },
    {
      "code": "620423",
      "prov": "62",
      "city": "04",
      "dist": "23",
      "name": "景泰县",
      "level": 3
    },
    {
      "code": "620500",
      "prov": "62",
      "city": "05",
      "dist": "00",
      "name": "天水市",
      "level": 2
    },
    {
      "code": "620501",
      "prov": "62",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620502",
      "prov": "62",
      "city": "05",
      "dist": "02",
      "name": "秦州区",
      "level": 3
    },
    {
      "code": "620503",
      "prov": "62",
      "city": "05",
      "dist": "03",
      "name": "麦积区",
      "level": 3
    },
    {
      "code": "620521",
      "prov": "62",
      "city": "05",
      "dist": "21",
      "name": "清水县",
      "level": 3
    },
    {
      "code": "620522",
      "prov": "62",
      "city": "05",
      "dist": "22",
      "name": "秦安县",
      "level": 3
    },
    {
      "code": "620523",
      "prov": "62",
      "city": "05",
      "dist": "23",
      "name": "甘谷县",
      "level": 3
    },
    {
      "code": "620524",
      "prov": "62",
      "city": "05",
      "dist": "24",
      "name": "武山县",
      "level": 3
    },
    {
      "code": "620525",
      "prov": "62",
      "city": "05",
      "dist": "25",
      "name": "张家川回族自治县",
      "level": 3
    },
    {
      "code": "620600",
      "prov": "62",
      "city": "06",
      "dist": "00",
      "name": "武威市",
      "level": 2
    },
    {
      "code": "620601",
      "prov": "62",
      "city": "06",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620602",
      "prov": "62",
      "city": "06",
      "dist": "02",
      "name": "凉州区",
      "level": 3
    },
    {
      "code": "620621",
      "prov": "62",
      "city": "06",
      "dist": "21",
      "name": "民勤县",
      "level": 3
    },
    {
      "code": "620622",
      "prov": "62",
      "city": "06",
      "dist": "22",
      "name": "古浪县",
      "level": 3
    },
    {
      "code": "620623",
      "prov": "62",
      "city": "06",
      "dist": "23",
      "name": "天祝藏族自治县",
      "level": 3
    },
    {
      "code": "620700",
      "prov": "62",
      "city": "07",
      "dist": "00",
      "name": "张掖市",
      "level": 2
    },
    {
      "code": "620701",
      "prov": "62",
      "city": "07",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620702",
      "prov": "62",
      "city": "07",
      "dist": "02",
      "name": "甘州区",
      "level": 3
    },
    {
      "code": "620721",
      "prov": "62",
      "city": "07",
      "dist": "21",
      "name": "肃南裕固族自治县",
      "level": 3
    },
    {
      "code": "620722",
      "prov": "62",
      "city": "07",
      "dist": "22",
      "name": "民乐县",
      "level": 3
    },
    {
      "code": "620723",
      "prov": "62",
      "city": "07",
      "dist": "23",
      "name": "临泽县",
      "level": 3
    },
    {
      "code": "620724",
      "prov": "62",
      "city": "07",
      "dist": "24",
      "name": "高台县",
      "level": 3
    },
    {
      "code": "620725",
      "prov": "62",
      "city": "07",
      "dist": "25",
      "name": "山丹县",
      "level": 3
    },
    {
      "code": "620800",
      "prov": "62",
      "city": "08",
      "dist": "00",
      "name": "平凉市",
      "level": 2
    },
    {
      "code": "620801",
      "prov": "62",
      "city": "08",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620802",
      "prov": "62",
      "city": "08",
      "dist": "02",
      "name": "崆峒区",
      "level": 3
    },
    {
      "code": "620821",
      "prov": "62",
      "city": "08",
      "dist": "21",
      "name": "泾川县",
      "level": 3
    },
    {
      "code": "620822",
      "prov": "62",
      "city": "08",
      "dist": "22",
      "name": "灵台县",
      "level": 3
    },
    {
      "code": "620823",
      "prov": "62",
      "city": "08",
      "dist": "23",
      "name": "崇信县",
      "level": 3
    },
    {
      "code": "620824",
      "prov": "62",
      "city": "08",
      "dist": "24",
      "name": "华亭县",
      "level": 3
    },
    {
      "code": "620825",
      "prov": "62",
      "city": "08",
      "dist": "25",
      "name": "庄浪县",
      "level": 3
    },
    {
      "code": "620826",
      "prov": "62",
      "city": "08",
      "dist": "26",
      "name": "静宁县",
      "level": 3
    },
    {
      "code": "620900",
      "prov": "62",
      "city": "09",
      "dist": "00",
      "name": "酒泉市",
      "level": 2
    },
    {
      "code": "620901",
      "prov": "62",
      "city": "09",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "620902",
      "prov": "62",
      "city": "09",
      "dist": "02",
      "name": "肃州区",
      "level": 3
    },
    {
      "code": "620921",
      "prov": "62",
      "city": "09",
      "dist": "21",
      "name": "金塔县",
      "level": 3
    },
    {
      "code": "620922",
      "prov": "62",
      "city": "09",
      "dist": "22",
      "name": "瓜州县",
      "level": 3
    },
    {
      "code": "620923",
      "prov": "62",
      "city": "09",
      "dist": "23",
      "name": "肃北蒙古族自治县",
      "level": 3
    },
    {
      "code": "620924",
      "prov": "62",
      "city": "09",
      "dist": "24",
      "name": "阿克塞哈萨克族自治县",
      "level": 3
    },
    {
      "code": "620981",
      "prov": "62",
      "city": "09",
      "dist": "81",
      "name": "玉门市",
      "level": 3
    },
    {
      "code": "620982",
      "prov": "62",
      "city": "09",
      "dist": "82",
      "name": "敦煌市",
      "level": 3
    },
    {
      "code": "621000",
      "prov": "62",
      "city": "10",
      "dist": "00",
      "name": "庆阳市",
      "level": 2
    },
    {
      "code": "621001",
      "prov": "62",
      "city": "10",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "621002",
      "prov": "62",
      "city": "10",
      "dist": "02",
      "name": "西峰区",
      "level": 3
    },
    {
      "code": "621021",
      "prov": "62",
      "city": "10",
      "dist": "21",
      "name": "庆城县",
      "level": 3
    },
    {
      "code": "621022",
      "prov": "62",
      "city": "10",
      "dist": "22",
      "name": "环县",
      "level": 3
    },
    {
      "code": "621023",
      "prov": "62",
      "city": "10",
      "dist": "23",
      "name": "华池县",
      "level": 3
    },
    {
      "code": "621024",
      "prov": "62",
      "city": "10",
      "dist": "24",
      "name": "合水县",
      "level": 3
    },
    {
      "code": "621025",
      "prov": "62",
      "city": "10",
      "dist": "25",
      "name": "正宁县",
      "level": 3
    },
    {
      "code": "621026",
      "prov": "62",
      "city": "10",
      "dist": "26",
      "name": "宁县",
      "level": 3
    },
    {
      "code": "621027",
      "prov": "62",
      "city": "10",
      "dist": "27",
      "name": "镇原县",
      "level": 3
    },
    {
      "code": "621100",
      "prov": "62",
      "city": "11",
      "dist": "00",
      "name": "定西市",
      "level": 2
    },
    {
      "code": "621101",
      "prov": "62",
      "city": "11",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "621102",
      "prov": "62",
      "city": "11",
      "dist": "02",
      "name": "安定区",
      "level": 3
    },
    {
      "code": "621121",
      "prov": "62",
      "city": "11",
      "dist": "21",
      "name": "通渭县",
      "level": 3
    },
    {
      "code": "621122",
      "prov": "62",
      "city": "11",
      "dist": "22",
      "name": "陇西县",
      "level": 3
    },
    {
      "code": "621123",
      "prov": "62",
      "city": "11",
      "dist": "23",
      "name": "渭源县",
      "level": 3
    },
    {
      "code": "621124",
      "prov": "62",
      "city": "11",
      "dist": "24",
      "name": "临洮县",
      "level": 3
    },
    {
      "code": "621125",
      "prov": "62",
      "city": "11",
      "dist": "25",
      "name": "漳县",
      "level": 3
    },
    {
      "code": "621126",
      "prov": "62",
      "city": "11",
      "dist": "26",
      "name": "岷县",
      "level": 3
    },
    {
      "code": "621200",
      "prov": "62",
      "city": "12",
      "dist": "00",
      "name": "陇南市",
      "level": 2
    },
    {
      "code": "621201",
      "prov": "62",
      "city": "12",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "621202",
      "prov": "62",
      "city": "12",
      "dist": "02",
      "name": "武都区",
      "level": 3
    },
    {
      "code": "621221",
      "prov": "62",
      "city": "12",
      "dist": "21",
      "name": "成县",
      "level": 3
    },
    {
      "code": "621222",
      "prov": "62",
      "city": "12",
      "dist": "22",
      "name": "文县",
      "level": 3
    },
    {
      "code": "621223",
      "prov": "62",
      "city": "12",
      "dist": "23",
      "name": "宕昌县",
      "level": 3
    },
    {
      "code": "621224",
      "prov": "62",
      "city": "12",
      "dist": "24",
      "name": "康县",
      "level": 3
    },
    {
      "code": "621225",
      "prov": "62",
      "city": "12",
      "dist": "25",
      "name": "西和县",
      "level": 3
    },
    {
      "code": "621226",
      "prov": "62",
      "city": "12",
      "dist": "26",
      "name": "礼县",
      "level": 3
    },
    {
      "code": "621227",
      "prov": "62",
      "city": "12",
      "dist": "27",
      "name": "徽县",
      "level": 3
    },
    {
      "code": "621228",
      "prov": "62",
      "city": "12",
      "dist": "28",
      "name": "两当县",
      "level": 3
    },
    {
      "code": "622900",
      "prov": "62",
      "city": "29",
      "dist": "00",
      "name": "临夏回族自治州",
      "level": 2
    },
    {
      "code": "622901",
      "prov": "62",
      "city": "29",
      "dist": "01",
      "name": "临夏市",
      "level": 3
    },
    {
      "code": "622921",
      "prov": "62",
      "city": "29",
      "dist": "21",
      "name": "临夏县",
      "level": 3
    },
    {
      "code": "622922",
      "prov": "62",
      "city": "29",
      "dist": "22",
      "name": "康乐县",
      "level": 3
    },
    {
      "code": "622923",
      "prov": "62",
      "city": "29",
      "dist": "23",
      "name": "永靖县",
      "level": 3
    },
    {
      "code": "622924",
      "prov": "62",
      "city": "29",
      "dist": "24",
      "name": "广河县",
      "level": 3
    },
    {
      "code": "622925",
      "prov": "62",
      "city": "29",
      "dist": "25",
      "name": "和政县",
      "level": 3
    },
    {
      "code": "622926",
      "prov": "62",
      "city": "29",
      "dist": "26",
      "name": "东乡族自治县",
      "level": 3
    },
    {
      "code": "622927",
      "prov": "62",
      "city": "29",
      "dist": "27",
      "name": "积石山保安族东乡族撒拉族自治县",
      "level": 3
    },
    {
      "code": "623000",
      "prov": "62",
      "city": "30",
      "dist": "00",
      "name": "甘南藏族自治州",
      "level": 2
    },
    {
      "code": "623001",
      "prov": "62",
      "city": "30",
      "dist": "01",
      "name": "合作市",
      "level": 3
    },
    {
      "code": "623021",
      "prov": "62",
      "city": "30",
      "dist": "21",
      "name": "临潭县",
      "level": 3
    },
    {
      "code": "623022",
      "prov": "62",
      "city": "30",
      "dist": "22",
      "name": "卓尼县",
      "level": 3
    },
    {
      "code": "623023",
      "prov": "62",
      "city": "30",
      "dist": "23",
      "name": "舟曲县",
      "level": 3
    },
    {
      "code": "623024",
      "prov": "62",
      "city": "30",
      "dist": "24",
      "name": "迭部县",
      "level": 3
    },
    {
      "code": "623025",
      "prov": "62",
      "city": "30",
      "dist": "25",
      "name": "玛曲县",
      "level": 3
    },
    {
      "code": "623026",
      "prov": "62",
      "city": "30",
      "dist": "26",
      "name": "碌曲县",
      "level": 3
    },
    {
      "code": "623027",
      "prov": "62",
      "city": "30",
      "dist": "27",
      "name": "夏河县",
      "level": 3
    },
    {
      "code": "630000",
      "prov": "63",
      "city": "00",
      "dist": "00",
      "name": "青海省",
      "level": 1
    },
    {
      "code": "630100",
      "prov": "63",
      "city": "01",
      "dist": "00",
      "name": "西宁市",
      "level": 2
    },
    {
      "code": "630101",
      "prov": "63",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "630102",
      "prov": "63",
      "city": "01",
      "dist": "02",
      "name": "城东区",
      "level": 3
    },
    {
      "code": "630103",
      "prov": "63",
      "city": "01",
      "dist": "03",
      "name": "城中区",
      "level": 3
    },
    {
      "code": "630104",
      "prov": "63",
      "city": "01",
      "dist": "04",
      "name": "城西区",
      "level": 3
    },
    {
      "code": "630105",
      "prov": "63",
      "city": "01",
      "dist": "05",
      "name": "城北区",
      "level": 3
    },
    {
      "code": "630121",
      "prov": "63",
      "city": "01",
      "dist": "21",
      "name": "大通回族土族自治县",
      "level": 3
    },
    {
      "code": "630122",
      "prov": "63",
      "city": "01",
      "dist": "22",
      "name": "湟中县",
      "level": 3
    },
    {
      "code": "630123",
      "prov": "63",
      "city": "01",
      "dist": "23",
      "name": "湟源县",
      "level": 3
    },
    {
      "code": "630200",
      "prov": "63",
      "city": "02",
      "dist": "00",
      "name": "海东市",
      "level": 2
    },
    {
      "code": "630202",
      "prov": "63",
      "city": "02",
      "dist": "02",
      "name": "乐都区",
      "level": 3
    },
    {
      "code": "630221",
      "prov": "63",
      "city": "02",
      "dist": "21",
      "name": "平安县",
      "level": 3
    },
    {
      "code": "630222",
      "prov": "63",
      "city": "02",
      "dist": "22",
      "name": "民和回族土族自治县",
      "level": 3
    },
    {
      "code": "630223",
      "prov": "63",
      "city": "02",
      "dist": "23",
      "name": "互助土族自治县",
      "level": 3
    },
    {
      "code": "630224",
      "prov": "63",
      "city": "02",
      "dist": "24",
      "name": "化隆回族自治县",
      "level": 3
    },
    {
      "code": "630225",
      "prov": "63",
      "city": "02",
      "dist": "25",
      "name": "循化撒拉族自治县",
      "level": 3
    },
    {
      "code": "632200",
      "prov": "63",
      "city": "22",
      "dist": "00",
      "name": "海北藏族自治州",
      "level": 2
    },
    {
      "code": "632221",
      "prov": "63",
      "city": "22",
      "dist": "21",
      "name": "门源回族自治县",
      "level": 3
    },
    {
      "code": "632222",
      "prov": "63",
      "city": "22",
      "dist": "22",
      "name": "祁连县",
      "level": 3
    },
    {
      "code": "632223",
      "prov": "63",
      "city": "22",
      "dist": "23",
      "name": "海晏县",
      "level": 3
    },
    {
      "code": "632224",
      "prov": "63",
      "city": "22",
      "dist": "24",
      "name": "刚察县",
      "level": 3
    },
    {
      "code": "632300",
      "prov": "63",
      "city": "23",
      "dist": "00",
      "name": "黄南藏族自治州",
      "level": 2
    },
    {
      "code": "632321",
      "prov": "63",
      "city": "23",
      "dist": "21",
      "name": "同仁县",
      "level": 3
    },
    {
      "code": "632322",
      "prov": "63",
      "city": "23",
      "dist": "22",
      "name": "尖扎县",
      "level": 3
    },
    {
      "code": "632323",
      "prov": "63",
      "city": "23",
      "dist": "23",
      "name": "泽库县",
      "level": 3
    },
    {
      "code": "632324",
      "prov": "63",
      "city": "23",
      "dist": "24",
      "name": "河南蒙古族自治县",
      "level": 3
    },
    {
      "code": "632500",
      "prov": "63",
      "city": "25",
      "dist": "00",
      "name": "海南藏族自治州",
      "level": 2
    },
    {
      "code": "632521",
      "prov": "63",
      "city": "25",
      "dist": "21",
      "name": "共和县",
      "level": 3
    },
    {
      "code": "632522",
      "prov": "63",
      "city": "25",
      "dist": "22",
      "name": "同德县",
      "level": 3
    },
    {
      "code": "632523",
      "prov": "63",
      "city": "25",
      "dist": "23",
      "name": "贵德县",
      "level": 3
    },
    {
      "code": "632524",
      "prov": "63",
      "city": "25",
      "dist": "24",
      "name": "兴海县",
      "level": 3
    },
    {
      "code": "632525",
      "prov": "63",
      "city": "25",
      "dist": "25",
      "name": "贵南县",
      "level": 3
    },
    {
      "code": "632600",
      "prov": "63",
      "city": "26",
      "dist": "00",
      "name": "果洛藏族自治州",
      "level": 2
    },
    {
      "code": "632621",
      "prov": "63",
      "city": "26",
      "dist": "21",
      "name": "玛沁县",
      "level": 3
    },
    {
      "code": "632622",
      "prov": "63",
      "city": "26",
      "dist": "22",
      "name": "班玛县",
      "level": 3
    },
    {
      "code": "632623",
      "prov": "63",
      "city": "26",
      "dist": "23",
      "name": "甘德县",
      "level": 3
    },
    {
      "code": "632624",
      "prov": "63",
      "city": "26",
      "dist": "24",
      "name": "达日县",
      "level": 3
    },
    {
      "code": "632625",
      "prov": "63",
      "city": "26",
      "dist": "25",
      "name": "久治县",
      "level": 3
    },
    {
      "code": "632626",
      "prov": "63",
      "city": "26",
      "dist": "26",
      "name": "玛多县",
      "level": 3
    },
    {
      "code": "632700",
      "prov": "63",
      "city": "27",
      "dist": "00",
      "name": "玉树藏族自治州",
      "level": 2
    },
    {
      "code": "632701",
      "prov": "63",
      "city": "27",
      "dist": "01",
      "name": "玉树市",
      "level": 3
    },
    {
      "code": "632722",
      "prov": "63",
      "city": "27",
      "dist": "22",
      "name": "杂多县",
      "level": 3
    },
    {
      "code": "632723",
      "prov": "63",
      "city": "27",
      "dist": "23",
      "name": "称多县",
      "level": 3
    },
    {
      "code": "632724",
      "prov": "63",
      "city": "27",
      "dist": "24",
      "name": "治多县",
      "level": 3
    },
    {
      "code": "632725",
      "prov": "63",
      "city": "27",
      "dist": "25",
      "name": "囊谦县",
      "level": 3
    },
    {
      "code": "632726",
      "prov": "63",
      "city": "27",
      "dist": "26",
      "name": "曲麻莱县",
      "level": 3
    },
    {
      "code": "632800",
      "prov": "63",
      "city": "28",
      "dist": "00",
      "name": "海西蒙古族藏族自治州",
      "level": 2
    },
    {
      "code": "632801",
      "prov": "63",
      "city": "28",
      "dist": "01",
      "name": "格尔木市",
      "level": 3
    },
    {
      "code": "632802",
      "prov": "63",
      "city": "28",
      "dist": "02",
      "name": "德令哈市",
      "level": 3
    },
    {
      "code": "632821",
      "prov": "63",
      "city": "28",
      "dist": "21",
      "name": "乌兰县",
      "level": 3
    },
    {
      "code": "632822",
      "prov": "63",
      "city": "28",
      "dist": "22",
      "name": "都兰县",
      "level": 3
    },
    {
      "code": "632823",
      "prov": "63",
      "city": "28",
      "dist": "23",
      "name": "天峻县",
      "level": 3
    },
    {
      "code": "640000",
      "prov": "64",
      "city": "00",
      "dist": "00",
      "name": "宁夏回族自治区",
      "level": 1
    },
    {
      "code": "640100",
      "prov": "64",
      "city": "01",
      "dist": "00",
      "name": "银川市",
      "level": 2
    },
    {
      "code": "640101",
      "prov": "64",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "640104",
      "prov": "64",
      "city": "01",
      "dist": "04",
      "name": "兴庆区",
      "level": 3
    },
    {
      "code": "640105",
      "prov": "64",
      "city": "01",
      "dist": "05",
      "name": "西夏区",
      "level": 3
    },
    {
      "code": "640106",
      "prov": "64",
      "city": "01",
      "dist": "06",
      "name": "金凤区",
      "level": 3
    },
    {
      "code": "640121",
      "prov": "64",
      "city": "01",
      "dist": "21",
      "name": "永宁县",
      "level": 3
    },
    {
      "code": "640122",
      "prov": "64",
      "city": "01",
      "dist": "22",
      "name": "贺兰县",
      "level": 3
    },
    {
      "code": "640181",
      "prov": "64",
      "city": "01",
      "dist": "81",
      "name": "灵武市",
      "level": 3
    },
    {
      "code": "640200",
      "prov": "64",
      "city": "02",
      "dist": "00",
      "name": "石嘴山市",
      "level": 2
    },
    {
      "code": "640201",
      "prov": "64",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "640202",
      "prov": "64",
      "city": "02",
      "dist": "02",
      "name": "大武口区",
      "level": 3
    },
    {
      "code": "640205",
      "prov": "64",
      "city": "02",
      "dist": "05",
      "name": "惠农区",
      "level": 3
    },
    {
      "code": "640221",
      "prov": "64",
      "city": "02",
      "dist": "21",
      "name": "平罗县",
      "level": 3
    },
    {
      "code": "640300",
      "prov": "64",
      "city": "03",
      "dist": "00",
      "name": "吴忠市",
      "level": 2
    },
    {
      "code": "640301",
      "prov": "64",
      "city": "03",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "640302",
      "prov": "64",
      "city": "03",
      "dist": "02",
      "name": "利通区",
      "level": 3
    },
    {
      "code": "640303",
      "prov": "64",
      "city": "03",
      "dist": "03",
      "name": "红寺堡区",
      "level": 3
    },
    {
      "code": "640323",
      "prov": "64",
      "city": "03",
      "dist": "23",
      "name": "盐池县",
      "level": 3
    },
    {
      "code": "640324",
      "prov": "64",
      "city": "03",
      "dist": "24",
      "name": "同心县",
      "level": 3
    },
    {
      "code": "640381",
      "prov": "64",
      "city": "03",
      "dist": "81",
      "name": "青铜峡市",
      "level": 3
    },
    {
      "code": "640400",
      "prov": "64",
      "city": "04",
      "dist": "00",
      "name": "固原市",
      "level": 2
    },
    {
      "code": "640401",
      "prov": "64",
      "city": "04",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "640402",
      "prov": "64",
      "city": "04",
      "dist": "02",
      "name": "原州区",
      "level": 3
    },
    {
      "code": "640422",
      "prov": "64",
      "city": "04",
      "dist": "22",
      "name": "西吉县",
      "level": 3
    },
    {
      "code": "640423",
      "prov": "64",
      "city": "04",
      "dist": "23",
      "name": "隆德县",
      "level": 3
    },
    {
      "code": "640424",
      "prov": "64",
      "city": "04",
      "dist": "24",
      "name": "泾源县",
      "level": 3
    },
    {
      "code": "640425",
      "prov": "64",
      "city": "04",
      "dist": "25",
      "name": "彭阳县",
      "level": 3
    },
    {
      "code": "640500",
      "prov": "64",
      "city": "05",
      "dist": "00",
      "name": "中卫市",
      "level": 2
    },
    {
      "code": "640501",
      "prov": "64",
      "city": "05",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "640502",
      "prov": "64",
      "city": "05",
      "dist": "02",
      "name": "沙坡头区",
      "level": 3
    },
    {
      "code": "640521",
      "prov": "64",
      "city": "05",
      "dist": "21",
      "name": "中宁县",
      "level": 3
    },
    {
      "code": "640522",
      "prov": "64",
      "city": "05",
      "dist": "22",
      "name": "海原县",
      "level": 3
    },
    {
      "code": "650000",
      "prov": "65",
      "city": "00",
      "dist": "00",
      "name": "新疆维吾尔自治区",
      "level": 1
    },
    {
      "code": "650100",
      "prov": "65",
      "city": "01",
      "dist": "00",
      "name": "乌鲁木齐市",
      "level": 2
    },
    {
      "code": "650101",
      "prov": "65",
      "city": "01",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "650102",
      "prov": "65",
      "city": "01",
      "dist": "02",
      "name": "天山区",
      "level": 3
    },
    {
      "code": "650103",
      "prov": "65",
      "city": "01",
      "dist": "03",
      "name": "沙依巴克区",
      "level": 3
    },
    {
      "code": "650104",
      "prov": "65",
      "city": "01",
      "dist": "04",
      "name": "新市区",
      "level": 3
    },
    {
      "code": "650105",
      "prov": "65",
      "city": "01",
      "dist": "05",
      "name": "水磨沟区",
      "level": 3
    },
    {
      "code": "650106",
      "prov": "65",
      "city": "01",
      "dist": "06",
      "name": "头屯河区",
      "level": 3
    },
    {
      "code": "650107",
      "prov": "65",
      "city": "01",
      "dist": "07",
      "name": "达坂城区",
      "level": 3
    },
    {
      "code": "650109",
      "prov": "65",
      "city": "01",
      "dist": "09",
      "name": "米东区",
      "level": 3
    },
    {
      "code": "650121",
      "prov": "65",
      "city": "01",
      "dist": "21",
      "name": "乌鲁木齐县",
      "level": 3
    },
    {
      "code": "650200",
      "prov": "65",
      "city": "02",
      "dist": "00",
      "name": "克拉玛依市",
      "level": 2
    },
    {
      "code": "650201",
      "prov": "65",
      "city": "02",
      "dist": "01",
      "name": "市辖区",
      "level": 3
    },
    {
      "code": "650202",
      "prov": "65",
      "city": "02",
      "dist": "02",
      "name": "独山子区",
      "level": 3
    },
    {
      "code": "650203",
      "prov": "65",
      "city": "02",
      "dist": "03",
      "name": "克拉玛依区",
      "level": 3
    },
    {
      "code": "650204",
      "prov": "65",
      "city": "02",
      "dist": "04",
      "name": "白碱滩区",
      "level": 3
    },
    {
      "code": "650205",
      "prov": "65",
      "city": "02",
      "dist": "05",
      "name": "乌尔禾区",
      "level": 3
    },
    {
      "code": "652100",
      "prov": "65",
      "city": "21",
      "dist": "00",
      "name": "吐鲁番地区",
      "level": 2
    },
    {
      "code": "652101",
      "prov": "65",
      "city": "21",
      "dist": "01",
      "name": "吐鲁番市",
      "level": 3
    },
    {
      "code": "652122",
      "prov": "65",
      "city": "21",
      "dist": "22",
      "name": "鄯善县",
      "level": 3
    },
    {
      "code": "652123",
      "prov": "65",
      "city": "21",
      "dist": "23",
      "name": "托克逊县",
      "level": 3
    },
    {
      "code": "652200",
      "prov": "65",
      "city": "22",
      "dist": "00",
      "name": "哈密地区",
      "level": 2
    },
    {
      "code": "652201",
      "prov": "65",
      "city": "22",
      "dist": "01",
      "name": "哈密市",
      "level": 3
    },
    {
      "code": "652222",
      "prov": "65",
      "city": "22",
      "dist": "22",
      "name": "巴里坤哈萨克自治县",
      "level": 3
    },
    {
      "code": "652223",
      "prov": "65",
      "city": "22",
      "dist": "23",
      "name": "伊吾县",
      "level": 3
    },
    {
      "code": "652300",
      "prov": "65",
      "city": "23",
      "dist": "00",
      "name": "昌吉回族自治州",
      "level": 2
    },
    {
      "code": "652301",
      "prov": "65",
      "city": "23",
      "dist": "01",
      "name": "昌吉市",
      "level": 3
    },
    {
      "code": "652302",
      "prov": "65",
      "city": "23",
      "dist": "02",
      "name": "阜康市",
      "level": 3
    },
    {
      "code": "652323",
      "prov": "65",
      "city": "23",
      "dist": "23",
      "name": "呼图壁县",
      "level": 3
    },
    {
      "code": "652324",
      "prov": "65",
      "city": "23",
      "dist": "24",
      "name": "玛纳斯县",
      "level": 3
    },
    {
      "code": "652325",
      "prov": "65",
      "city": "23",
      "dist": "25",
      "name": "奇台县",
      "level": 3
    },
    {
      "code": "652327",
      "prov": "65",
      "city": "23",
      "dist": "27",
      "name": "吉木萨尔县",
      "level": 3
    },
    {
      "code": "652328",
      "prov": "65",
      "city": "23",
      "dist": "28",
      "name": "木垒哈萨克自治县",
      "level": 3
    },
    {
      "code": "652700",
      "prov": "65",
      "city": "27",
      "dist": "00",
      "name": "博尔塔拉蒙古自治州",
      "level": 2
    },
    {
      "code": "652701",
      "prov": "65",
      "city": "27",
      "dist": "01",
      "name": "博乐市",
      "level": 3
    },
    {
      "code": "652702",
      "prov": "65",
      "city": "27",
      "dist": "02",
      "name": "阿拉山口市",
      "level": 3
    },
    {
      "code": "652722",
      "prov": "65",
      "city": "27",
      "dist": "22",
      "name": "精河县",
      "level": 3
    },
    {
      "code": "652723",
      "prov": "65",
      "city": "27",
      "dist": "23",
      "name": "温泉县",
      "level": 3
    },
    {
      "code": "652800",
      "prov": "65",
      "city": "28",
      "dist": "00",
      "name": "巴音郭楞蒙古自治州",
      "level": 2
    },
    {
      "code": "652801",
      "prov": "65",
      "city": "28",
      "dist": "01",
      "name": "库尔勒市",
      "level": 3
    },
    {
      "code": "652822",
      "prov": "65",
      "city": "28",
      "dist": "22",
      "name": "轮台县",
      "level": 3
    },
    {
      "code": "652823",
      "prov": "65",
      "city": "28",
      "dist": "23",
      "name": "尉犁县",
      "level": 3
    },
    {
      "code": "652824",
      "prov": "65",
      "city": "28",
      "dist": "24",
      "name": "若羌县",
      "level": 3
    },
    {
      "code": "652825",
      "prov": "65",
      "city": "28",
      "dist": "25",
      "name": "且末县",
      "level": 3
    },
    {
      "code": "652826",
      "prov": "65",
      "city": "28",
      "dist": "26",
      "name": "焉耆回族自治县",
      "level": 3
    },
    {
      "code": "652827",
      "prov": "65",
      "city": "28",
      "dist": "27",
      "name": "和静县",
      "level": 3
    },
    {
      "code": "652828",
      "prov": "65",
      "city": "28",
      "dist": "28",
      "name": "和硕县",
      "level": 3
    },
    {
      "code": "652829",
      "prov": "65",
      "city": "28",
      "dist": "29",
      "name": "博湖县",
      "level": 3
    },
    {
      "code": "652900",
      "prov": "65",
      "city": "29",
      "dist": "00",
      "name": "阿克苏地区",
      "level": 2
    },
    {
      "code": "652901",
      "prov": "65",
      "city": "29",
      "dist": "01",
      "name": "阿克苏市",
      "level": 3
    },
    {
      "code": "652922",
      "prov": "65",
      "city": "29",
      "dist": "22",
      "name": "温宿县",
      "level": 3
    },
    {
      "code": "652923",
      "prov": "65",
      "city": "29",
      "dist": "23",
      "name": "库车县",
      "level": 3
    },
    {
      "code": "652924",
      "prov": "65",
      "city": "29",
      "dist": "24",
      "name": "沙雅县",
      "level": 3
    },
    {
      "code": "652925",
      "prov": "65",
      "city": "29",
      "dist": "25",
      "name": "新和县",
      "level": 3
    },
    {
      "code": "652926",
      "prov": "65",
      "city": "29",
      "dist": "26",
      "name": "拜城县",
      "level": 3
    },
    {
      "code": "652927",
      "prov": "65",
      "city": "29",
      "dist": "27",
      "name": "乌什县",
      "level": 3
    },
    {
      "code": "652928",
      "prov": "65",
      "city": "29",
      "dist": "28",
      "name": "阿瓦提县",
      "level": 3
    },
    {
      "code": "652929",
      "prov": "65",
      "city": "29",
      "dist": "29",
      "name": "柯坪县",
      "level": 3
    },
    {
      "code": "653000",
      "prov": "65",
      "city": "30",
      "dist": "00",
      "name": "克孜勒苏柯尔克孜自治州",
      "level": 2
    },
    {
      "code": "653001",
      "prov": "65",
      "city": "30",
      "dist": "01",
      "name": "阿图什市",
      "level": 3
    },
    {
      "code": "653022",
      "prov": "65",
      "city": "30",
      "dist": "22",
      "name": "阿克陶县",
      "level": 3
    },
    {
      "code": "653023",
      "prov": "65",
      "city": "30",
      "dist": "23",
      "name": "阿合奇县",
      "level": 3
    },
    {
      "code": "653024",
      "prov": "65",
      "city": "30",
      "dist": "24",
      "name": "乌恰县",
      "level": 3
    },
    {
      "code": "653100",
      "prov": "65",
      "city": "31",
      "dist": "00",
      "name": "喀什地区",
      "level": 2
    },
    {
      "code": "653101",
      "prov": "65",
      "city": "31",
      "dist": "01",
      "name": "喀什市",
      "level": 3
    },
    {
      "code": "653121",
      "prov": "65",
      "city": "31",
      "dist": "21",
      "name": "疏附县",
      "level": 3
    },
    {
      "code": "653122",
      "prov": "65",
      "city": "31",
      "dist": "22",
      "name": "疏勒县",
      "level": 3
    },
    {
      "code": "653123",
      "prov": "65",
      "city": "31",
      "dist": "23",
      "name": "英吉沙县",
      "level": 3
    },
    {
      "code": "653124",
      "prov": "65",
      "city": "31",
      "dist": "24",
      "name": "泽普县",
      "level": 3
    },
    {
      "code": "653125",
      "prov": "65",
      "city": "31",
      "dist": "25",
      "name": "莎车县",
      "level": 3
    },
    {
      "code": "653126",
      "prov": "65",
      "city": "31",
      "dist": "26",
      "name": "叶城县",
      "level": 3
    },
    {
      "code": "653127",
      "prov": "65",
      "city": "31",
      "dist": "27",
      "name": "麦盖提县",
      "level": 3
    },
    {
      "code": "653128",
      "prov": "65",
      "city": "31",
      "dist": "28",
      "name": "岳普湖县",
      "level": 3
    },
    {
      "code": "653129",
      "prov": "65",
      "city": "31",
      "dist": "29",
      "name": "伽师县",
      "level": 3
    },
    {
      "code": "653130",
      "prov": "65",
      "city": "31",
      "dist": "30",
      "name": "巴楚县",
      "level": 3
    },
    {
      "code": "653131",
      "prov": "65",
      "city": "31",
      "dist": "31",
      "name": "塔什库尔干塔吉克自治县",
      "level": 3
    },
    {
      "code": "653200",
      "prov": "65",
      "city": "32",
      "dist": "00",
      "name": "和田地区",
      "level": 2
    },
    {
      "code": "653201",
      "prov": "65",
      "city": "32",
      "dist": "01",
      "name": "和田市",
      "level": 3
    },
    {
      "code": "653221",
      "prov": "65",
      "city": "32",
      "dist": "21",
      "name": "和田县",
      "level": 3
    },
    {
      "code": "653222",
      "prov": "65",
      "city": "32",
      "dist": "22",
      "name": "墨玉县",
      "level": 3
    },
    {
      "code": "653223",
      "prov": "65",
      "city": "32",
      "dist": "23",
      "name": "皮山县",
      "level": 3
    },
    {
      "code": "653224",
      "prov": "65",
      "city": "32",
      "dist": "24",
      "name": "洛浦县",
      "level": 3
    },
    {
      "code": "653225",
      "prov": "65",
      "city": "32",
      "dist": "25",
      "name": "策勒县",
      "level": 3
    },
    {
      "code": "653226",
      "prov": "65",
      "city": "32",
      "dist": "26",
      "name": "于田县",
      "level": 3
    },
    {
      "code": "653227",
      "prov": "65",
      "city": "32",
      "dist": "27",
      "name": "民丰县",
      "level": 3
    },
    {
      "code": "654000",
      "prov": "65",
      "city": "40",
      "dist": "00",
      "name": "伊犁哈萨克自治州",
      "level": 2
    },
    {
      "code": "654002",
      "prov": "65",
      "city": "40",
      "dist": "02",
      "name": "伊宁市",
      "level": 3
    },
    {
      "code": "654003",
      "prov": "65",
      "city": "40",
      "dist": "03",
      "name": "奎屯市",
      "level": 3
    },
    {
      "code": "654021",
      "prov": "65",
      "city": "40",
      "dist": "21",
      "name": "伊宁县",
      "level": 3
    },
    {
      "code": "654022",
      "prov": "65",
      "city": "40",
      "dist": "22",
      "name": "察布查尔锡伯自治县",
      "level": 3
    },
    {
      "code": "654023",
      "prov": "65",
      "city": "40",
      "dist": "23",
      "name": "霍城县",
      "level": 3
    },
    {
      "code": "654024",
      "prov": "65",
      "city": "40",
      "dist": "24",
      "name": "巩留县",
      "level": 3
    },
    {
      "code": "654025",
      "prov": "65",
      "city": "40",
      "dist": "25",
      "name": "新源县",
      "level": 3
    },
    {
      "code": "654026",
      "prov": "65",
      "city": "40",
      "dist": "26",
      "name": "昭苏县",
      "level": 3
    },
    {
      "code": "654027",
      "prov": "65",
      "city": "40",
      "dist": "27",
      "name": "特克斯县",
      "level": 3
    },
    {
      "code": "654028",
      "prov": "65",
      "city": "40",
      "dist": "28",
      "name": "尼勒克县",
      "level": 3
    },
    {
      "code": "654200",
      "prov": "65",
      "city": "42",
      "dist": "00",
      "name": "塔城地区",
      "level": 2
    },
    {
      "code": "654201",
      "prov": "65",
      "city": "42",
      "dist": "01",
      "name": "塔城市",
      "level": 3
    },
    {
      "code": "654202",
      "prov": "65",
      "city": "42",
      "dist": "02",
      "name": "乌苏市",
      "level": 3
    },
    {
      "code": "654221",
      "prov": "65",
      "city": "42",
      "dist": "21",
      "name": "额敏县",
      "level": 3
    },
    {
      "code": "654223",
      "prov": "65",
      "city": "42",
      "dist": "23",
      "name": "沙湾县",
      "level": 3
    },
    {
      "code": "654224",
      "prov": "65",
      "city": "42",
      "dist": "24",
      "name": "托里县",
      "level": 3
    },
    {
      "code": "654225",
      "prov": "65",
      "city": "42",
      "dist": "25",
      "name": "裕民县",
      "level": 3
    },
    {
      "code": "654226",
      "prov": "65",
      "city": "42",
      "dist": "26",
      "name": "和布克赛尔蒙古自治县",
      "level": 3
    },
    {
      "code": "654300",
      "prov": "65",
      "city": "43",
      "dist": "00",
      "name": "阿勒泰地区",
      "level": 2
    },
    {
      "code": "654301",
      "prov": "65",
      "city": "43",
      "dist": "01",
      "name": "阿勒泰市",
      "level": 3
    },
    {
      "code": "654321",
      "prov": "65",
      "city": "43",
      "dist": "21",
      "name": "布尔津县",
      "level": 3
    },
    {
      "code": "654322",
      "prov": "65",
      "city": "43",
      "dist": "22",
      "name": "富蕴县",
      "level": 3
    },
    {
      "code": "654323",
      "prov": "65",
      "city": "43",
      "dist": "23",
      "name": "福海县",
      "level": 3
    },
    {
      "code": "654324",
      "prov": "65",
      "city": "43",
      "dist": "24",
      "name": "哈巴河县",
      "level": 3
    },
    {
      "code": "654325",
      "prov": "65",
      "city": "43",
      "dist": "25",
      "name": "青河县",
      "level": 3
    },
    {
      "code": "654326",
      "prov": "65",
      "city": "43",
      "dist": "26",
      "name": "吉木乃县",
      "level": 3
    },
    {
      "code": "659000",
      "prov": "65",
      "city": "90",
      "dist": "00",
      "name": "自治区直辖县级行政区划",
      "level": 2
    },
    {
      "code": "659001",
      "prov": "65",
      "city": "90",
      "dist": "01",
      "name": "石河子市",
      "level": 3
    },
    {
      "code": "659002",
      "prov": "65",
      "city": "90",
      "dist": "02",
      "name": "阿拉尔市",
      "level": 3
    },
    {
      "code": "659003",
      "prov": "65",
      "city": "90",
      "dist": "03",
      "name": "图木舒克市",
      "level": 3
    },
    {
      "code": "659004",
      "prov": "65",
      "city": "90",
      "dist": "04",
      "name": "五家渠市",
      "level": 3
    },
    {
      "code": "710000",
      "prov": "71",
      "city": "00",
      "dist": "00",
      "name": "台湾省",
      "level": 1
    },
    {
      "code": "810000",
      "prov": "81",
      "city": "00",
      "dist": "00",
      "name": "香港特别行政区",
      "level": 1
    },
    {
      "code": "820000",
      "prov": "82",
      "city": "00",
      "dist": "00",
      "name": "澳门特别行政区",
      "level": 1
    }
  ]
  let getProvs = function () {
    log(`getProvs run`)
    return __region.filter(item => item.level === 1)
  }
  let getCities = function () {
    log(`getCities run`)
    return __region.filter(item => item.level === 2)
  }

  let getDists = function () {
    log(`getDists run`)
    return __region.filter(item => item.level === 3)
  }
  return {
    provs: getProvs(),
    cities: getCities(),
    dists: getDists()
  }
}()