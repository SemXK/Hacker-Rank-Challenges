function main(N) {
  console.log(N>6 && N <20)
  if(N%2 !==0 ) {          //N is ODD 
    console.log(N, "Weird")
  }
  else if(N>5 && N<20) {      //N is in range (5, 20]
    console.log(N, "Weird")
  }
  else {
    console.log('Not Weird')
  }
}
main(3)
