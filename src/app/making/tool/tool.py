import json

# इनपुट और आउटपुट फाइल
input_file = "csvjson.json"  # आपकी JSON फाइल
output_file = "sentance_id.json"  # आउटपुट फाइल

# JSON डेटा लोड करें
with open(input_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

# प्रत्येक एंट्री में अंत में ID जोड़ें (1 से शुरू)
for index, entry in enumerate(data, start=1):
    entry["id"] = index  # ID अंत में जुड़ेगा (Python 3.7+ में ऑर्डर मेन्टेन रहता है)

# आउटपुट फाइल में सेव करें
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False, sort_keys=False)  # sort_keys=False से ऑर्डर वही रहेगा

print(f"✅ ID अंत में जोड़कर {output_file} में सेव किया गया!")