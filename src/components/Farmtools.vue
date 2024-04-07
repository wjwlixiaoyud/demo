<template>
  <div class="imgset">
    <div class="card">
      <div class="imgbx">
        <img src="../assets/001.jpg" alt="" />
      </div>
      <div class="content">
        <div class="detalis">
          <h2>原始农业时代为初始阶段<br /><span>大部分工具皆为石器</span></h2>
          <div class="data">
            <h3>170万年前<br /><span>Year</span></h3>
            <h3>————<br /><span>Post</span></h3>
            <h3>公元前21世纪<br /><span>Year</span></h3>
          </div>
          <div class="actionBtn">
            <button>Follow</button>
            <button @click="open">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="imgbx">
        <img src="../assets/002.jpg" alt="" />
      </div>
      <div class="content">
        <div class="detalis">
          <h2>夏商西周时期初步发展<br /><span>拥有木质农具以及青铜器</span></h2>
          <div class="data">
            <h3>公元前21世纪<br /><span>Year</span></h3>
            <h3>————<br /><span>Post</span></h3>
            <h3>公元前770<br /><span>Year</span></h3>
          </div>
          <div class="actionBtn">
            <button>Follow</button>
            <button @click="open1">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="imgbx">
        <img src="../assets/003.jpg" alt="" />
      </div>
      <div class="content">
        <div class="detalis">
          <h2>春秋战国时期<br /><span>划时代的铁质农具出现</span></h2>
          <div class="data">
            <h3>公元前770<br /><span>Year</span></h3>
            <h3>————<br /><span>Post</span></h3>
            <h3>公元前221<br /><span>Year</span></h3>
          </div>
          <div class="actionBtn">
            <button>Follow</button>
            <button @click="open2">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="imgbx">
        <img src="../assets/004.jpg" alt="" />
      </div>
      <div class="content">
        <div class="detalis">
          <h2>
            秦汉至隋、唐、五代时期<br /><span
              >铁质农具进一步发展，铁犁牛耕广泛应用</span
            >
          </h2>
          <div class="data">
            <h3>公元277<br /><span>Year</span></h3>
            <h3>————<br /><span>Post</span></h3>
            <h3>公元299<br /><span>Year</span></h3>
          </div>
          <div class="actionBtn">
            <button>Follow</button>
            <button @click="open3">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="imgbx">
        <img src="../assets/005.jpg" alt="" />
      </div>
      <div class="content">
        <div class="detalis">
          <h2>
            秦汉至隋、唐、五代时期<br /><span
              >铁质农具进一步发展，铁犁牛耕广泛应用</span
            >
          </h2>
          <div class="data">
            <h3>公元277<br /><span>Year</span></h3>
            <h3>————<br /><span>Post</span></h3>
            <h3>公元299<br /><span>Year</span></h3>
          </div>
          <div class="actionBtn">
            <button>Follow</button>
            <button @click="open4">Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="imgbx">
        <img src="../assets/006.jpg" alt="" />
      </div>
      <div class="content">
        <div class="detalis">
          <h2>现代21世纪时期<br /><span>科技蓬勃发展，智能农业形成</span></h2>
          <div class="data">
            <h3>公元277<br /><span>Year</span></h3>
            <h3>————<br /><span>Post</span></h3>
            <h3>公元299<br /><span>Year</span></h3>
          </div>
          <div class="actionBtn">
            <button>Follow</button>
            <button @click="open5">Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert(
        "原始农业时代，正是农业发展的初始阶段，由于耕作方法、耕种工具仍未成熟，这个时候的农业并不发达，采集、狩猎仍占主要地位。后来，为获取更多的食物来源，满足生存需要，先民们除了采集、狩猎，也开始进行耕作种植。这个时期的耕作方法为刀耕火种，采用的工具是最开始采集狩猎的工具，后来渐渐用木棒、石块、兽骨等材质陆续创造出了一些最原始的农具：他们用石斧或砍斫器砍倒树木，放火烧掉；再用尖木棒松土，播种；收获时，用石刀来掐穗。慢慢地便发展为出现最早的农具:石斧、石刀、砍斫器、石镰等。",
        "原始农业时代",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        }
      );
    },
    open1() {
      this.$alert(
        "到了夏代，农业工具相较最开始时，逐渐完善并有初步发展。商朝时期，青铜铸造技术发达，也出现有青铜农具，但其主要是用于铸造兵器、祭祀用的礼器。又因为青铜器是权力和身份的象征,仅供王公贵族使用,普通老百姓是不允许使用的。同时青铜器冶炼技术复杂，且生产成本较高，硬度较低，不适于制作农具，所以商周时期的青铜农具数量较少，仅在极少部分地区出现。这个时期，石斧、石刀、石铲被更广泛使用，同时还出现了耒耜。——————耒耜是神农氏发明的一种农具，木质制成，由“耒”和“耜”两部分组成，耒是耒耜的柄, 耒是一根尖头木棍加上一段短横梁，耜是耒耜下端的起土部分。使用时把尖头插入土壤, 然后用脚踩横梁使木棍深入, 便可轻松挖土铲土，提高了翻整土地、播种庄稼的效率。",
        "夏商西周时期",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        }
      );
    },
    open2() {
      this.$alert(
        "春秋战国时期，冶铁业兴起，铁制农具开始出现并逐渐代替石制、木制农具，成为农业生产的主要工具，这个时期主要的农业生产方式为铁犁牛耕，铁农具和牛耕被投入到农业生产中。当时的铁农具种类有锸、锄、耙、镢、犁等。铁制农具极大地推动了农业生产力的发展，促进社会进步，在我国农业科技史和农业生产工具发展史上引起了巨大变革，同时加速了奴隶制社会的瓦解，是一种划时代的农业工具。——————该图为铁耙为整地农具，主要作用是除杂草、碎石块、平高低、掩肥料，以便播种，利于农作物的生长。耙主要用于起土破土之时，可横向安装手柄。根据齿的多少，耙可分为二齿、三齿以及五齿耙三种。耙的大量使用正是精耕细作技术发展的反映。",
        "春秋战国时期",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        }
      );
    },
    open3() {
      this.$alert(
        "秦汉以来，冶铁业进一步发展，铁农具种类更加丰富完善。在当时，铁犁牛耕的生产方式被进一步广泛运用，西汉时期，政府曾在全国设立49处“铁官”管理冶铁生产。由于冶铁和炼钢技术的进步、生产率的提高，既提高了铁器的质量，也降低了铁器的成本，因而汉代的铁农具就非常普及。在当时，除西南部分地区，铁农具的使用已在全国大范围普及。铁农具的广泛使用是汉代农业生产力提高的重要标志之一。而在后来，汉代出现的耧车、唐代出现的曲辕犁，更是这一时期农具上的重要发明。——————耧车是汉代农具上的一新发明，耧车又称耧犁，由耧斗和耧足组成，由人或牲畜牵引，下端有3个耧脚，即3个开沟器，中间装有盛贮种子的漏斗。在播种时用牛拉车，即可边开沟边播种，其工作原理相当于播种机，只需一人一牲畜即可操作。耧车对提高播种质量与播种速度，有着重要作用。这一时期播种耧车的出现，是农业生产上的一个重大进步。",
        "秦汉至隋、唐、五代时期",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        }
      );
    },
    open4() {
      this.$alert(
        "秦汉以来，冶铁业进一步发展，铁农具种类更加丰富完善。在当时，铁犁牛耕的生产方式被进一步广泛运用，西汉时期，政府曾在全国设立49处“铁官”管理冶铁生产。由于冶铁和炼钢技术的进步、生产率的提高，既提高了铁器的质量，也降低了铁器的成本，因而汉代的铁农具就非常普及。在当时，除西南部分地区，铁农具的使用已在全国大范围普及。铁农具的广泛使用是汉代农业生产力提高的重要标志之一。而在后来，汉代出现的耧车、唐代出现的曲辕犁，更是这一时期农具上的重要发明。——————该图为曲辕犁，早在汉代，耕犁便已基本定形，但汉代的犁是长直辕犁，耕地时回头转弯不够灵活，起土费力，效率也不高。唐代后期，劳动人民发明了曲辕犁，构造上，曲辕犁将以往耕犁由直辕形式变成了曲辕形式，同时增加了犁壁、犁评、犁盘。曲辕的形式改变了耕作者的用力方式，劳作时更加省力；犁壁位于犁铲上方，可用于翻土；犁评位于犁箭上方，通过调整犁箭高度来调整耕田的深度；犁盘位于犁最前端，用于拉接牛轭，便于牛转身，可省畜力。同时曲辕犁设计精巧，辕和犁梢的曲线使造型富有变化，给人以动态感，具有一定的美感。曲辕犁的发明提高了耕作效率，促进农业生产，也反映了中华民族独特的创造力。",
        "秦汉至隋、唐、五代时期",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        }
      );
    },
    open5() {
      this.$alert(
        "现代农业是在现代工业和现代科学技术基础上发展起来的农业，是萌发于资本主义工业化时期，而在第二次世界大战以后才形成的发达农业。其主要特征是广泛地运用现代科学技术，由顺应自然变为自觉地利用自然和改造自然，由凭借传统经验变为依靠科学，成为科学化的农业，使其建立在植物学、动物学、化学、物理学等科学高度发展的基础上；把工业部门生产的大量物质和能量投入到农业生产中，以换取大量农产品，成为工业化的农业；农业生产走上了区域化、专业化的道路，由自然经济变为高度发达的商品经济，成为商品化、社会化的农业。农具大部分已经由科学产物替代",
        "现代21世纪时期",
        {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        }
      );
    },
  },
};
</script>

<style>
.imgset {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  /* background: linear-gradient(45deg, #61fbe1, #5affb2); */
  background-image: url(../assets/background3.jpg);
}
.card {
  position: relative;
  width: 350px;
  opacity: 1;
  height: 190px;
  background: rgb(35, 224, 209);
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(36, 51, 32, 0.15);
  transition: 0.5s;
}
.card:hover {
  height: 450px;
}
.imgbx {
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: 0.5s;
}
.card:hover .imgbx {
  width: 250px;
  height: 250px;
}
.imgbx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .content {
  /* position: absolute; */
  border-radius: 20px;
  /* background-image: url(../assets/background3.jpg); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
.card .content .detalis {
  padding: 30px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(150px);
}
.card:hover .content .detalis {
  transform: translateY(0px);
}
.card .content .detalis h2 {
  font-size: 1.25em;
  font-weight: 600;
  color: #555;
  line-height: 1em;
}
.card .content .detalis h2 span {
  font-size: 0.75em;
  font-weight: 500;
  opacity: 0.5;
}
.card .content .detalis .data {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.card .content .detalis .data h3 {
  font-size: 1em;
  color: #555;
  line-height: 1.2em;
  font-weight: 600;
}
.card .content .detalis .data h3 span {
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.5;
}
.card .content .detalis .actionBtn {
  display: flex;
  justify-content: space-between;
}
.card .content .detalis .actionBtn button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  background: #ff5f95;
  color: #fff;
  cursor: pointer;
}
.card .content .detalis .actionBtn button:nth-child(2) {
  border: 1px solid #999;
  color: #999;
  background: #fff;
}
</style>
