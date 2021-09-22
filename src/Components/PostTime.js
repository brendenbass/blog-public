const PostTime = ({ created }) => {
    // console.log('created', {created});
    // const currentDate = (created);
    const isoDate = created;
    const trimmedDate = isoDate.split("T",[0]);
    console.log(trimmedDate);




    // console.log('readableDate', read);
    // const currentDay = currentDate;
    // // console.log('currentDay', currentDay);
    // const currentMonth = currentDate;
    // // console.log('currentMonth', currentMonth);
    // const currentYear = currentDate;
    // // console.log('currentYear', currentYear);

    // const months = [ "", "January", "February", "March", "April", "May", "June", 
    //        "July", "August", "September", "October", "November", "December" ];

    // const selectedMonthName = months[currentMonth];

    // const dateString = `${selectedMonthName} ${currentDay}, ${currentYear}`;
    const dateString = created;
    return (
        <div className="postTime">
            {dateString}
        </div>
    )
}

export default PostTime
