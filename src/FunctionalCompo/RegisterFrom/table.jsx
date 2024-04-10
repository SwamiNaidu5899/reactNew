const Table = (props)=>{
    const {userData} = props
   return(
    <>
    <table>
      <thead>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
            </thead>
            {
       userData.map((eachI,i)=>{
        const {name,mail,password} = eachI
        return(
            <tbody>
              <td>{name}</td>
              <td>{mail}</td>
              <td>{password}</td>
            </tbody>
        )
       })
      }
      </table>
    </>
   )
}
export default Table