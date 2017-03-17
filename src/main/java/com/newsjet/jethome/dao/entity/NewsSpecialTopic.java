package com.newsjet.jethome.dao.entity;

import java.util.Date;

public class NewsSpecialTopic {
    private Integer id;

    private String title;

    private String subtitle;

    private String cid;

    private Date createTime;

    private String imgs;

    private String bgImg;

    private String detailDesc;

    private Integer pos;

    private String keywordInclusion;

    private String keywordExclusion;

    private Integer showType;

    private Integer includeNews;

    private Integer isToplist;

    private Integer toplistPos;

    private Integer active;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle == null ? null : subtitle.trim();
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid == null ? null : cid.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getImgs() {
        return imgs;
    }

    public void setImgs(String imgs) {
        this.imgs = imgs == null ? null : imgs.trim();
    }

    public String getBgImg() {
        return bgImg;
    }

    public void setBgImg(String bgImg) {
        this.bgImg = bgImg == null ? null : bgImg.trim();
    }

    public String getDetailDesc() {
        return detailDesc;
    }

    public void setDetailDesc(String detailDesc) {
        this.detailDesc = detailDesc == null ? null : detailDesc.trim();
    }

    public Integer getPos() {
        return pos;
    }

    public void setPos(Integer pos) {
        this.pos = pos;
    }

    public String getKeywordInclusion() {
        return keywordInclusion;
    }

    public void setKeywordInclusion(String keywordInclusion) {
        this.keywordInclusion = keywordInclusion == null ? null : keywordInclusion.trim();
    }

    public String getKeywordExclusion() {
        return keywordExclusion;
    }

    public void setKeywordExclusion(String keywordExclusion) {
        this.keywordExclusion = keywordExclusion == null ? null : keywordExclusion.trim();
    }

    public Integer getShowType() {
        return showType;
    }

    public void setShowType(Integer showType) {
        this.showType = showType;
    }

    public Integer getIncludeNews() {
        return includeNews;
    }

    public void setIncludeNews(Integer includeNews) {
        this.includeNews = includeNews;
    }

    public Integer getIsToplist() {
        return isToplist;
    }

    public void setIsToplist(Integer isToplist) {
        this.isToplist = isToplist;
    }

    public Integer getToplistPos() {
        return toplistPos;
    }

    public void setToplistPos(Integer toplistPos) {
        this.toplistPos = toplistPos;
    }

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }
}