$(function () {
    let main=$('main')
    let aside=$('aside')
    let input=$('input')
    let span=$('span')
    main.empty()
    span.empty()

    let arr=[
        {name:'丁新宇',tell:'18406586019',py:'dingxinyu'},
        {name:'刘源',tell:'18406581111',py:'liuyuan'},
        {name:'李晓',tell:'18406582222',py:'lixiaoyu'},
        {name:'齐秦',tell:'18406583333',py:'qiguanyan'},
        {name:'姚亚涌',tell:'18406584444',py:'yaoyayong'},
        {name:'李强',tell:'18406585555',py:'laopozi'},
        {name:'安心',tell:'18406586666',py:'anxin'},
        {name:'李翔',tell:'18406586667',py:'lixiang'},
        {name:'高志伟',tell:'18406586668',py:'gaozhiwei'},
        {name:'白客',tell:'18406586669',py:'tuoniao'},
        {name:'李相赫',tell:'18406587777',py:'lixianghe'},
        {name:'安必信',tell:'1840658888',py:'anbixin'},
        {name:'刘青松',tell:'1840658881',py:'liuqingsong'},
        {name:'可丽儿辣舞',tell:'1840658884',py:'kelierlawu'},
    ]

    input.on('input',function () {
        let val=$(this).val();
        let newarr=arr.filter(elem=>elem.name.includes(val) || elem.py.includes(val)||elem.tell.includes(val))
        render(newarr);
    })

    render(arr)
    function render(arr){
        let person={};
        arr.forEach(function (elem) {
            let firstChar = elem.py.charAt(0).toUpperCase();
            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(elem);
        })

        let keyArr = Object.keys(person).sort();
        let html = '';
        let html1='';
        let html2='';
        for (let i=0; i < keyArr.length; i++) {

            let elem = keyArr[i];
            html +=  `
          <section><h4>${elem}</h4>
      `;
            html1 +=`
            <p>${elem}</p>
            `;
            html2 +=`
            ${elem}
            `;

            // while(){
            //    span.html(html2);
            // }
            for (let j = 0; j < person[elem].length; j++) {
                html += `
           <div><a href="tel:${person[elem][j].tell}">${person[elem][j].name}</a></div>
           `;
            }
            html += `</section>`;

            aside.html(html1);
            main.html(html);
        }
    }
})
