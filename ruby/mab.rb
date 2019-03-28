def my_map(array, &prc)
    answer = []
    if prc
        array.each do |element|
            answer.push( prc.call(element) )
        end
    else
        return array;
    end
    answer
end