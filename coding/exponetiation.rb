def exponent(base, power)
    i = 0
    sum = 1
    return sum if power == 0

    if power < 1
        while i < power
        sum *= base
        i -= 1
        end

        return 1.0/sum
    else
        while i < power
            sum *= base
            i += 1
        end

        return sum
    end
end