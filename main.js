/**
 * Created by Administrator on 2016/4/8.
 */
var map=[];
var dir=['up','right','down','left'];
var MIN= 2,MAX=9;
var table=document.getElementById('table');
function block(row,col,dir){
    this.x=row;
    this.y=col;
    this.dir=dir;
}
block.prototype.turnLeft=function(){
    this.dir=dir[3];
};
block.prototype.turnRight=function(){
    this.dir=dir[1];
};
block.prototype.turnUp=function(){
    this.dir=dir[0];
};
block.prototype.turnDown=function(){
    this.dir=dir[2];
};
block.prototype.go=function(){
    console.log(this.dir);
    switch(this.dir){
        //up
        case dir[0]:{
            if(this.x>=MIN){
                this.x--;
            }
            break;
        }
        //right
        case dir[1]:{
            if(this.y<=MAX){
                this.y++;
            }
            break;
        }
        //down
        case dir[2]:{
            if(this.x<=MAX){
                this.x++;
            }
            break;
        }
        //left
        case dir[3]:{
            if(this.y>=MIN){
                this.y--;
            }
            console.log(this.x,this.y);
            break;
        }
    }
}
block.prototype.getDir=function(){
    return this.dir;
}
block.prototype.getX=function(){
    return this.x;
}
block.prototype.getY=function(){
    return this.y;
}
block.prototype.setDir=function(dir){
    this.dir=dir;
}


function init(){
    var b=new block(4,4,'left');
    render(b);
    document.onkeydown=function(e){
        var e=e||window.event;
        if(e )
            switch(e.keyCode){
                //空格
                case 32:
                {
                    var dirNow=dir.indexOf(b.getDir());
                    b.setDir(dir[(dirNow+1)%4]);
                    render(b);
                    break;
                }
                //keyCode 13 = Enter
                case 13:{
                    b.go();
                    render(b);
                    break;
                }
            }
    }

}
init();
function render(block){
    var x=block.getX();
    var y=block.getY();
    var dir=block.getDir();

    var rows=table.rows;
    var cols=table.rows[0].cells;
    for(var i=1;i<rows.length;i++){
        for(var j=1;j<cols.length;j++){
            if(i==x&&j==y){
                table.rows[i].cells.item(j).className=dir;
                table.rows[i].cells.item(j).innerHTML="<div id='blue'></div>";
            }else {
                table.rows[i].cells.item(j).className="";
                table.rows[i].cells.item(j).innerHTML="";
            }
        }
    }
}
