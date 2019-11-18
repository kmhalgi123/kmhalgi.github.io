(function(){
    var width = $(window).width(),
        height = $(window).height()
        svg = d3.select('#name_svg')
            .attr('width', width)
            .attr('height', height),
        pas_svg = d3.select('#abilities_svg'),
        time_svg = d3.select('#time_svg')
            .attr('width', width)
            .attr('height', 200)
        skills_svg = d3.select('#skill_svg')
            .attr('width', width/4)
            .attr('height', 440)
        contact_svg = d3.select('#contact_site')
            .attr('width', width)
            .attr('height', height)

    isActive = false

    var div = d3.select("body").append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0);

    var poly = [{"x":0, "y":0},
        {"x":width,"y":0},
        {"x":width,"y":300},
        {"x":450,"y":300},
        {"x":300, "y": 450},
        {"x":0, "y":450}];

    time_poly = [{"x":0, "y":0},
        {"x":width,"y":0},
        {"x":parseInt(width - width/6),"y":200},
        {"x":width/6,"y":200}]

    var lineData = [ { "x": 0,   "y": 470},  { "x": 315,  "y": 470},
        { "x": 465,  "y": 320}, { "x": width,  "y": 320}
    ];

    var lineFunction = d3.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })

    var arc1 = d3.arc()
        .innerRadius(29.5)
        .outerRadius(30.5)
        .startAngle(0 * (Math.PI/180)) //convert from degs to radians
        .endAngle(90 * (Math.PI/180)) //just radians
        
    var arc2 = d3.arc()
        .innerRadius(29.5)
        .outerRadius(30.5)
        .startAngle(90 * (Math.PI/180)) //convert from degs to radians
        .endAngle(180 * (Math.PI/180)) //just radians
    
    var arc3 = d3.arc()
        .innerRadius(29.5)
        .outerRadius(30.5)
        .startAngle(180 * (Math.PI/180)) //convert from degs to radians
        .endAngle(270 * (Math.PI/180)) //just radians

    var thought = svg.append('g').attr('width', width-450).attr('height', 400).attr('transform', 'translate(450, 35)')

    svg.selectAll("polygon")
        .data([poly])
      .enter().append("polygon")
        .attr("points",function(d) { 
            return d.map(function(d) {
                return [d.x,d.y].join(",");
            }).join(" ");
        })
        .attr('fill', '#1a1e1f');

    svg.append("image")
        .attr("href", "./imgs/myself.png")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 170)
        .attr("height", 170)
        .style("border-radius", "50%")
        .attr('transform', 'translate(120,70)')

    svg.append('text').text('Kaushal Mhalgi')
        .attr('x', 60).attr('y', 300)
        .attr('fill', 'white')
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '38px')
        .style('font-weight', 'bold')

    svg.append('text').text('- Student, Master of Science,')
        .attr('x', 60).attr('y', 330)
        .attr('fill', 'white')
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')

    svg.append('text').text('Arizona State University')
        .attr('x', 60).attr('y', 350)
        .attr('fill', 'white')
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')
 

    svg.append('path')
        .style("stroke", "#1a1e1f")
        .attr("d", lineFunction(lineData))
        .attr('fill','none');

    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: 495, y: 45},{x: 545, y: 65}]))
        .style("stroke-width", '1.5px')

    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: 495, y: 55},{x: 540, y: 75}]))
        .style("stroke-width", '1.5px')

    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: 545, y: 65},{x: 545, y: 215}]))
        .style("stroke-width", '1.5px')

    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: 495, y: 45},{x: parseInt(width-180), y: 45}]))
        .style("stroke-width", '1.5px')

    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: 575, y: 245},{x: parseInt(width-180), y: 245}]))
        .style("stroke-width", '1.5px')
        
    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: 655, y: 255},{x: parseInt(width-185), y: 255}]))
        .style("stroke-width", '1.5px')

    svg.append('path')
        .style("stroke", "white")
        .attr("d", lineFunction([{x: width-150, y: 75},{x: parseInt(width-150), y: 215}]))
        .style("stroke-width", '1.5px')

    svg.append("path")
        .attr("d", arc1)
        .attr("transform", "translate("+parseInt(width-180)+",75)")
        .attr('stroke','white')

    svg.append("path")
        .attr("d", arc2)
        .attr("transform", "translate("+parseInt(width-170)+",225)")
        .attr('stroke','white')

    svg.append("path")
        .attr("d", arc2)
        .attr("transform", "translate("+parseInt(width-180)+",215)")
        .attr('stroke','white')

    svg.append("path")
        .attr("d", arc3)
        .attr("transform", "translate(575,215)")
        .attr('stroke','white')

    // svg.append("text").text('I am a peer in huge decentralized network! I am Computer Scientist currently pursuing my masters in Computer Science from Arizona State University, Tempe.')
    //     .attr('x', 600).attr('y', 85)
    //     .attr()

    pas_svg.append('text')
        .text("My Passions")
        .attr('x', 10).attr('y', 15)
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '18px')
        .style('font-weight', 'bold')

    pas_svg.append('path')
        .style('stroke','black')
        .attr("d", lineFunction([{x: 140, y: 8},{x: 700, y: 8}]))
        .style("stroke-width", '1.5px')

    pas_svg.append('path')
        .style('stroke','black')
        .attr("d", lineFunction([{x: 550, y: 13},{x: 680, y: 13}]))
        .style("stroke-width", '1.5px')

    passion_data = [{title: "Blockchain", img: './imgs/blockchain.png'},
        {title: "Machine Learning", img: './imgs/ml.png'},
        {title: "Web Development", img: './imgs/webdev.png'},
        {title: "App Development", img: './imgs/appdev.png'},
        {title: "Data Visualization", img: './imgs/dv.png'}]
        
    var pass = pas_svg.selectAll("g")
        .data(passion_data)
        .enter().append("g")
        .attr('transform', function(d,i) {return 'translate('+ parseInt((i*160)+50) +', 0)'})
        .style('cursor','pointer')
        

    pass.append('div')
        .style('height', 120)
        .style('width', 120)

    pass.append("image").attr('href',function(d){return d.img})
        .attr('class','pass')
        .attr('height', 80)
        .attr('width', 80)
        .attr('transform', function(d,i) {return 'translate(-40, 60)'})
        .style('cursor','pointer')

    pass.append("text").text(function(d){return d.title}).style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')
        .style('font-weight', 'bold').attr('text-anchor','middle')
        .attr('transform', function(d,i) {return 'translate(0, 180)'})
        .style('cursor','pointer')

    time_g = time_svg.append("g")

    time_g.selectAll("polygon")
        .data([time_poly])
      .enter().append("polygon")
        .attr("points",function(d) { 
            return d.map(function(d) {
                return [d.x,d.y].join(",");
            }).join(" ");
        })
        .attr('fill', '#f9f9f9');

    var svgDefs = svg.append('defs');

    var mainGradient = svgDefs.append('linearGradient')
        .attr('id', 'mainGradient');

    mainGradient.append('stop')
        .attr('class', 'stop-left')
        .attr('offset', '0');

    mainGradient.append('stop')
        .attr('class', 'stop-right')
        .attr('offset', '1');

    time_scale = d3.scaleLinear().range([250,width-250]).domain([2012, 2020])

    time_svg.append("rect")
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("x", 250)
        .attr("y", 75)
        .attr("width", width-500)
        .classed('filled', true)
        .attr("height", 15)

    stops_g = time_svg.append("g")
    desc_g = time_svg.append("g")
    y_g = time_svg.append("g")
    p_g = time_svg.append("g")

    lang_data = [
        {id: 1, name: "Java", rating: 5},
        {id: 2, name: "Javascript", rating: 5},
        {id: 3, name: "PHP", rating: 5},
        {id: 4, name: "Python", rating: 4},
        {id: 5, name: "C++", rating: 3}
    ]
    lang_data = lang_data.sort(function(a,b){
        return d3.ascending(a.rating, b.rating);
    })

    var x1 = d3.scaleLinear()
        .range([0, width/5])
        .domain([0,5]);

    var y1 = d3.scaleBand()
        .range([200, 0])
        .domain(lang_data.map(function(d) {
            return d.name;
        })).padding(0.5);

    x1ax = d3.axisBottom().ticks(5).tickFormat(function(d) { return d }).tickSizeInner([-5])
    x1ax.scale(x1)

    y1ax = d3.axisLeft()
    y1ax.scale(y1)
    stops_data = [{id:1, year: 2013, event: "School Completion", desc: "May 2013", tt_tile: "Maharashtra State Board, India", pointer: "95.82%", majors: "Physics, Maths, Chemistry"},
        {id:2, year: 2014, event: "", desc: ""},
        {id:3, year: 2015, event: "High School Completion", desc: "July 2013 - May 2015",  tt_tile: "Maharashtra State Board, India", pointer: "86.15%", majors: "Physics, Maths, Chemistry"},
        {id:4, year: 2017, event: "", desc: ""},
        {id:5, year: 2019, event: "Bachelor of Engineering", desc: "Aug 2015 - May 2019",  tt_tile: "University of Mumbai, India", pointer: "8.68", majors: "Computer Engineering"}]

    project_data = [{
        id: 1,
        start_month: "Jan 2017",
        end_month: "Dec 2017",
        s_title: "Internship",
        title: "Internship at Digital Vibes",
        tt_tile: "Digital Vibes",
        Software_used: "App development, React-XP",
        marker: 2017,
        lang_data: [
            {id: 1, name: "Javascript", rating: 5},
            {id: 2, name: "Python", rating: 4},
            {id: 3, name: "C++", rating: 3}
        ]
    },{
        id: 2,
        start_month: "May 2018",
        end_month: "March 2019",
        s_title: "Project",
        title: "Blockchain Project at VESIT",
        tt_tile: "University of Mumbai",
        Software_used: "Blockchain, NodeJS",
        marker: 2018.5,
        lang_data: [
            {id: 1, name: "Javascript", rating: 5},
            {id: 2, name: "PHP", rating: 5},
            {id: 3, name: "Python", rating: 4}
        ]
    },{
        id: 3,
        start_month: "September 2018",
        end_month: "present",
        s_title: "Job",
        title: "Research Aide, BRL, ASU",
        tt_tile: "Arizona State University",
        Software_used: "Blockchain",
        marker: 2019.7,
        lang_data: [
            {id: 1, name: "Java", rating: 5},
            {id: 2, name: "Javascript", rating: 5},
            {id: 3, name: "Python", rating: 4}
        ]
    }]

    stops_g.selectAll("rect")
        .data(stops_data)
        .enter().append("rect")
        .attr("x", function(d){console.log(d); return time_scale(d.year);})
        .attr("y", 72)
        .attr("rx", 2)
        .attr("ry", 2)
        .attr("width", 5)
        .attr("height", 21)
        .attr("stroke", "black")
        .attr("fill", "white")

    stops_g.selectAll("circle")
        .data(stops_data)
        .enter().append("circle")
        .filter(function(d) { return d.event != ""})
        .attr("cx", function(d){console.log(d); return time_scale(d.year)+2;})
        .attr("cy", 155)
        .attr("r", 25)
        .style("cursor", "pointer")
        .attr("fill", "white")
        .style('fill', 'url(#image)')
        .on("mouseover", function(d,i){
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("<div style='margin-top: 15px'><b>"+ d.tt_tile +"</b></div><div style='font-size: 14px'><i>"+ d.desc +"</i></div><div style='font-size: 15px; margin-top: 5px'>Pointer: "+ d.pointer +"</div><hr style='opacity: 0.2'><div style='text-alignment: left; margin-top: 10px'>Majors: "+ d.majors +"</div>")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 40) + "px");
        }).on("mouseout", function(d,i){
            div.transition()		
                .duration(200)		
                .style("opacity", 0.0);
        }).on("click", function(d){
            if(!isActive){
                d3.selectAll("p").style("opacity", 0.5)
                d3.select("#e"+d.id).style("opacity", 1)
                isActive = !isActive
            }else{
                d3.selectAll("p").style("opacity", 1)
                isActive = !isActive
            }
        })

    stops_g.selectAll("path")
        .data(stops_data)
        .enter().append('path')
        .filter(function(d) { return d.event != ""})
        .style('stroke','black')
        .attr("d", function(d){var x = time_scale(d.year)+2.5; return lineFunction([{x: x, y: 100},{x: x, y: 125}])})
        .style("stroke-width", '1.5px')
        .style("stroke-dasharray", "2,2")

    stops_g.selectAll("text")
        .data(stops_data)
        .enter().append('text')
        .filter(function(d) { return d.event != ""})
        .attr("x", function(d){console.log(d); return time_scale(d.year)+32;})
        .attr("y", 145)
        .text(function(d){return d.event})
        .style("font-size", '14px')
        .style("font-family", "Lato, sans-serif")

    desc_g.selectAll("text")
        .data(stops_data)
        .enter().append('text')
        .filter(function(d) { return d.event != ""})
        .attr("x", function(d){console.log(d); return time_scale(d.year)+32;})
        .attr("y", 160)
        .text(function(d){return d.desc})
        .style("font-size", '12px')
        .style("font-family", "Lato, sans-serif")

    y_g.selectAll("text")
        .data(stops_data)
        .enter().append('text')
        .filter(function(d) { return d.event == ""})
        .attr("x", function(d){console.log(d); return time_scale(d.year)-10;})
        .attr("y", 110)
        .text(function(d){return d.year})
        .style("font-size", '12px')
        .style("font-family", "Lato, sans-serif")

    p_g.selectAll("rect")
        .data(project_data)
        .enter().append("rect")
        .attr("x", function(d){console.log(d); return time_scale(d.marker)-20;})
        .attr("y", 20)
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", 40)
        .attr("height", 40)
        .attr("fill", "white")
        .style('stroke','black')
        .style('fill', 'url(#image2)')
        .style("cursor", "pointer")
        .on("mouseover", function(d,i){
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("<div style='margin-top: 15px'><b>"+ d.title +"</b></div><div style='font-size: 14px'><i>"+ d.start_month +"-" + d.end_month + "</i></div><div style='font-size: 15px; margin-top: 5px'>Employer: "+ d.tt_tile +"</div><hr style='opacity: 0.2'><div style='text-alignment: left; margin-top: 10px'>Softwares Used: "+ d.Software_used +"</div>")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 40) + "px");
        }).on("mouseout", function(d,i){
            div.transition()		
                .duration(200)		
                .style("opacity", 0.0);
        }).on("click", function(d){
            if(!isActive){
                d3.selectAll("p").style("opacity", 0.5)
                d3.select("#j"+d.id).style("opacity", 1)
                d3.select("#t_f").text("Languages used over the course")
                draw_bar(d.lang_data ,x1,y1, x1ax, y1ax)
                isActive = !isActive
            }else{
                d3.selectAll("p").style("opacity", 1)
                isActive = !isActive
                d3.select("#t_f").text("Fluency in Programming Languages")
                draw_bar(lang_data ,x1,y1, x1ax, y1ax)
            }
        })

    p_g.selectAll("path")
        .data(project_data)
        .enter().append('path')
        .style('stroke','black')
        .attr("d", function(d){var x = time_scale(d.marker)+2.5; return lineFunction([{x: x, y: 65},{x: x, y: 75}])})
        .style("stroke-width", '1.5px')
        .style("stroke-dasharray", "2,2")

    p_g.selectAll("text")
        .data(project_data)
        .enter().append('text')
        .attr("x", function(d){console.log(d); return time_scale(d.marker)+25;})
        .attr("y", 40)
        .text(function(d){return d.s_title})
        .style("font-size", '12px')
        .style("font-family", "Lato, sans-serif")

    lang_g = skills_svg.append("g")
    tech_g = skills_svg.append("g")

    console.log(lang_data)

    lang_g.append("g")
        .attr("class", "x1 axis")
       	.attr("transform", "translate(65, 200)")
      	.call(x1ax);

    x1ax.scale(x1)
    lang_g.append("g")
        .attr("class", "y1 axis")
        .attr("transform", "translate(65,0)")
        .call(y1ax);
    y1ax.scale(y1)
    lang_g.selectAll(".bar")
        .data(lang_data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("transform", "translate(65,0)")
        .attr("height", y1.bandwidth())
        .attr("y", function(d) { return y1(d.name); })
        .attr("width", function(d) { return x1(d.rating); })
        .attr("fill", "#6F257F")

    lang_g.append("text").text("Fluency in Programming Languages")
        .attr("x", 100)
        .attr("y", 230)
        .attr("id", "t_f")
        .style("font-family", "lato, sans-serif")
        .style("font-size", "13px")

    tech_data = [{id: 1, name: "Blockchain", rating: 4, level: "Excellent"},
        {id: 2, name: "Web dev", rating: 4, level: "Excellent"},
        {id: 3, name: "App dev", rating: 3, level: "Good"},
        {id: 4, name: "AI", rating: 3, level: "Good"}]

    var y = d3.scaleLinear()
        .range([150, 0])
        .domain([0,4]);

    var x = d3.scaleBand()
        .range([0, width/5])
        .domain(tech_data.map(function(d) {
            return d.name;
        })).padding(0.5);

    tech_g.append("g")
        .attr("class", "x axis")
           .attr("transform", "translate(65, 420)")
           .call(d3.axisBottom(x));

    tech_g.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(65,270)")
        .call(d3.axisLeft(y).ticks(4).tickFormat(function(d) { 
            switch (d) {
                case 1:
                    return "Poor"
                    break;
                case 2:
                    return "OK"
                    break;
                case 3:
                    return "Good"
                    break;
                case 4:
                    return "Excellent"
                    break;
                default:
                    break;
            }
         }).tickSizeInner([-5]))

    tech_g.selectAll(".bar")
         .data(tech_data)
       .enter().append("rect")
         .attr("class", "bar")
         .attr("y", function(d) { return y(d.rating); })
         .attr("transform", "translate(65,270)")
         .attr("height", function(d) { return 150-y(d.rating); })
         .attr("x", function(d) { return x(d.name); })
         .attr("width", x.bandwidth())
         .attr("fill", "#6F257F")
        
    function draw_bar(data, x, y, x1ax, y1ax){

        var t = d3.transition()
            .duration(500)
        x.domain([0,5])
        y.domain(data.map(function(d) {
            return d.name;
        })).padding(0.5);

        x1ax.scale(x)
        y1ax.scale(y)
        var yn = lang_g.selectAll(".y1")
            .data(data)
            
        var newY = yn.enter().append("g")
            .attr("class", "y1")
            .attr("transform", "translate(65,0)")

        yn.merge(newY).transition(t).call(y1ax)

        lang_g.selectAll(".bar").remove()

        lang_g.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("transform", "translate(65,0)")
        .attr("height", y.bandwidth())
        .attr("y", function(d) { return y(d.name); })
        .attr("width", function(d) { return x(d.rating); })
        .attr("fill", "#6F257F")
    }

    ////////////// Contact SVG /////////////////

    var s_arc1 = d3.arc()
        .innerRadius(24.5)
        .outerRadius(25.5)
        .startAngle(0 * (Math.PI/180)) //convert from degs to radians
        .endAngle(90 * (Math.PI/180)) //just radians
        
    var s_arc2 = d3.arc()
        .innerRadius(24.5)
        .outerRadius(25.5)
        .startAngle(360 * (Math.PI/180)) //convert from degs to radians
        .endAngle(270 * (Math.PI/180)) //just radians
    
    var s_arc3 = d3.arc()
        .innerRadius(24.5)
        .outerRadius(25.5)
        .startAngle(180 * (Math.PI/180)) //convert from degs to radians
        .endAngle(270 * (Math.PI/180)) //just radians

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: 185, y: 65},{x: 500, y: 65}]))
        .style("stroke-width", '1.5px')

    contact_svg.append("path")
        .attr("d", s_arc1)
        .attr("transform", "translate(500,90)")
        .attr('stroke','black')

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: 525, y: 90},{x: 525, y: 450}]))
        .style("stroke-width", '1.5px')

    contact_svg.append("path")
        .attr("d", s_arc3)
        .attr("transform", "translate(550,450)")
        .attr('stroke','black')

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: 690, y: 475},{x: width-100, y: 475}]))
        .style("stroke-width", '1.5px')

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: width-400, y: 455},{x: width-400, y: 90}]))
        .style("stroke-width", '1.5px')

    contact_svg.append("path")
        .attr("d", s_arc2)
        .attr("transform", "translate(" + (width - 375) +",90)")
        .attr('stroke','black')

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: width-275, y: 65},{x: width-100, y: 65}]))
        .style("stroke-width", '1.5px')

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: 525, y: height-100},{x: 525, y: height-50}]))
        .style("stroke-width", '1.5px')

    contact_svg.append('path')
        .style("stroke", "black")
        .attr("d", lineFunction([{x: 700, y: 65},{x: width - 450, y: 65}]))
        .style("stroke-width", '1.5px')

    contact_svg.append("text").text("IDE Fluency")
        .attr("x", 55)
        .attr("y", 70)
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')
        .style('font-weight', 'bold')

    contact_svg.append("text").text("Contact Me Via")
        .attr("x", 555)
        .attr("y", 480)
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')
        .style('font-weight', 'bold')

    contact_svg.append("text").text("Languages")
        .attr("x", width-370)
        .attr("y", 70)
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')
        .style('font-weight', 'bold')

    contact_svg.append("text").text("My Publications")
        .attr("x", 540)
        .attr("y", 70)
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '15px')
        .style('font-weight', 'bold')

    ide_g = contact_svg.append("g")

    ide_data = [{name: "Android Studio", rating: 4},
    {name: "Eclipse", rating: 3},
    {name: "MySQL Workbench", rating: 2},
    {name: "Visual Studio Code", rating: 4},
    {name: "Atom", rating: 2},
    {name: "Notepad++", rating: 2},
    {name: "Netbeans", rating: 4}]


    var y_ide = d3.scaleBand()
        .range([height-150, 0])
        .domain(ide_data.map(function(d) {
            return d.name;
        })).padding(0.5);;

    var x_ide = d3.scaleLinear()
        .range([0, 350])
        .domain([0,4]);

    ide_g.append("g")
        .attr("class", "x axis")
           .attr("transform", "translate(105, " + (height - 50)+")")
           .call(d3.axisBottom(x_ide).ticks(4).tickFormat(function(d) { 
            switch (d) {
                case 1:
                    return "Poor"
                    break;
                case 2:
                    return "OK"
                    break;
                case 3:
                    return "Good"
                    break;
                case 4:
                    return "Excellent"
                    break;
                default:
                    break;
            }
         }).tickSizeInner([-5]))

    ide_g.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(105,100)")
        .call(d3.axisLeft(y_ide));

    ide_data = ide_data.sort(function(a,b){
        return d3.ascending(a.rating, b.rating);
    })

    ide_g.selectAll(".bar")
         .data(ide_data)
       .enter().append("rect")
         .attr("class", "bar")
         .attr("x", 0)
         .attr("transform", "translate(105,100)")
         .attr("height", y_ide.bandwidth())
         .attr("y", function(d) { return y_ide(d.name); })
         .attr("width", function(d) { return x_ide(d.rating); })
         .attr("fill", "#6F257F")

    pub_g = contact_svg.append("g")
    
    pub_g.append("image").attr('href', './imgs/patent.png')
        .attr('class','pass')
        .attr('height', 80)
        .attr('width', 80)
        .attr('transform', function(d,i) {return 'translate(600, 170)'})
        .style('cursor','pointer')

    pub_g.append("text").text("Patent")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(612, 280)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')
    .style('font-weight', 'bold')

    pub_g.append("text").text("A Syatem and Method")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(565, 310)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')

    pub_g.append("text").text("for Blockchain based")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(565, 330)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')
    pub_g.append("text").text("Energy Trading")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(590, 350)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')


    pub_g.append("image").attr('href', './imgs/paper.png')
        .attr('class','pass')
        .attr('height', 80)
        .attr('width', 80)
        .attr('transform', function(d,i) {return 'translate(800, 170)'})
        .style('cursor','pointer')

    pub_g.append("text").text("Paper")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(812, 280)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')
    .style('font-weight', 'bold')

    pub_g.append("text").text("Published in")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(790, 310)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')

    pub_g.append("text").text("IEEE Explore")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(790, 330)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')

    pub_g.append("text").text("Journal")
    .attr("x", 0)
    .attr("y", 0)
    .attr('transform', function(d,i) {return 'translate(805, 350)'})
    .style('font-family','Montserrat, sans-serif')
    .style('font-size', '15px')

    lan_g = contact_svg.append("g")

    lan_g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", 250)
        .attr("width", 40)
        .attr("rx", 4)
        .attr("ry", 4)
        .attr('fill', "white")
        .attr('stroke', "black")
        .attr('transform', 'translate(1005, 120)')

        lan_g.append("text").text("Marathi")
        .attr("x", 0)
        .attr("y", 0)
        .attr('transform', "translate(1005, 390)")
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '12px')

    lan_g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", 250)
        .attr("width", 40)
        .attr("rx", 4)
        .attr("ry", 4)
        .attr('fill', "white")
        .attr('stroke', "black")
        .attr('transform', 'translate(1085, 120)')

        lan_g.append("text").text("Hindi")
        .attr("x", 0)
        .attr("y", 0)
        .attr('transform', "translate(1085, 390)")
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '12px')

    lan_g.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 230)
    .attr("width", 40)
    .attr("rx", 4)
    .attr("ry", 4)
    .attr('fill', "white")
    .attr('stroke', "black")
    .attr('transform', 'translate(1165, 140)')

    lan_g.append("text").text("English")
        .attr("x", 0)
        .attr("y", 0)
        .attr('transform', "translate(1165, 390)")
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '12px')

    con_g = contact_svg.append("g")

    con_g.append("image").attr('href', './imgs/mail.png')
        .attr('class','pass')
        .attr('height', 60)
        .attr('width', 50)
        .attr('transform', 'translate(700, 500)')
        .style('cursor','pointer')

    con_g.append("text").text("kmhalgi@asu.edu")
        .attr("x", 0)
        .attr("y", 0)
        .attr('transform', "translate(775, 535)")
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '14px')
        .style("font-weight", 'bold')

    con_g.append("image").attr('href', './imgs/location.png')
        .attr('class','pass')
        .attr('height', 40)
        .attr('width', 40)
        .attr('transform', 'translate(710, 550)')
        .style('cursor','pointer')

    con_g.append("text").text("1709 S Jentilly Ln, Tempe, AZ, 85281")
        .attr("x", 0)
        .attr("y", 0)
        .attr('transform', "translate(775, 580)")
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '14px')
        .style("font-weight", 'bold')

    con_g.append("image").attr('href', './imgs/web.png')
        .attr('class','pass')
        .attr('height', 30)
        .attr('width', 30)
        .attr('transform', 'translate(715, 605)')
        .style('cursor','pointer')

    con_g.append("text").text("http://kaushalmhalgi.tech")
        .attr("x", 0)
        .attr("y", 0)
        .attr('transform', "translate(775, 630)")
        .style('font-family','Montserrat, sans-serif')
        .style('font-size', '14px')
        .style("font-weight", 'bold')

})();

