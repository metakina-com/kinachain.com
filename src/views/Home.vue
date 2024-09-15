<template>
  <div class="homebox">
    <div class="navbox flex">
      <img src="../assets/image/logo.png" alt="" />
      <div
        class="nav"
        v-for="(item, i) in navlist"
        :key="i"
        @click="navcli(i)"
        :class="navindex == i ? 'navActive' : ''"
      >
        <div>{{ item }}</div>
      </div>
      <!--  <a
        href="javascript:void(0)"
        onclick="window.open('https://tb.53kf.com/code/client/0f68fd2124d63f56f91fb63080800f748/1','','height=500,width=650,top=280,left=600,toolbar=no,menubar=yes,scrollbars=yes,resizable=yes,location=no,status=no')"
      > -->
      <div
        @click="opencopy"
        style="color: #fff; border-radius: 4px"
        class="btnsty cursor"
      >
        合作咨询
      </div>
      <!-- </a
      > -->
    </div>
    <div class="service" v-if="!isshow">
      <img src="../assets/image/close.png" alt="" @click="close" />
      <div class="erimg">
        <img src="../assets/image/er.png" alt="" />
        <div>欢迎添加客服微信</div>
      </div>
      <div class="serbtn">
        <!-- <div class="flex btnsty">
          <img src="../assets/image/ser1.png" alt="" />
           <a
            href="javascript:void(0)"
            onclick="window.open('https://tb.53kf.com/code/client/0f68fd2124d63f56f91fb63080800f748/1','','height=500,width=650,top=280,left=600,toolbar=no,menubar=yes,scrollbars=yes,resizable=yes,location=no,status=no')"
          >
            <div style="color: #fff">在线咨询</div></a
          >
        </div> -->
        <div class="flex btnsty">
          <img src="../assets/image/ser2.png" alt="" />
          <!--  <a
            href="javascript:void(0)"
            onclick="window.open('https://tb.53kf.com/code/client/0f68fd2124d63f56f91fb63080800f748/1','','height=500,width=650,top=280,left=600,toolbar=no,menubar=yes,scrollbars=yes,resizable=yes,location=no,status=no')"
          > -->
          <div @click="opencopy" class="cursor" style="color: #fff">
            电话咨询
          </div>
          <!-- </a
          > -->
        </div>
      </div>
    </div>
    <div class="firstbox" id="nav0">
      <el-carousel
        height="992px"
        :interval="5000"
        indicator-position="none"
        arrow="never"
      >
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="item" alt="" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
      <div class="carnum flex">
        <div v-for="(item, i) in carnumlist" :key="i">
          <div class="nums">{{ item.num }}</div>
          <div>{{ item.numtext }}</div>
        </div>
      </div>
    </div>
    <div class="kinapin" id="nav1">
      <div>基纳链产品与服务</div>
      <div class="flex kinabox">
        <div
          v-for="(item, i) in kinaList"
          :key="i"
          class="kinaitem"
          :class="i > 5 ? 'heigntkinaitem' : ''"
        >
          <div class="flex">
            <img :src="item.icon" alt="" />
            <div>{{ item.ktit }}</div>
          </div>
          <div>{{ item.text }}</div>
        </div>
      </div>
      <div class="btn flex btnsty" style="margin-top: 30px">
        <div @click="opencopy" class="cursor" style="color: #fff">
          定制您的解决方案
        </div>

        <img src="../assets/image/btnimg.png" alt="" />
      </div>
    </div>
    <div class="browser">
      <div>基纳链浏览器</div>
      <div>您可以通过浏览器工具快速查询项目上链信息，交易流转记录。</div>
      <div>
        查询钱包地址，了解自己或者别人钱包地址下有哪些数字藏品，交易记录，空投到账等。
      </div>
      <div>
        查询合约地址，了解项目的基本信息，交易记录、持有人数、判断项目的风险与价值等。
      </div>
      <div class="flex">
        <img src="../assets/image/search.png" alt="" />
        <el-input
          @change="changeinput"
          placeholder="通过地址，区块高度或交易哈希搜索"
          v-model="input"
        >
        </el-input>
      </div>
    </div>
    <div class="whybox" id="nav2">
      <div class="whytit">为什么选择我们？</div>
      <div class="flex">
        <div class="leftwhy">
          <div>新一代共识协议</div>
          <div>
            该共识协议通过“异步”特性克服了恶意节点容错的挑战，即时序挑战。许多形式的拜占庭容错，假设在达成共识时存在消息延迟的最大阈值，但基纳链新一代共识协议消除了这种假设，允许网络的诚实节点保证公平、安全地就一组交易的时间和顺序达成一致。
          </div>
        </div>
        <div class="rightwhy flex">
          <div v-for="(item, i) in whyList" :key="i" class="whyitem">
            <div>{{ item.wtit }}</div>
            <div>{{ item.wtext }}</div>
            <img :src="item.wbg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="territory" id="nav3">
      <div class="terrtit">使用基纳链，拓展您的商业版图</div>
      <div class="terrbox flex">
        <div v-for="(item, i) in terrList" :key="i" class="territem">
          <img :src="item.timg" alt="" />
          <div>{{ item.ttit }}</div>
          <div>{{ item.ttext }}</div>
        </div>
      </div>
    </div>
    <div class="web3">
      <div>web3.0项目发行与出海全套解决方案</div>
      <div>基纳链通过智能合约与新一代共识协议，助力企业成功。</div>
      <div class="flex">
        <div v-for="(item, i) in webList" :key="i" class="webitem">
          <img :src="item.wimg" alt="" />
          <div>{{ item.wtit }}</div>
        </div>
      </div>
    </div>
    <div class="numcoll">
      <div>热门数字藏品</div>
      <div>
        <el-carousel height="500px" :interval="5000" arrow="never">
          <el-carousel-item v-for="item in carouselList2" :key="item">
            <img :src="item" alt="" width="100%" height="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="appbos flex">
        <div v-for="(item, i) in appminlist" :key="i" class="appitem">
          <img :src="item.appminimg" alt="" />
          <div class="flex appbtom">
            <div class="apptit">{{ item.appmintit }}</div>
            <!-- <div class="flex liaobtn">
              <div>了解详情</div>
              <img src="../assets/image/detailsicon.png" alt="" />
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="btn flex">
        <div>更多藏品</div>
        <img src="../assets/image/btnimg.png" alt="" />
      </div> -->
    </div>
    <div class="plan" id="nav4">
      <div>精选案例</div>
      <div class="flex plantitbox">
        <div
          v-for="(item, i) in plantit"
          :key="i"
          @click="plancli(i)"
          :class="planindex == i ? 'planActive' : ''"
        >
          {{ item }}
        </div>
      </div>
      <div class="plancontbox flex" v-if="planindex == 0">
        <div v-for="(item, i) in planList1" :key="i" class="planitem flex">
          <img :src="item.pimg" alt="" />
          <div>{{ item.ptit }}</div>
          <img :src="item.ticon" alt="" />
        </div>
      </div>
      <div class="plancontbox2 flex" v-if="planindex == 1">
        <img src="../assets/image/p20.png" alt="" />
        <img src="../assets/image/p21.png" alt="" />
        <img src="../assets/image/p22.png" alt="" />
      </div>
      <div class="plancontbox3 flex" v-if="planindex == 2">
        <div class="wenbao">
          <img src="../assets/image/p30.png" alt="" />
          <div>山东文保（芾藏）</div>
        </div>
        <img src="../assets/image/p31.png" alt="" />
        <img src="../assets/image/p32.png" alt="" />
        <img src="../assets/image/p33.png" alt="" />
      </div>
    </div>
    <div class="success">
      <div>您离成功只差3步</div>
      <div class="flex">
        <img src="../assets/image/s1.png" alt="" />
        <div class="numbox flex" style="margin-left: -40px">
          <div class="rednum">01</div>
          <div>了解您的行业、用户需求和您的诉求</div>
        </div>
      </div>
      <div class="flex">
        <div class="numbox flex" style="margin-right: -40px">
          <div class="rednum">02</div>
          <div>制定解决方案供您选择</div>
        </div>
        <img src="../assets/image/s2.png" alt="" />
      </div>
      <div class="flex">
        <img src="../assets/image/s3.png" alt="" />
        <div class="numbox flex" style="margin-left: -40px">
          <div class="rednum">03</div>
          <div>开发/配置完成，推向市场</div>
        </div>
      </div>
    </div>
    <div class="bottbox">
      <div>
        <div>有任何区块链相关的想法或疑问</div>
        <div>均可联系我们</div>
        <div class="btn flex btnsty" style="margin-top: 75px">
          <div @click="opencopy" class="cursor" style="color: #fff">
            免费咨询
          </div>
          <img src="../assets/image/btnimg.png" alt="" />
        </div>
      </div>
      <div class="metakina">
        <div @click="opennew">
          Copyright © 2013-2022 www.metakina.com. All Rights Reserved
          西安西西弗斯网络科技有限公司版权所有 陕ICP备2020017675号
        </div>
        <div>增值电信业务许可证号 区块链信息服务备案号</div>
      </div>
    </div>
    <el-dialog title="咨询电话" :visible.sync="dialogVisible" width="30%">
      <span>13709298952</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          class="tag-read"
          data-clipboard-text="13709298952"
          @click="copy"
          >复 制</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  name: "Home",
  data() {
    return {
      dialogVisible: false,
      isshow: false,
      navlist: ["首页", "产品与服务", "产品亮点", "市场拓展", "精选案例"],
      navindex: 0,
      carouselList: [require("../assets/image/n1.png")],
      carouselList2: [require("../assets/image/num1.png")],
      carnumlist: [
        {
          num: "100,000+",
          numtext: "服务用户",
        },
        {
          num: "200+",
          numtext: "合作企业与商家",
        },
        {
          num: "15,000+",
          numtext: "上架藏品",
        },
        {
          num: "260,000+",
          numtext: "总交易笔数",
        },
      ],
      kinaList: [
        {
          icon: require("../assets/image/k1.png"),
          ktit: "元话数藏",
          text: "数字藏品电商系统，商家快速搭建数字藏品平台的SaaS工具。",
        },
        {
          icon: require("../assets/image/k2.png"),
          ktit: "基纳钱包",
          text: "已进行合法设置，是企业与商家推广和留存用户的有效工具。",
        },
        {
          icon: require("../assets/image/k3.png"),
          ktit: "供应链管理",
          text: "将哈希二维码存在防篡改分类账，实现快速、透明、高效的数据验证。",
        },
        {
          icon: require("../assets/image/k4.png"),
          ktit: "基纳搜索引擎",
          text: "为商家提供免费与付费宣传，助力客户商业化与品牌传播。",
        },
        {
          icon: require("../assets/image/k5.png"),
          ktit: "基纳浏览器",
          text: "通过数据可视化，为用户提供360°全部交易行为解析。",
        },
        {
          icon: require("../assets/image/k6.png"),
          ktit: "金融与财务解决方案",
          text: "通过提供区块链组网与异构链互操作，提升效率与透明度，降低成本。",
        },
        {
          icon: require("../assets/image/k7.png"),
          ktit: "工业互联网解决方案",
          text: "产业节点数字化，可为监管部门提供决策数字依据；通过实现跨越性信息共享，最终达到生命周期管理、质量追溯、供应链优化。",
        },
        {
          icon: require("../assets/image/k8.png"),
          ktit: "政务区块链支撑平台",
          text: "为政务提供多方协作、真实可信、数据资产化的基础设施，结合业务形成成熟、有价值的解决方案。",
        },
        {
          icon: require("../assets/image/k9.png"),
          ktit: "区块链游戏 / 元宇宙",
          text: "符合国家法律法规，十大基本玩法，几十种衍生玩法，与数字藏品结合产生更大效益。",
        },
      ],
      input: "",
      whyList: [
        {
          wtit: "零gas费",
          wtext:
            "新一代共识协议提升了交易速度和效率，可实现超低Gas费。现阶段，新用户GAS全免！",
          wbg: require("../assets/image/22.png"),
        },
        {
          wtit: "安全",
          wtext:
            "基纳链验证节点全部来自国内，由发起方和服务商共同组建，受监管部门监督。",
          wbg: require("../assets/image/23.png"),
        },
        {
          wtit: "高并发承载",
          wtext:
            "通过分布式节点，轻松实现每秒数千笔交易处理。技术迭代升级后，每秒TPS可达20万+。",
          wbg: require("../assets/image/24.png"),
        },
        {
          wtit: "高扩展",
          wtext:
            "根据企业或商家需求，基于区块链智能合约开发，助力企业Wbe3.0转型。",
          wbg: require("../assets/image/25.png"),
        },
      ],
      terrList: [
        {
          ttit: "WEB3.0应用开发",
          ttext:
            "依赖于区块链技术支撑，在基纳链可实现数藏平台、元宇宙、政企链改等项目快速搭建。",
          timg: require("../assets/image/42.png"),
        },
        {
          ttit: "集成ORACLES",
          ttext:
            "通过与Chainlink和Band Protocol合作，集成oracle。通过预言机打通链上和实体。",
          timg: require("../assets/image/43.png"),
        },
        {
          ttit: "API开发计划",
          ttext:
            "通过The Graph的subgraphs和Web3JS，您可创建浏览器和数据分析工具。",
          timg: require("../assets/image/44.png"),
        },
      ],
      webList: [
        {
          wimg: require("../assets/image/i1.png"),
          wtit: "数字藏品跨平台流转",
        },
        {
          wimg: require("../assets/image/i2.png"),
          wtit: "链接积分与通证体系",
        },
        {
          wimg: require("../assets/image/i3.png"),
          wtit: "元宇宙技术支持",
        },
      ],
      appminlist: [
        {
          appminimg: require("../assets/image/kai.jpg"),
          appmintit: "开元艺术",
        },
        {
          appminimg: require("../assets/image/chang.jpg"),
          appmintit: "长安元创",
        },
        {
          appminimg: require("../assets/image/tian.jpg"),
          appmintit: "天境",
        },
        {
          appminimg: require("../assets/image/kuai.jpg"),
          appmintit: "块说",
        },
      ],
      plantit: ["数藏平台", "元宇宙项目", "政企链改"],
      planindex: 0,
      planList1: [
        {
          pimg: require("../assets/image/p1.png"),
          ptit: "弘著数藏",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p2.png"),
          ptit: "开元艺术数藏",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p3.png"),
          ptit: "长安元创数藏",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p4.png"),
          ptit: "元藏数藏",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p5.png"),
          ptit: "千族艺术（5x）",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p6.png"),
          ptit: "宫匠数藏",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p7.png"),
          ptit: "时分艺术",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p8.png"),
          ptit: "艺钛数藏",
          ticon: require("../assets/image/btnimg.png"),
        },
        {
          pimg: require("../assets/image/p9.png"),
          ptit: "山东文保（芾藏）",
          ticon: require("../assets/image/btnimg.png"),
        },
      ],
    };
  },
  created() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.href = "https://kinachain.cn/m"; // H5链接
    }
  },
  methods: {
    opennew() {
      window.open("https://beian.miit.gov.cn/", "_blank");
    },
    copy() {
      var clipboard = new Clipboard(".tag-read");
      console.log(clipboard);
      clipboard.on("success", (e) => {
        this.$message({
          type: "success",
          message: "复制成功",
        });
        //  释放内存
        clipboard.destroy();
        this.dialogVisible = false;
      });
      clipboard.on("error", (e) => {
        // 不支持复制
        console.log("该浏览器不支持复制");
        // 释放内存
        clipboard.destroy();
      });
    },

    opencopy() {
      this.dialogVisible = true;
    },
    changeinput(value) {
      window.open("https://scan.metakina.com/", "_blank");
      this.input = "";
    },
    plancli(i) {
      this.planindex = i;
    },
    navcli(i) {
      this.navindex = i;
      this.$el.querySelector(`#nav${i}`).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "center", // start 上边框  center 中间  end 底部边框 与视窗顶部平齐
      });
    },
    close() {
      this.isshow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.dialog-footer {
  .el-button {
    height: 40px;
    width: 80px;
  }
}
.cursor {
  cursor: pointer;
}
.btnsty:hover {
  background-color: #ff0019 !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.btn {
  font-size: 20px;
  width: 323px;
  height: 62px;
  line-height: 62px;
  margin: 0 auto;
  background: #ff4859;
  border-radius: 31px 31px 31px 31px;
  text-align: center;
  color: #ffffff;
  img {
    width: 24px;
    margin-left: 14px;
  }
}
.service {
  position: fixed;
  // z-index: 99;
  right: 17px;
  top: 300px;
  width: 157px;
  height: 276px;
  background: #ff4859;
  border-radius: 10px;
  .erimg {
    margin: 0 auto;
    width: 139px;
    height: 166px;
    background: #ffffff;
    border-radius: 4px;
    font-size: 14px;
    color: #262626;
    text-align: center;
    img {
      width: 130px;
    }
  }
  .serbtn {
    color: #fff;
    width: 139px;
    height: 59px;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 6px;
    padding: 10px 11px;
    margin-top: 10px;
    img {
      width: 16px;
      margin-right: 10px;
    }
  }
  .serbtn > div {
    width: 116px;
    height: 27px;
    background: #ff4859;
    border-radius: 4px;
  }
  .serbtn > div:last-child {
    margin-top: 6px;
  }
}
.service > img {
  display: block;
  width: 22px;
  margin: 0 auto;
  margin-top: -15px;
}
.homebox {
  background-color: #f6f9fa;
}
.navbox {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 88px;
  color: #ffffff;
  z-index: 999;
  font-size: 18px;
  img {
    width: 183px;
    margin-right: 196px;
  }
  .nav {
    color: #ffffff;
    cursor: pointer;
    margin-right: 68px;
  }
  .navActive {
    color: #ff4859 !important;
  }
}
.navbox > :last-child {
  cursor: pointer;
  width: 120px;
  height: 36px;
  line-height: 36px;
  background: #ff4859;
  border-radius: 4px;
  text-align: center;
  margin-left: 58px;
}
.firstbox {
  position: relative;
  .carnum {
    width: 1230px;
    height: 181px;
    background: rgba(255, 255, 255, 0.8);
    margin-top: -100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 55px;
    z-index: 2;
    font-size: 18px;
    .nums {
      font-size: 50px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 3px;
    }
  }
  .carnum > div {
    text-align: center;
    flex: 1;
  }
}
.bottbox {
  width: 100%;
  text-align: center;
}
.bottbox > :first-child {
  padding-top: 188px;
  height: 660px;
  background-image: url("../assets/image/5213.png");
  background-size: 100% 100%;
  color: #ffffff;
  font-size: 56px;
  line-height: 88px;
}
.metakina {
  padding-top: 49px;
  color: #fff;
  font-size: 16px;
  height: 160px;
  background-color: #000;
  line-height: 42px;
  > :first-child {
    cursor: pointer;
  }
}
.kinapin > :first-child {
  font-size: 42px;
  color: #000000;
  margin-top: 71px;
  margin-bottom: 60px;
  text-align: center;
}
.kinabox {
  width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  .heigntkinaitem {
    height: 268px !important;
  }
  .kinaitem {
    width: 390px;
    min-height: 228px;
    background: #ffffff;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    border: 2px solid #e2e7f0;
    margin-bottom: 30px;
    padding: 40px 37px;
  }
  .kinaitem > :first-child {
    justify-content: flex-start;
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
    img {
      width: 44px;
      margin-right: 5px;
    }
  }
  .kinaitem > :last-child {
    font-size: 18px;
    color: #8696ae;
    line-height: 36px;
  }
}
.browser {
  height: 898px;
  background-image: url("../assets/image/browserbg.png");
  background-size: 100% 100%;
  margin-top: 79px;
  text-align: center;
  font-size: 28px;
  color: RGBA(250, 250, 250, 0.7);
  padding-top: 168px;
}
.browser > div:nth-child(1) {
  font-size: 66px;
  color: #ffffff;
  margin-bottom: 42px;
}
.browser > div:nth-child(2) {
  margin-bottom: 79px;
}
.browser > div:nth-child(4) {
  margin-top: 15px;
  margin-bottom: 132px;
}
.browser > :last-child {
  width: 1100px;
  height: 80px;
  border: 1px solid RGBA(250, 250, 250, 0.7);
  border-radius: 63px;
  margin: 0 auto;
  img {
    width: 34px;
    margin-right: 12px;
  }
  /deep/.el-input {
    width: 400px;
    max-width: 80%;
  }
  /deep/.el-input__inner {
    font-size: 20px;
    border: none;
    background-color: transparent;
    color: RGBA(250, 250, 250, 0.7);
  }
}
.whybox {
  margin-bottom: 153px;
  .whytit {
    font-size: 42px;
    color: #000000;
    margin-top: 114px;
    margin-bottom: 81px;
    text-align: center;
  }
  .leftwhy {
    width: 326px;
    height: 437px;
    background: #ff4859;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.12);
    padding: 39px 30px;
    color: #ffffff;
    div:nth-child(1) {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 31px;
    }
    div:nth-child(2) {
      font-size: 16px;
      line-height: 36px;
    }
  }
  .rightwhy {
    width: 876px;
    .whyitem {
      width: 412px;
      height: 206px;
      margin-left: 26px;
      padding: 30px 35px;
      color: #333333;
      font-size: 16px;
      line-height: 36px;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.12);
      div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 10px;
      }
      img {
        width: 412px;
        height: 206px;
        margin-top: -142px;
        margin-left: -35px;
      }
    }
    .whyitem:nth-child(1) {
      margin-bottom: 25px;
    }
    .whyitem:nth-child(2) {
      margin-bottom: 25px;
    }
  }
}
.territory {
  height: 960px;
  background-image: url("../assets/image/map.png");
  background-size: 100% 100%;
  color: #000;
  padding-top: 114px;
  .terrtit {
    text-align: center;
    font-size: 42px;
    margin-bottom: 90px;
  }
  .terrbox {
    .territem {
      width: 384px;
      height: 548px;
      background: #ffffff;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.12);
      border: 1px solid #e2e7f0;
      color: #000000;
      margin-right: 40px;
      img {
        width: 384px;
        height: 298px;
      }
      div:nth-child(2) {
        font-size: 30px;
        margin-top: 27px;
        margin-bottom: 12px;
        padding: 0 35px;
      }
      div:nth-child(3) {
        font-size: 20px;
        line-height: 42px;
        padding: 0 35px;
      }
    }
  }
  .terrbox > :last-child {
    margin-right: 0px;
  }
}
.web3 {
  height: 1044px;
  background-image: url("../assets/image/web.png");
  background-size: 100% 100%;
  color: #ffffff;
  padding-top: 224px;
  text-align: center;
  .webitem {
    width: 384px;
    height: 188px;
    background: #788ba4;
    opacity: 0.8;
    margin-right: 36px;
    font-size: 24px;
    img {
      width: 58px;
      margin-top: 42px;
      margin-bottom: 18px;
    }
  }
  .webitem:last-child {
    margin-right: 0px;
  }
}
.web3 > :nth-child(1) {
  font-size: 66px;
}
.web3 > :nth-child(2) {
  font-size: 28px;
  margin-top: 73px;
  margin-bottom: 234px;
}
.numcoll {
  width: 1231px;
  margin: 0 auto;
  .appbos {
    justify-content: space-between;
    margin-top: 37px;
    margin-bottom: 69px;
    .appitem {
      width: 286px;
      height: 356px;
      background: #ffffff;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.12);
      .appbtom {
        // justify-content: space-between;
        .apptit {
          font-size: 24px;
          color: #000000;
          margin-top: 17px;
          // margin-left: 20px;
        }
        .liaobtn {
          margin-top: 17px;
          color: #ff003b;
          width: 114px;
          height: 30px;
          border-radius: 17px;
          border: 1px solid #ff003b;
          margin-right: 20px;

          img {
            width: 24px;
          }
        }
      }
    }
    .appitem > img:first-child {
      width: 286px;
    }
  }
}
.numcoll > :nth-child(1) {
  font-size: 42px;
  margin-top: 104px;
  margin-bottom: 70px;
  color: #000000;
  text-align: center;
}
.plan {
  height: 666px;
  background-image: url("../assets/image/planbg.png");
  background-size: 100% 100%;
  padding-top: 87px;
  color: #fff;
  margin-top: 83px;
  .plantitbox {
    div {
      cursor: pointer;
      font-size: 30px;
      text-align: center;
      width: 400px;
      padding-bottom: 28px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
    .planActive {
      border-bottom: 5px solid #ff4859 !important;
    }
  }
  .plancontbox {
    width: 1200px;
    margin: 0 auto;
    justify-content: flex-start;
    margin-top: 50px;
    .planitem {
      width: 220px;
      height: 72px;
      background: #2c2e2f;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
      border-radius: 8px;
      margin-right: 25px;
      margin-bottom: 40px;
      font-size: 16px;
      img:nth-child(1) {
        width: 44px;
      }
      div:nth-child(2) {
        width: 130px;
        margin-left: 13px;
      }
      img:nth-child(3) {
        width: 14px;
      }
    }
    .planitem:nth-of-type(5n + 5) {
      margin-right: 0px;
    }
  }
  .plancontbox2 {
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 80px;
    img {
      width: 362px;
    }
  }
  .plancontbox3 {
    img {
      width: 232px;
      margin-left: 37px;
    }
    .wenbao {
      width: 400px;
      text-align: center;
      font-size: 20px;
      img {
        margin-left: 0px;
        margin-bottom: 20px;
        width: 141px;
      }
    }
  }
}
.plan > :first-child {
  text-align: center;
  font-size: 42px;
  margin-bottom: 50px;
}
.success > div {
  margin-bottom: 30px;
}
.success {
  color: #000000;
  margin-bottom: 110px;
  img {
    width: 691px;
  }
  .numbox {
    justify-content: flex-start;
    width: 580px;
    height: 182px;
    background: #ffffff;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    opacity: 0.99;
    text-align: center;
    z-index: 2;
    font-size: 22px;
    .rednum {
      color: #fff;
      line-height: 110px;
      width: 110px;
      height: 110px;
      background: #ff4859;
      border-radius: 10px;
      font-size: 72px;
      margin-left: 33px;
      margin-right: 22px;
    }
  }
}
.success > :first-child {
  text-align: center;
  font-size: 42px;
  margin-top: 94px;
  margin-bottom: 60px;
}
</style>