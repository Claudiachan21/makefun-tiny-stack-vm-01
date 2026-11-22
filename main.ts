import f from"node:fs";
const{readdirSync:L,readFileSync:F,writeFileSync:W,mkdirSync:K}=f;
const{MAKEFUN_INPUT_DIR:A="/input",MAKEFUN_OUTPUT_DIR:B="/output"}=process.env,D="#4D')-.2bbbbbbbb,,,,,,,(,,,(,,,b,,,bbbbbbbbbbbbbSWWS#bbbbbbbbbbb(+bbbbbbbbbbbbbb''$'";
function V(P,N){
let n=P.length,S=new Int32Array(576),p=0,c=0,O=Buffer.alloc(1<<16),o=0,i=0,q=0,t=0;
const R=()=>((P[q-2]|P[q-1]<<8)<<16)>>16;
try{for(;;){
if(t==1e6)throw 10;
if(q<0||q>=n)throw 9;
let k=P[q],v=D[k];
if(k>83||v=="b")throw 5;
v=v.charCodeAt()-35;
let j=[0,1,4,2][v>>4],Y=(v>>2)&3,Z=v&3;
if(q+j>=n)throw 9;
if(p<Y)throw 2;
if(p-Y+Z>256)throw 3;
t++;q+=1+j;
if(k>15&&k<35&&k!=23&&k!=27){
let b=S[p-1],a=S[p-2],r;
if(k>18&&k<23&&b==0)throw 4;
r=k==16?a+b|0:k==17?a-b|0:k==18?Math.imul(a,b):k==19?a/b|0:k==20?a%b|0:k==21?(a>>>0)/(b>>>0)|0:k==22?(a>>>0)%(b>>>0)|0:k==24?a&b:k==25?a|b:k==26?a^b:k==28?a<<b:k==29?a>>b:k==30?a>>>b|0:k==32?+(a==b):k==33?+(a<b):+(a>>>0<b>>>0);
p-=2;S[p++]=r;
}else if(k==0)throw 0;
else if(k==1)S[p++]=(P[q-1]<<24)>>24;
else if(k==2)S[p++]=P[q-4]|P[q-3]<<8|P[q-2]<<16|P[q-1]<<24;
else if(k==3)p--;
else if(k==4)S[p]=S[p-1],p++;
else if(k==5)[S[p-1],S[p-2]]=[S[p-2],S[p-1]];
else if(k==6)S[p]=S[p-2],p++;
else if(k==7)[S[p-3],S[p-2],S[p-1]]=[S[p-2],S[p-1],S[p-3]];
else if(k==23)S[p-1]=-S[p-1]|0;
else if(k==27)S[p-1]=~S[p-1];
else if(k==48)q+=R();
else if(k==49||k==50){if((k==49)==(S[--p]==0))q+=R();}
else if(k==51){if(c==64)throw 7;S[512+c++]=q;q=P[q-2]|P[q-1]<<8;}
else if(k==52){if(c==0)throw 8;q=S[512+--c];}
else if(k==64){let a=S[p-1];if(a<0||a>255)throw 6;S[p-1]=S[256+a];}
else if(k==65){let a=S[p-1];if(a<0||a>255)throw 6;S[256+a]=S[p-2];p-=2;}
else if(k==80){let s=""+S[--p];if(o+s.length>65536)throw 11;o+=O.write(s,o);}
else if(k==81){if(o+1>65536)throw 11;O[o++]=S[--p]&255;}
else if(k==82)S[p++]=i<N.length?N[i++]:-1;
else throw S[--p]&255;
}}catch(x){return[O.subarray(0,o),x]}
}
for(let d of L(A)){let g=A+"/"+d,h=B+"/"+d,[a,b]=V(F(g+"/program.bin"),F(g+"/input.bin"));K(h,{recursive:!0});W(h+"/stdout.bin",a);W(h+"/exit.txt",b+"")}
