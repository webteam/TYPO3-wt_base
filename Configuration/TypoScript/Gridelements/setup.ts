## CE Two Columns ##################################################################################
tt_content.gridelements_pi1.20.10 {
	setup {
		# id of the CE grid element
		1 {
			columns {
				# left column with "column number" 0
				0 {
					renderObj =< tt_content
					wrap = <div class="span6">|</div>
				}
				# right column with "column number" 1
				1 {
					renderObj =< tt_content
					wrap = <div class="span6">|</div>
				}
			}
			# use any stdWrap properties to wrap the whole grid
			wrap = <div class="FceTwoColumns row-fluid">|</div>
		}
	}
}