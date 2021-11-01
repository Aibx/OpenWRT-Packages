--Copyright: https://github.com/coolsnowwolf/lede/tree/master/package/lean/luci-app-cpufreq
--Planner: https://github.com/unifreq/openwrt_packit
--Extended support: https://github.com/ophub/luci-app-amlogic
--Function: Support multi-core

local e = require"nixio.fs"
local mp

--Remove the spaces in the string
function trim(str)
   --return (string.gsub(str, "^%s*(.-)%s*$", "%1"))
   return (string.gsub(str, "%s+", ""))
end

--split
function string.split(e, t)
    e = tostring(e)
    t = tostring(t)
    if (t == '') then return false end
    local a,o = 0,{}
    for i,t in function() return string.find(e, t, a, true) end do
        table.insert(o,string.sub(e, a, i-1))
        a = t + 1
    end
    table.insert(o,string.sub(e, a))
    return o
end

mp = Map("cpufreq",translate("CPU Freq Settings"))
mp.description = translate("Set CPU Scaling Governor to Max Performance or Balance Mode")
s = mp:section(NamedSection,"cpufreq","settings")
s.anonymouse = true

local cpu_policys = luci.sys.exec("ls /sys/devices/system/cpu/cpufreq | grep -E 'policy[0-9]{1,3}' | xargs") or "policy0"
policy_array = string.split(cpu_policys, " ")

for tt,policy_name in ipairs(policy_array) do

    --Dynamic tab, automatically changes according to the number of cores, begin ------
    policy_name = tostring(trim(policy_name))
    policy_id = tostring(trim(string.gsub(policy_name, "policy", "")))
    if (policy_name == "policy0") then policy_id = "" end

    tab_name = policy_name
    tab_id = tostring(trim("tab" .. policy_id))

    cpu_freqs = e.readfile(trim("/sys/devices/system/cpu/cpufreq/" .. policy_name .. "/scaling_available_frequencies")) or "100000"
    cpu_freqs = string.sub(cpu_freqs, 1, -3)
    cpu_governors = e.readfile(trim("/sys/devices/system/cpu/cpufreq/" .. policy_name .. "/scaling_available_governors")) or "performance"
    cpu_governors = string.sub(cpu_governors, 1, -3)
    freq_array = string.split(cpu_freqs, " ")
    governor_array = string.split(cpu_governors, " ")

    s:tab(tab_id, tab_name)
    governor = s:taboption(tab_id, ListValue, trim("governor" .. policy_id), translate("CPU Scaling Governor"))
    for t,e in ipairs(governor_array) do
        if e ~= "" then governor:value(e,translate(e,string.upper(e))) end
    end

    minfreq = s:taboption(tab_id, ListValue, trim("minifreq" .. policy_id), translate("Min Idle CPU Freq"))
    for t,e in ipairs(freq_array) do
        if e ~= "" then minfreq:value(e) end
    end

    maxfreq = s:taboption(tab_id, ListValue, trim("maxfreq" .. policy_id), translate("Max Turbo Boost CPU Freq"))
    for t,e in ipairs(freq_array) do
        if e ~= "" then maxfreq:value(e) end
    end

    upthreshold = s:taboption(tab_id, Value, trim("upthreshold" .. policy_id), translate("CPU Switching Threshold"))
    upthreshold.datatype = "range(1,99)"
    upthreshold.rmempty = false
    upthreshold.description = translate("Kernel make a decision on whether it should increase the frequency (%)")
    upthreshold.placeholder = 50
    upthreshold.default = 50

    factor = s:taboption(tab_id, Value, trim("factor" .. policy_id), translate("CPU Switching Sampling rate"))
    factor.datatype = "range(1,100000)"
    factor.rmempty = false
    factor.description = translate("The sampling rate determines how frequently the governor checks to tune the CPU (ms)")
    factor.placeholder = 10
    factor.default = 10
    --Dynamic tab, automatically changes according to the number of cores, end ------

end

return mp

