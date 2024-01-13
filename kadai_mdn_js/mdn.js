const today = () => {
    const currentDate = new Date();
    console.log(currentDate.getFullYear()+'年'+(currentDate.getMonth()+1)+'月',currentDate.getDate()+'日');
}

today();
