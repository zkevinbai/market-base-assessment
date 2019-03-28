class Boat 

    def initialize(num_anchors, num_sails, length)
        @num_anchors = num_anchors
        @num_sails = num_sails
        @length = length
        @times_sailed = 0
    end

    def num_anchors
        @num_anchors
    end

    def num_sails
        @num_sails
    end

    def length
        @length
    end

    def times_sailed
        @times_sailed
    end

    def increment_times_sailed
        @times_sailed += 1
    end

end