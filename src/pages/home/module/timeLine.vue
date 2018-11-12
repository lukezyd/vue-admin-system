<template>
	<div class="time-line">
		<div class="panel-body">
          <div class="text-center mbot30">
              <h3 class="timeline-title">本月大事记</h3>
          </div>
          <div class="timeline">
              <article class="timeline-item">
                  <div class="timeline-desk">
                      <div class="panel">
                          <div class="panel-body">
                              <span class="arrow"></span>
                              <span class="timeline-icon red"></span>
                              <span class="timeline-date">21:25 am</span>
                              <h1 class="red"> 10月 20日 | 周六</h1>
                              <p>网站访问量突破30000</p>
                          </div>
                      </div>
                  </div>
              </article>
              <article class="timeline-item alt">
                  <div class="timeline-desk">
                      <div class="panel">
                          <div class="panel-body">
                              <span class="arrow-alt"></span>
                              <span class="timeline-icon green"></span>
                              <span class="timeline-date">13:00 am</span>
                              <h1 class="green">10月 18日 | 周四</h1>
                              <p>引进<a >挪威猫</a> 200只。</span></p>
                          </div>
                      </div>
                  </div>
              </article>
              <article class="timeline-item">
                  <div class="timeline-desk">
                      <div class="panel">
                          <div class="panel-body">
                              <span class="arrow"></span>
                              <span class="timeline-icon blue"></span>
                              <span class="timeline-date">11:35 am</span>
                              <h1 class="blue">10月 10日 | 周三</h1>
                              <p>购买<a >猫粮</a> 800KG，新增 <span><a  class="blue">猫舍</a>110间。</span></p>
                          </div>
                      </div>
                  </div>
              </article>
              <article class="timeline-item alt">
                  <div class="timeline-desk">
                      <div class="panel">
                          <div class="panel-body">
                              <span class="arrow-alt"></span>
                              <span class="timeline-icon purple"></span>
                              <span class="timeline-date">08:20 pm</span>
                              <h1 class="purple">10月 12日 | 周五</h1>
                              <p>救助流浪猫60只。</p>
                              <div class="notification">
                                  <i class=" fa fa-exclamation-sign"></i> 具体信息请 <a >点击查看</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </article>
              <article class="timeline-item">
                  <div class="timeline-desk">
                      <div class="panel">
                          <div class="panel-body">
                              <span class="arrow"></span>
                              <span class="timeline-icon light-green"></span>
                              <span class="timeline-date">12:49 pm</span>
                              <h1 class="light-green">10月 7日 | 周日</h1>
                              <p><a >猫咪乐园</a> 正式成立啦。 </p>
                          </div>
                      </div>
                  </div>
              </article>
          </div>

          <div class="clearfix">&nbsp;</div>
      </div>
	</div>
</template>
<script>
	export default{
		
	};
</script>
<style>
.panel-body {
    padding: 15px;
}
.timeline {
    border-collapse: collapse;
    border-spacing: 0;
    display: table;
    position: relative;
    table-layout: fixed;
    width: 100%;
}
.timeline:before {
    background-color: #C7CBD6;
    bottom: 0px;
    content: "";
    left: 50%;
    position: absolute;
    top: 0;
    width: 2px;
    z-index: 0;
}

.timeline-title {
    color: #737373;
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 5px;
}

.t-info {
    color: #C8CCD7;
}

.timeline-item:before, .timeline-item.alt:after {
    content: "";
    display: block;
    width: 50%;
}

.timeline-item {
    display: table-row;
}

.timeline-desk {
    display: table-cell;
    vertical-align: top;
    width: 50%;
}

.timeline-desk h1 {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 5px;
}

.timeline-desk .panel {
    display: block;
    margin-left: 25px;
    position: relative;
    text-align: left;
    background: #F4F4F4;
}

.timeline-item .timeline-desk .arrow {
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    display: block;
    height: 0;
    left: -7px;
    position: absolute;
    top: 13px;
    width: 0;
}
.timeline-item .timeline-desk .arrow {
    border-right: 8px solid #F4F4F4 !important;
}

.timeline-item.alt .timeline-desk .arrow-alt {
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    display: block;
    height: 0;
    right: -7px;
    position: absolute;
    top: 13px;
    width: 0;
    left: auto;
}

.timeline-item.alt .timeline-desk .arrow-alt {
    border-left: 8px solid #F4F4F4 !important;
}

.timeline .timeline-icon {
    left: -30px;
    position: absolute;
    top: 15px;
}

.timeline .timeline-icon {
    background: #C7CBD6;
    box-shadow: 0 0 0 3px #C7CBD6;
}

.timeline-desk span a {
    text-transform: uppercase;
}

.timeline-desk h1.red, .timeline-desk span a.red {
    color: #EF6F66;
}

.timeline-desk h1.green, .timeline-desk span a.green  {
    color: #39B6AE;
}
.timeline-desk h1.blue, .timeline-desk span a.blue {
    color: #56C9F5;
}
.timeline-desk h1.purple, .timeline-desk span a.purple {
    color: #8074C6;
}
.timeline-desk h1.light-green, .timeline-desk span a.light-green {
    color: #A8D76F;
}

.timeline .timeline-icon.red {
    background: #EF6F66;
    box-shadow: 0 0 0 3px #EF6F66;
}

.timeline .timeline-icon.green {
    background: #39B6AE;
    box-shadow: 0 0 0 3px #39B6AE;
}

.timeline .timeline-icon.blue {
    background: #56C9F5;
    box-shadow: 0 0 0 3px #56C9F5;
}

.timeline .timeline-icon.purple {
    background: #8074C6;
    box-shadow: 0 0 0 3px #8074C6;
}

.timeline .timeline-icon.light-green {
    background: #A8D76F;
    box-shadow: 0 0 0 3px #A8D76F;
}

.timeline .timeline-icon {
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    display: block;
    height: 12px;
    width: 12px;
}

.timeline-item.alt .timeline-icon {
    left: auto;
    right: -32px;
}

.timeline .time-icon:before {
    font-size: 16px;
    margin-top: 5px;
}
.timeline .timeline-date {
    left: -200px;
    position: absolute;
    text-align: right;
    top: 12px;
    width: 150px;
}

.timeline-desk h5 span {
    color: #999999;
    display: block;
    font-size: 12px;
    margin-bottom: 4px;
}


.timeline-item.alt:before {
    display: none;
}
.timeline-item:before, .timeline-item.alt:after {
    content: "";
    display: block;
    width: 50%;
}

.timeline-desk p {
    font-size: 12px;
    margin-bottom: 0;
}

.timeline-desk a {
    color: #EF6F66;
}

.timeline-desk .panel {
    margin-bottom: 5px;
}

.timeline-desk .album {
    margin-top: 20px;
}

.timeline-desk .album a {
    margin-right: 5px;
    float: left;
}

.timeline-desk .notification {
    background: none repeat scroll 0 0 #FFFFFF;
    margin-top: 20px;
    padding: 8px;
}


.timeline-item.alt .panel {
    margin-left: 0;
    margin-right: 25px;
}

.timeline-item.alt .timeline-date {
    left: auto;
    right: -200px;
    text-align: left;
}

.mbot30 {
    margin-bottom: 30px;
}
</style>