const PostTime = ({ created }) => {

    //cuts off extra time info
    const normalDate = created.substring(0,10);

    //grabs Year
    const currentYear = normalDate.substring(0,4);

    //grabs Month and deletes 0 if it is there
    const currentMonth = normalDate.substring(5,7);
    const noZerosMonth = currentMonth.replace('0','');

    //grabs Day
    const currentDay = normalDate.substring(8,10);

    const months = [ "", "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    const selectedMonthName = months[noZerosMonth];

    const dateString = `${selectedMonthName} ${currentDay}, ${currentYear}`;
    return (
        <div className="postTime">
            {dateString}
        </div>
    )
}

export default PostTime
