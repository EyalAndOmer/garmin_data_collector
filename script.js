//Posledny bol 15 januar
function get_data(collected_data) {
    let average_heart_rate = ""
    let steps_count = ""
    let total_sleep_time = ""
    let sleep_data = ""
    let average_o2 = ""
    let oxymeter_data = ""

    let deep_sleep = ""
    let light_sleep = ""
    let rem_sleep = ""
    let wakefull_sleep = ""

    let lowest_o2 = ""
    let average_sleep_pulse = ""

    try {
        average_heart_rate = document.querySelector(".HeartRateCardMain_wrapper__3H4Qz")
            .querySelector(".DailySummaryCardMainValue_mainValue__38C3I").textContent.split(" ")[0]
        
        steps_count = document.querySelector(".StepsCardMain_wrapper__2CPX5")
            .querySelector(".DailySummaryCardMainValue_mainValue__38C3I").textContent.split(" ")[0]

        total_sleep_time = document.querySelector(".SleepCard_sleepCardMain__1YrNK")
            .querySelector(".DailySummaryCardMainValue_mainValue__38C3I").textContent

        sleep_data = document.querySelector(".SleepCard_sleepCardMain__1YrNK .marYAxisXS .flexboxgrid_row__cD___ .flexboxgrid_colXs7__3FA4A .flexboxgrid_row__cD___")
            .querySelectorAll(".flexboxgrid_colXs12__3z5Wt")
        
        average_o2 = document.querySelector(".SleepPulseOxCard_pulseOxCardMain__1RwiS")
            .querySelector(".DailySummaryCardMainValue_mainValue__38C3I").textContent.split(" ")[0]
            
        oxymeter_data = document.querySelector(".SleepPulseOxCard_pulseOxCardMain__1RwiS .marYAxisXS .flexboxgrid_row__cD___ .flexboxgrid_colXs7__3FA4A")
            .querySelectorAll(".flexboxgrid_colXs12__3z5Wt")
            
    } catch (error) {
        
    }

    if (sleep_data != "" && total_sleep_time != "--") {
        deep_sleep = sleep_data[0].textContent
        light_sleep = sleep_data[1].textContent
        rem_sleep = sleep_data[2].textContent
        wakefull_sleep = sleep_data[3].textContent   
    }

    if (oxymeter_data != "") {
        lowest_o2 = oxymeter_data[0].textContent
        average_sleep_pulse = oxymeter_data[1].textContent.split(" ")[0]
    }


    collected_data["average_heart_rate"].push(average_heart_rate == "" ? "--" : average_heart_rate)
    collected_data["steps"].push(steps_count == "" ? "--" : steps_count)
    collected_data["sleep-total"].push(total_sleep_time == "" ? "--" : total_sleep_time)
    collected_data["sleep_deep"].push(deep_sleep == "" ? "--" : deep_sleep)
    collected_data["sleep_light"].push(light_sleep == "" ? "--" : light_sleep)
    collected_data["sleep_rem"].push(rem_sleep == "" ? "--" : rem_sleep)
    collected_data["sleep_wakefull"].push(wakefull_sleep == "" ? "--" : wakefull_sleep)
    collected_data["average_sleep_pulse"].push(average_sleep_pulse == "" ? "--" : average_sleep_pulse)
    collected_data["average_o2"].push(average_o2 == "" ? "--" : average_o2)
    collected_data["lowest_o2"].push(lowest_o2 == "" ? "--" : lowest_o2)
}

let collected_data = {
    "average_heart_rate": [],
    "steps": [],
    "sleep-total": [],
    "sleep_deep": [],
    "sleep_light": [],
    "sleep_rem": [],
    "sleep_wakefull": [],
    "average_sleep_pulse": [],
    "average_o2": [],
    "lowest_o2": []
}

let count = 1
let main_algorithm = () => {
    for (let = 0; i < 150; i++) {
        setTimeout(() => {
            console.log(count, "done")
            count++
            get_data(collected_data)
            document.querySelector('[aria-label="Ďalej"]').click()
        }, 6000 * i)
    }
}

main_algorithm()
