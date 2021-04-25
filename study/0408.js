function number_format(num)
{
  if(typeof num !== 'string' && typeof num !== 'number')
  {
    return;
  }
  num = num.toString();
  if(num.length >= 4)
  {
    // 맨뒤 숫자3개를 제외한 나머지
    const front = number_format(num.slice(0, -3));//123
    // 맨뒤에서 숫자3개 가져오기
    const back = number_format(num.slice(-3));
    // 앞과 뒤 사이에 콤마 추가해서 리턴
    return front + ',' + back
  }
  else
  {
    // 3자리까지는 아무 작업도 하지 않고 리턴
    return num;
  }
}
var rt = number_format(123456789);
console.log('rt : ', rt);

