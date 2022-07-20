import json
from datetime import date, timedelta
import re

def string_to_minues(time):
    if (time == "--"):
        return "0"
    
    time_split = time.split(" ")
    
    if (len(time_split) == 1):
        minutes = re.sub("[^0-9]", "", time_split[0])
        return str(minutes)
    
    hours = re.sub("[^0-9]", "", time_split[0])
    minutes = re.sub("[^0-9]", "", time_split[1])

    return str(int(hours) * 60 + int(minutes))

with open('data.json', 'r') as f:
  data = json.load(f)

test = data['average_heart_rate']
extract_days = len(test) - 1

data_keys = data.keys()



export_file = open("data.csv", "w")

export_file.write("Celkova dlzka spanku" + ";" "Hlboky" + ";" + "Lahky" + ";" + "REM" + ";" + "Bdelost" + ";" + "Pr.SpO2" + ";" + "Najnizsia SpO2" + ";" + "Priemerny pulz-spanok" + ";" + "Priemerny pulz - den" + ";" + "Pocet krokov" + ";" + "Datum" + "\n")

for i in range(len(test) - 1, 0, -1):
    row = ""
    d = str((date.today() - timedelta(days=extract_days)).strftime("%-d %b"))
    
    total_sleep = string_to_minues(data["sleep-total"][i]) if string_to_minues(data["sleep-total"][i]) != "0" else "--" 
    deep_sleep = string_to_minues(data["sleep_deep"][i]) if string_to_minues(data["sleep_deep"][i]) != "0" else "--"
    light_sleep = string_to_minues(data["sleep_light"][i]) if string_to_minues(data["sleep_light"][i]) != "0" else  "--"
    rem_sleep = string_to_minues(data["sleep_rem"][i]) if string_to_minues(data["sleep_rem"][i]) != "0" else "--"
    wakefull_sleep = string_to_minues(data["sleep_wakefull"][i]) if string_to_minues(data["sleep_wakefull"][i]) != "0" else "--"
    
    average_o2 = data["average_o2"][i].replace("%", "")
    lowest_o2 = data["lowest_o2"][i].replace("%", "")
    
    average_sleep_pulse = data["average_sleep_pulse"][i]
    averate_day_pulse = data["average_heart_rate"][i]
    
    step_count = data["steps"][i]
    row += total_sleep + ";" + deep_sleep + ";" + light_sleep + ";" + rem_sleep + ";" + wakefull_sleep + ";" + str(average_o2) + ";" + str(lowest_o2) + ";" + str(average_sleep_pulse) + ";" + str(averate_day_pulse) + ";" + str(step_count) + ";" + d + "\n"
    export_file.write(row)
    extract_days -= 1


