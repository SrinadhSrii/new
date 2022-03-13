<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script>
function init(){
    var select = (e) =>document.querySelector(e);
    var selectAll = (e) =>document.querySelectorAll(e);
    var text = selectAll('.w1 .text')
    var text2 = selectAll('.w2 .text')
    var bv = select('.loaderbgtext .V')
    var bk = select('.loaderbgtext .K')
    var logo = select('.logo')
    var slogo = select('.loadertext')
    

    logoSize=getComputedStyle(logo).fontSize
    sigVSize=getComputedStyle(slogo).fontSize
    logoWidth=getComputedStyle(logo).width
    logoLeft= logo.getBoundingClientRect().left;
    logoTop= logo.getBoundingClientRect().top;

    var tl1=gsap.timeline({duration:1,paused:true})
        tl1.fromTo(bv,{
            y:'-120%',
            ease:'ease.in',
        },{
            y:'-10%'
        },'label')
        tl1.to(bv,{
            y:'0%',
            duration:1.2
        },'label2')
        tl1.fromTo(bk,{
            y:'100%',
            ease:'ease.in',
        },{
            y:'10%'
        },'label')
        tl1.to(bk,{
            y:'0%',
            duration:1.2
        },'label2')
        tl1.from('.w1 span,.w2 span',{
            y:'100px',
            opacity:0,
            ease:'back.out(3)',
            stagger:{
                amount:0.5,
                from:'start'
            }
        },'label-=0.1')
        tl1.to(bv,{
            y:'10%',
            duration:1.2
        },'label2-=0.01')
        tl1.to(bv,{
            y:'120%',
            ease:'ease.out'
        },'label4')
        tl1.to(bk,{
            y:'-10%',
            duration:1.2
        },'label2-=0.03')
        tl1.to(bk,{
            y:'-120%',
            ease:'ease.out'
        },'label4')
        tl1.to([text,text2],{
            letterSpacing:'-130px',
            x:'-100%',
            opacity:0,
            stagger:{
                amount:0.05,
                from:"start"
            },
            ease: "ease.in",
        },'<')
        tl1.to([text,text2],{
            height:'0px',
            width:'0px'
        },'-=0.5')

    var tl2 = gsap.timeline({duration:1.5,paused:true})
        tl2.fromTo(slogo,{
            fontSize:sigVSize
        },{
            fontSize:logoSize
        })
        tl2.to(slogo,{
            left:logoLeft,
            top:logoTop,
            ease:'back.out(1.3)'
        },'<')
        tl2.to('.w2 ',{
            paddingLeft:0
        },'<')

    var maintl=gsap.timeline()
    maintl.add(tl1.play())
          .add(tl2.play(),'2.1')
}


window.addEventListener("load", init());
</script>