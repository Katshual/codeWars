function disemvowel(str) {
    
    
    return str.match(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z,!,?,,'v,'" "]/gi).join("").toString();
  }
  console.log(disemvowel('This website is for losers LOL!'))
  console.log(disemvowel("No offense but,Your writing is among the worst I've ever read"))
  console.log(disemvowel('What are you, a communist?'))