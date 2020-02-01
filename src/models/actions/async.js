import request from '../../utils/request'
export const SETDATA = 'SETDATA'

export function testAsync(msg) {
  return (dispatch) => {
    return request.post('test', {
      msg: msg
    })
      .then((res) => {
        console.log(res.data)
        return res.data.str
      })
      .then((data) => dispatch(testAsync2(data)))
      .catch((err) => console.log('err comes from test api:' + err))
  }
}

function testAsync2(msg) {
  return {
    type: SETDATA,
    msg
  }
}